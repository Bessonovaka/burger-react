import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import React from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function App() {

  const [ingredients, setIngredients] = React.useState([]);
  const [modal, setModalOpen] = React.useState(false);
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

  function modalOpen(ingredient) {
    setModalOpen(true);
    setSelectedIngredient(ingredient);
  }

  function closeAllPopups() {
    setModalOpen(false);
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
      <ModalOverlay modal={modal} ingredient={selectedIngredient} onClose={closeAllPopups} />
      <AppHeader />
      
      <main className="main">
      <BurgerIngredients ingredients={ingredients} modal={modal} modalOpen={modalOpen}/>
      <BurgerConstructor ingredients={ingredients} />
      </main>
    </div>
  );
}

export default App;
