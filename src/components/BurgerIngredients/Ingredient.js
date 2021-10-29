import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerIngredientsStyle from './BurgerIngredients.module.css';

function Ingredient(props) {
    return(
        <li className={BurgerIngredientsStyle.ingredients__item}>
            <img src={props.img} className={BurgerIngredientsStyle.ingredients__img} />
            <Counter count={1} size="default" />
            <div className={BurgerIngredientsStyle.ingredients__price}>
                <span className={BurgerIngredientsStyle.price}>{props.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <p className={BurgerIngredientsStyle.ingredients__descr}>{props.description}</p>
        </li>
    )
}

export default Ingredient;