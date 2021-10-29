import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
}

export default App;
