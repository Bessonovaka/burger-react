import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from './Ingredient';

import BurgerIngredientsStyle from './BurgerIngredients.module.css';

function BurgerIngredients(props) {

    const [current, setCurrent] = React.useState('Булки')

    return (
        <div>
            <div style={{ display: 'flex' }} className={BurgerIngredientsStyle.tab}>
                <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            
            <div className={`text text_type_main-default layout-cell layout-scrollbar ${BurgerIngredientsStyle.ingredients__wrap}`}>
            <div>
                <h2 className={BurgerIngredientsStyle.ingredients__title}>Булки</h2>
                <ul className={BurgerIngredientsStyle.ingredients__list}>
                    {props.ingredients.map((ingredient, i) => (
                        ingredient.type === "bun" && <Ingredient modal={props.modal} modalOpen={props.modalOpen} key={i} ingredient={ingredient} />
                    ))}
                </ul>
            </div>
            <div>
                <h2 className={BurgerIngredientsStyle.ingredients__title}>Соусы</h2>
                <ul className={BurgerIngredientsStyle.ingredients__list}>
                    {props.ingredients.map((ingredient, i) => (
                        ingredient.type === "sauce" && <Ingredient modal={props.modal} modalOpen={props.modalOpen} key={i} ingredient={ingredient}  />
                    ))}
                </ul>
            </div>
            <div>
                <h2 className={BurgerIngredientsStyle.ingredients__title}>Начинки</h2>
                <ul className={BurgerIngredientsStyle.ingredients__list}>
                    {props.ingredients.map((ingredient, i) => (
                        ingredient.type === "main" && <Ingredient modal={props.modal} modalOpen={props.modalOpen} key={i} ingredient={ingredient} />
                    ))}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default BurgerIngredients;