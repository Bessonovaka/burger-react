import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';
import HomePage from '../../pages/home'; 
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { LoginPage } from '../../pages/login';
import { RegisterPage } from '../../pages/register';
import { ForgotPasswordPage } from '../../pages/forgot-password';
import { ResetPasswordPage } from '../../pages/reset-password';
import { ProfilePage } from '../../pages/profile';
import { IngredientPage } from '../../pages/ingredient';
import { NotFound404 } from '../../pages/not-found';

import { setSelectedIngredient } from '../../services/actions/ingredient';
import { ingredientsFetchData } from '../../services/actions/ingredients';
import { postOrder } from '../../services/actions/order';
import { registration, logIn, logOut } from '../../services/actions/auth';

import './App.css';

function App(props) {
  const [isIngredientDetailsOpen, setIngredientDetailsOpen] = React.useState(false);
  const [isOrderDetailsOpen, setOrderDetailsOpen] = React.useState(false);

  React.useEffect(() => {
    props.fetchData('https://norma.nomoreparties.space/api/ingredients');

    const handleEsc = (event) => {
      if(event.keyCode === 27) {
        closeAllPopups();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };  
  }, []);

  const id_ = props.actualIngredients.map((ingredient) => {
    return ingredient._id;
  })

  const bunIngredient = props.actualIngredients.filter(item => item.type === 'bun')

  function orderButtonClick() {
    props.getOrderNumber('https://norma.nomoreparties.space/api/orders', id_);
  };

  function registrationButtonClick(user) {
    props.registrationFetch('https://norma.nomoreparties.space/api/auth/register', user);
  }

  function loginButtonClick(user, cb) {
    props.loginFetch('https://norma.nomoreparties.space/api/auth/login', user, cb);
  }

  function logOutButtonClick() {
    props.logOutFetch('https://norma.nomoreparties.space/api/auth/logout');
  }

  function modalIngredientDetailsOpen(ingredient) {
    setIngredientDetailsOpen(true);
    props.selectIngredient(ingredient);
  }

  function modalOrderDetailsOpenOpen() {
    setOrderDetailsOpen(true);
  }

  function closeAllPopups() {
    setOrderDetailsOpen(false);
    setIngredientDetailsOpen(false);
  };

  return (
    <Router>
      <div className="App">
        
        <AppHeader />
        <Switch>
          <Route path='/' exact>
            <HomePage 
              isIngredientDetailsOpen={isIngredientDetailsOpen}
              isOrderDetailsOpen={isOrderDetailsOpen}
              ingredient={props.ingredient}
              onClose={closeAllPopups}
              orderInfo={props.order}
              ingredients={props.ingredients} 
              actualIngredients={props.actualIngredients} 
              modalOrderDetailsOpenOpen={modalOrderDetailsOpenOpen} 
              orderButtonClick={orderButtonClick} 
              bunIngredient={bunIngredient}
              modalIngredientDetailsOpen={modalIngredientDetailsOpen}
              isLoggedIn={props.isLoggedIn}
            />
          </Route>
          <Route path="/login" exact>
            <LoginPage isLoggedIn={props.isLoggedIn} loginButtonClick={loginButtonClick} />
          </Route>
          <Route path="/register" exact>
            <RegisterPage registrationButtonClick={registrationButtonClick} />
          </Route>
          <Route path="/forgot-password" exact>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact>
            <ResetPasswordPage />
          </Route>
          <ProtectedRoute isLoggedIn={props.isLoggedIn} path="/profile" exact>
            <ProfilePage logOutButtonClick={logOutButtonClick} />
          </ProtectedRoute>
          <Route path="/ingredients/id" exact>
            <IngredientPage ingredient={props.ingredient} />
          </Route>
          <Route>
            <NotFound404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {  
  return {
    ingredients: state.ingredients.ingredients,
    actualIngredients: state.ingredients.actualIngredients,
    ingredient: state.ingredient,
    orderNumber: state.orderNumber,
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: url => dispatch(ingredientsFetchData(url)),
    selectIngredient: (ingredient) => dispatch(setSelectedIngredient(ingredient)),
    getOrderNumber: (url, ids) => dispatch(postOrder(url, ids)),
    registrationFetch: (url, user, cb) => dispatch(registration(url, user, cb)),
    loginFetch: (url, user, cb) => dispatch(logIn(url, user, cb)),
    logOutFetch: (url) => dispatch(logOut(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
