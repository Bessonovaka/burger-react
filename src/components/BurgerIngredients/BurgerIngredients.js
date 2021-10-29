import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from './Ingredient';

import BurgerIngredientsStyle from './BurgerIngredients.module.css';

import bun1 from '../../images/bun-02.png';
import bun2 from '../../images/bun-01.png';
import sause1 from '../../images/sauce-01.png';
import sause2 from '../../images/sauce-02.png';
import sause3 from '../../images/sauce-03.png';
import sause4 from '../../images/sauce-04.png';

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
                    <Ingredient img={bun1} price={20} description="Краторная булка N-200i" />
                    <Ingredient img={bun2} price={20} description="Флюоресцентная булка R2-D3" />
                </ul>
            </div>
            <div className={`text text_type_main-default ${BurgerIngredientsStyle.ingredients}`}>
                <h2 className={BurgerIngredientsStyle.ingredients__title}>Соусы</h2>
                <ul className={BurgerIngredientsStyle.ingredients__list}>
                    <Ingredient img={sause1} price={30} description="Соус Spicy-X" />
                    <Ingredient img={sause2} price={30} description="Соус фирменный Space Sauce" />
                    <Ingredient img={sause3} price={30} description="Соус фирменный Space Sauce" />
                    <Ingredient img={sause4} price={30} description="Соус фирменный Space Sauce" />
                </ul>
            </div>
        </>
    )
}

export default BurgerIngredients;