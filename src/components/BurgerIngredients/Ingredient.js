import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerIngredientsStyle from './BurgerIngredients.module.css';



function Ingredient(props) {    
    function handleIngredientClick() {
        props.modalOpen(props.ingredient);
    }
    
    return(        
        <li onClick={handleIngredientClick} className={`${BurgerIngredientsStyle.ingredients__item}`} >
            <img alt={props.ingredient.name} src={props.ingredient.image} className={BurgerIngredientsStyle.ingredients__img} />
            <Counter count={1} size="default" />
            <div className={BurgerIngredientsStyle.ingredients__price}>
                <span className={BurgerIngredientsStyle.price}>{props.ingredient.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <p className={BurgerIngredientsStyle.ingredients__descr}>{props.ingredient.name}</p>
        </li>
    )
}

Ingredient.propTypes = {
    price: PropTypes.number,
    description: PropTypes.string,
    img: PropTypes.string,
};

export default Ingredient;