import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredient from './Ingredient';

import BurgerIngredientsStyle from './BurgerIngredients.module.css';

function BurgerIngredients(props) {
    const bunTitleRef = React.createRef();
    const sauceTitleRef = React.createRef();
    const mainTitleRef = React.createRef();  

    const [current, setCurrent] = React.useState('Булки');

    function handleScroll() {
        if (bunTitleRef.current.getBoundingClientRect().y > 0) {
            setCurrent('Булки');
        } else if (sauceTitleRef.current.getBoundingClientRect().y > 0) {
            setCurrent('Соусы');
        } else if (mainTitleRef.current.getBoundingClientRect().y > 0) {
            setCurrent('Начинки');
        }
    };

    function handleTabClick(event) {
        setCurrent(event);
        if (event === 'Булки') {
            window.scrollTo(bunTitleRef.current.getBoundingClientRect().x, bunTitleRef.current.getBoundingClientRect().y);
        } else if (event === 'Соусы') {
            window.scrollTo(sauceTitleRef.current.getBoundingClientRect().x, sauceTitleRef.current.getBoundingClientRect().y);
        } else if (event === 'Начинки') {
            window.scrollTo(mainTitleRef.current.getBoundingClientRect().x, mainTitleRef.current.getBoundingClientRect().y);
        }
        
    }

    return (
        <div>
            <div style={{ display: 'flex' }} className={BurgerIngredientsStyle.tab}>
                <Tab value="Булки" active={current === 'Булки'} onClick={handleTabClick}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={handleTabClick}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={handleTabClick}>
                    Начинки
                </Tab>
            </div>
            
            <div onScroll={handleScroll} className={`text text_type_main-default layout-cell layout-scrollbar ${BurgerIngredientsStyle.ingredients__wrap}`}>
            <div>
                <h2 ref={bunTitleRef} className={BurgerIngredientsStyle.ingredients__title}>Булки</h2>
                <ul className={BurgerIngredientsStyle.ingredients__list}>
                    {props.ingredients.map((ingredient, i) => (
                        ingredient.type === "bun" && <Ingredient modal={props.modal} modalOpen={props.modalOpen} key={i} ingredient={ingredient} />
                    ))}
                </ul>
            </div>
            <div>
                <h2 ref={sauceTitleRef} className={BurgerIngredientsStyle.ingredients__title}>Соусы</h2>
                <ul className={BurgerIngredientsStyle.ingredients__list}>
                    {props.ingredients.map((ingredient, i) => (
                        ingredient.type === "sauce" && <Ingredient modal={props.modal} modalOpen={props.modalOpen} key={i} ingredient={ingredient} />
                    ))}
                </ul>
            </div>
            <div>
                <h2 ref={mainTitleRef} className={BurgerIngredientsStyle.ingredients__title}>Начинки</h2>
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