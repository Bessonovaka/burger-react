import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import React from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function App() {

  const [ingredients, setIngredients] = React.useState([]);
  const [isIngredientDetailsOpen, setIngredientDetailsOpen] = React.useState(false);
  const [isOrderDetailsOpen, setOrderDetailsOpen] = React.useState(false);
  const [selectedIngredient, setSelectedIngredient] = React.useState({});

  React.useEffect(() => {
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

  React.useEffect(() => {
    fetch('https://norma.nomoreparties.space/api/ingredients')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIngredients(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div className="App">
      <ModalOverlay 
        isIngredientDetailsOpen={isIngredientDetailsOpen}
        isOrderDetailsOpen={isOrderDetailsOpen}
        ingredient={selectedIngredient}
        onClose={closeAllPopups}
      />
      <AppHeader />
      
      <main className="main">
      <BurgerIngredients ingredients={ingredients} modalOpen={modalIngredientDetailsOpen}/>
      <BurgerConstructor ingredients={ingredients} modalOpen={modalOrderDetailsOpenOpen}/>
      </main>
    </div>
  );
}

export default App;
