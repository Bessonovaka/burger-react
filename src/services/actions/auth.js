import { getResponseData } from "../../utils/getResponseData";
import { setCookie, deleteCookie, getCookie } from "../../utils/cookie";
import { LIFE_OF_COOKIE_IN_MINUTES } from "../../utils/constants";

export function registration(url, user, cb) {
    return (dispatch) => {
        fetch(url, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify({"email": user.email, "password": user.password, "name": user.name})
        })
            .then(getResponseData)
            .then((res) => {
                let authToken;
                if (!res.accessToken.indexOf('Bearer') === 0) {
                    authToken = res.accessToken.split('Bearer ')[1];
                }
                dispatch({
                    type: 'SIGN_IN_SUCCESS',
                });
                setCookie("accessToken", authToken, LIFE_OF_COOKIE_IN_MINUTES);
                localStorage.setItem('refreshToken', res.refreshToken);
                cb();
            })
            .catch(error => {
                dispatch({
                  type: 'SIGN_IN_FAILED',
                  message: error.message,
                });
            })
    }
};

export function logIn(url, user, cb) {
    return function(dispatch) {
        fetch(url, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify({"email": user.email, "password": user.password})
        })
        .then(getResponseData)
        .then(res => {
          let authToken;
          if (res.accessToken.indexOf('Bearer') === 0) {
            authToken = res.accessToken.split('Bearer ')[1];
          }
          dispatch({
            type: 'LOG_IN_SUCCESS',
          });
          setCookie("accessToken", authToken, LIFE_OF_COOKIE_IN_MINUTES);
          localStorage.setItem('refreshToken', res.refreshToken);
          cb();
        })
        .catch(error => {
          dispatch({
            type: 'LOG_IN_FAILED',
            message: error.message
          });
          console.log('Не залогинились :(', error.message)
        });
    }
};

export function logOut(url) {
    return function(dispatch) {
        fetch(url, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify({"token": localStorage.getItem('refreshToken') })
        })
        .then(getResponseData)
        .then(res => {
          deleteCookie("accessToken");
          localStorage.removeItem('refreshToken');
          dispatch({
            type: 'LOG_OUT_SUCCESS',
          });
          dispatch({
            type: 'CLEAR_SELECTED_INGREDIENTS',
          })
        })
        .catch(error => {
          dispatch({
            type: 'LOG_OUT_FAILED'
          });
        })
    }
};

export const refreshToken = function (afterRefresh) {
    return function(dispatch) {
        fetch('https://norma.nomoreparties.space/api/auth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"token": localStorage.getItem('refreshToken')})
        })
        .then(getResponseData)
        .then(res => {
          let authToken;
          if (res.accessToken.indexOf('Bearer') === 0) {
            authToken = res.accessToken.split('Bearer ')[1];
          }
          dispatch({
            type: 'REFRESH_TOKEN_SUCCESS'
          });
          localStorage.setItem('refreshToken', res.refreshToken);
          setCookie('accessToken', authToken, LIFE_OF_COOKIE_IN_MINUTES);
          dispatch(afterRefresh());
        })
        .catch(error => {
          dispatch({
            type: 'REFRESH_TOKEN_FAILED'
          });
        })
    }
};

export const getUserData = function () {
  return function(dispatch) {
    fetch('https://norma.nomoreparties.space/api/auth/user', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ` + getCookie('accessToken')
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    })
      .then(getResponseData)
      .then(res => {
        dispatch({
          type: 'GET_USER_DATA_SUCCESS',
          user: res.user
        });
      })
      .catch(error => {
        if (error.message === "jwt malformed") {
          dispatch(refreshToken(getUserData()))
        } else {
          dispatch({
            type: 'GET_USER_DATA_FAILED',
            message: error.message,
          });
        }
      })
  }
}

export const patchUserData = function (payload) {
  return function(dispatch) {
    fetch('https://norma.nomoreparties.space/api/auth/user', {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ` + getCookie('accessToken')
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(payload)
    })
      .then(getResponseData)
      .then(res => {
        dispatch({
          type: 'PATCH_USER_DATA_SUCCESS',
          user: res.user
        });
      })
      .catch(error => {
        if (error.message === "jwt malformed") {
          dispatch(refreshToken(getUserData()))
        } else {
          dispatch({
            type: 'PATCH_USER_DATA_FAILED',
            message: error.message,
          });
        }
      })
  }
}
