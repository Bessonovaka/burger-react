const initialState = {
    user: {name: '', email: ''},
    userDataRequest: false,
    userDataFailed: false,
    userDataFailedMessage: '',
    isLoggedIn: false,
    logInRequest: false,
    logInFailed: false,
    logInFailedMessage: '',
    logOutRequest: false,
    logOutFailed: false,
    registrateRequest: false,
    registrateFailed: false,
    registrateFailedMessage: '',
    refreshTokenRequest: false,
    refreshTokenFailed: false,
    isForgotPassword: false,
    forgotPasswordRequest: false,
    forgotPasswordFailed: false,
    isResetPassword: false,
    resetPasswordRequest: false,
    resetPasswordFailed: false,
  }

export function auth(state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN_SUCCESS': {
            return {
              ...state,
              isLoggedIn: true,
              logInRequest: false,
              logInFailed: false
            }
          }
          case 'LOG_IN_FAILED': {
            return {
              ...state,
              logInFailed: true,
              logInRequest: false,
              logInFailedMessage: action.message,
            }
          }
          case 'SIGN_IN_SUCCESS': {
            return {
              ...state,
              isLoggedIn: true,
              registrateRequest: false,
              registrateFailed: false
            }
          }
          case 'SIGN_IN_FAILED': {
            return {
              ...state,
              registrateRequest: false,
              registrateFailed: true,
              registrateFailedMessage: action.message,
            }
          }
          case 'REFRESH_TOKEN_SUCCESS': {
            return {
              ...state,
              refreshTokenRequest: false,
              refreshTokenFailed: false
            }
          }
          case 'REFRESH_TOKEN_FAILED': {
            return {
              ...state,
              refreshTokenRequest: false,
              refreshTokenFailed: true
            }
          }
          case 'LOG_OUT_SUCCESS': {
            return {
              ...state,
              isLoggedIn: false,
              logOutRequest: false,
              logOutFailed: false,
              user: {name: '', email: ''}
            }
          }
          case 'LOG_OUT_FAILED': {
            return {
              ...state,
              logOutFailed: true
            }
          }
          case 'GET_USER_DATA_SUCCESS':
          case 'PATCH_USER_DATA_SUCCESS': {
            return {
              ...state,
              isLoggedIn: true,
              user: action.user,
              userDataRequest: false,
              userDataFailed: false
            }
          }
          case 'GET_USER_DATA_FAILED':
          case 'PATCH_USER_DATA_FAILED': {
            return {
              ...state,
              userDataFailed: true,
              userDataRequest: false,
              userDataFailedMessage: action.message
            }
          }
          default:
            return state
          }
}