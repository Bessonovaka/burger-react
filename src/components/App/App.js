import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import AppHeader from '../AppHeader/AppHeader';
import HomePage from '../../pages/home'; 
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
            />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <Route path="/forgot-password" exact>
            <ForgotPasswordPage />
          </Route>
          <Route path="/reset-password" exact>
            <ResetPasswordPage />
          </Route>
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
          <Route path="/ingredients/id" exact>
            <IngredientPage 
              ingredient={props.ingredient}
            />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: url => dispatch(ingredientsFetchData(url)),
    selectIngredient: (ingredient) => dispatch(setSelectedIngredient(ingredient)),
    getOrderNumber: (url, ids) => dispatch(postOrder(url, ids))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
