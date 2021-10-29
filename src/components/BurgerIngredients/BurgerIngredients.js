import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from './Ingredient';

import BurgerIngredientsStyle from './BurgerIngredients.module.css';

import { ingredients } from '../utils/data.js';

function BurgerIngredients() {

    const [current, setCurrent] = React.useState('Булки')
    
    return (
        <>
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
            <div className={`text text_type_main-default ${BurgerIngredientsStyle.ingredients}`}>
                <h2 className={BurgerIngredientsStyle.ingredients__title}>Булки</h2>
                <ul className={BurgerIngredientsStyle.ingredients__list}>
                    {ingredients.map((ingredient, i) => (
                        ingredient.type === "bun" && <Ingredient key={i} img={ingredient.image} price={ingredient.price} description={ingredient.name} />
                    ))}
                </ul>
            </div>
            <div className={`text text_type_main-default ${BurgerIngredientsStyle.ingredients}`}>
                <h2 className={BurgerIngredientsStyle.ingredients__title}>Соусы</h2>
                <ul className={BurgerIngredientsStyle.ingredients__list}>
                    {ingredients.map((ingredient, i) => (
                        ingredient.type === "sauce" && <Ingredient key={i} img={ingredient.image} price={ingredient.price} description={ingredient.name} />
                    ))}
                </ul>
            </div>
            <div className={`text text_type_main-default ${BurgerIngredientsStyle.ingredients}`}>
                <h2 className={BurgerIngredientsStyle.ingredients__title}>Начинки</h2>
                <ul className={BurgerIngredientsStyle.ingredients__list}>
                    {ingredients.map((ingredient, i) => (
                        ingredient.type === "main" && <Ingredient key={i} img={ingredient.image} price={ingredient.price} description={ingredient.name} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default BurgerIngredients;