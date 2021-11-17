import React from 'react';

import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorContext } from '../../utils/appContext';

import BurgerConstructorStyle from './BurgerConstructor.module.css';

function BurgerConstructor(props) {
    const [ ...burger ] = React.useContext(BurgerConstructorContext);    

    function orderBtnClick() {
        props.orderButtonClick();
        props.modalOpen();

    };

    function sumPriceOrder(burgerIngredients) {
        let sum = 0;
        burgerIngredients.forEach((ingredient) => {
                if (ingredient.type === "bun") {
                    sum += 2*ingredient.price;
                } else {
                    sum += ingredient.price;
                }
            }

        )        
        return sum;
    }

    return (
        <section  className={`${BurgerConstructorStyle.constructor}`}>
                       
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={props.bunIngredient[0].name}
                    price={props.bunIngredient[0].price}
                    thumbnail={props.bunIngredient[0].image}
                />
            </div>
            <ul className={`${BurgerConstructorStyle.constructor_list} layout-cell layout-scrollbar`}>
                {burger.map((ingredient, i) => ( ingredient.type !== "bun" && 
                    <li key={i} className={BurgerConstructorStyle.constructor_item}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                        />
                    </li>
                ))}
            </ul>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={props.bunIngredient[0].name}
                    price={props.bunIngredient[0].price}
                    thumbnail={props.bunIngredient[0].image}
                />
            </div>
                       
            <div className={BurgerConstructorStyle.ingredients__price}>
                <span  className={`${BurgerConstructorStyle.price__text} text_type_digits-medium`}>{sumPriceOrder(burger)}</span>
                <CurrencyIcon type="primary" />
                <div className={BurgerConstructorStyle.price__btn}>
                <Button type="primary" size="medium" onClick={orderBtnClick}>
                    Оформить заказ
                </Button>
                </div>
            </div>
    
</section>
    )
}

export default BurgerConstructor;