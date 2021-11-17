import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

import './App.css';

import { BurgerConstructorContext } from '../../utils/appContext';
import { constData } from '../../utils/constants';

function App() {

  const [ingredients, setIngredients] = React.useState([]);
  const [isIngredientDetailsOpen, setIngredientDetailsOpen] = React.useState(false);
  const [isOrderDetailsOpen, setOrderDetailsOpen] = React.useState(false);
  const [selectedIngredient, setSelectedIngredient] = React.useState({});
  const [orderInfo, setOrderInfo] = React.useState({});

  React.useEffect(() => {
    fetch('https://norma.nomoreparties.space/api/ingredients')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIngredients(data.data);
      })
      .catch((err) => {
        console.log("Ошибка");
        setIngredients(constData);
      });

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
  const ids = allIngredients.map((ingredient) => {
    return ingredient._id;
  })

  function orderButtonClick() {
    fetch('https://norma.nomoreparties.space/api/orders', {
      method: 'POST',
      body: JSON.stringify({"ingredients": ids})
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOrderInfo(data.order);
        console.log(data);
      })
      .catch((err) => {
        setOrderInfo({"number": 6257});
        console.log("Ошибка!", orderInfo)
      });
  };

  function modalIngredientDetailsOpen(ingredient) {
    setIngredientDetailsOpen(true);
    setSelectedIngredient(ingredient);
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
        ingredient={selectedIngredient}
        onClose={closeAllPopups}
        orderInfo={orderInfo}
      />
      <AppHeader />
      
      <main className="main">
      <BurgerIngredients ingredients={ingredients} modalOpen={modalIngredientDetailsOpen} />
      <BurgerConstructorContext.Provider value={ingredients} >
        <BurgerConstructor modalOpen={modalOrderDetailsOpenOpen} orderButtonClick={orderButtonClick} bunIngredient={bunIngredient}/>
      </BurgerConstructorContext.Provider>
      </main>
    </div>
  );
}

export default App;
