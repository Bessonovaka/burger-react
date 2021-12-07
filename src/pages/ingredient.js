import IngredientDetails from '../components/IngredientDetails/IngredientDetails';


export function IngredientPage(props) {
    
  
  return (
    <IngredientDetails 
        title="Детали ингредиента" 
        ingredient={props.ingredient}
        isOpen={true}
    />
  );
}