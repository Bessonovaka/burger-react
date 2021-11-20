import React from 'react';
import { connect } from 'react-redux';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

import { setSelectedIngredient } from '../../services/actions/ingredient';
import { ingredientsFetchData } from '../../services/actions/ingredients';
import { postOrder } from '../../services/actions/order';

import './App.css';

import { BurgerConstructorContext } from '../../utils/appContext';
import { constData } from '../../utils/constants';


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

  const actualIngredients = constData.filter(ingredient =>  ingredient.type !== "bun" );
  const bunIngredient = constData.filter(ingredient => ingredient.type === "bun" );
  const allIngredients = actualIngredients.concat(bunIngredient[0]);
  const id_ = allIngredients.map((ingredient) => {
    return ingredient._id;
  })


  function orderButtonClick() {
    props.getOrderNumber('https://norma.nomoreparties.space/api/orders/', id_);
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
      <div className="App">
        <ModalOverlay 
          isIngredientDetailsOpen={isIngredientDetailsOpen}
          isOrderDetailsOpen={isOrderDetailsOpen}
          ingredient={props.ingredient}
          onClose={closeAllPopups}
          orderInfo={props.order}
        />
        <AppHeader />
        
        <main className="main">
        <BurgerIngredients ingredients={props.ingredients} modalOpen={modalIngredientDetailsOpen} />
        <BurgerConstructorContext.Provider value={props.ingredients} >
          <BurgerConstructor modalOpen={modalOrderDetailsOpenOpen} orderButtonClick={orderButtonClick} bunIngredient={bunIngredient}/>
        </BurgerConstructorContext.Provider>
        </main>
      </div>
  );
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    ingredient: state.ingredient,
    orderNumber: state.orderNumber
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: url => dispatch(ingredientsFetchData(url)),
    selectIngredient: (ingredient) => dispatch(setSelectedIngredient(ingredient)),
    getOrderNumber: (url, ids) => dispatch(postOrder(url, ids)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
