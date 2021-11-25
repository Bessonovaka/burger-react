import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerIngredientsStyle from './BurgerIngredients.module.css';


function Ingredient(props) {    
    function handleIngredientClick() {
        props.modalOpen(props.ingredient);
    }
    
    const [{ opacity }, drag] = useDrag({
        type: 'ingredient',
        item: props.ingredient,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });

    return( 
        <li ref={drag} onClick={handleIngredientClick} className={`${BurgerIngredientsStyle.ingredients__item}`} style={{ opacity }}>
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
    ingredient: PropTypes.object
};

export default Ingredient;