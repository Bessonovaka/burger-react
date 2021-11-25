import { useDispatch } from 'react-redux';

import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorStyle from './BurgerConstructor.module.css';

import { useDrop } from 'react-dnd';

function BurgerConstructor(props) {

    const dispatch = useDispatch();
    const [{ isHover } , dropTarget] = useDrop({
        accept: "ingredient",
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop(item) {dispatch({
            type: 'UPDATE_TYPE',
            id: item._id
        });},
    });

    function orderBtnClick() {
        props.orderButtonClick();
        props.modalOpen();

    };

    function sumPriceOrder(burgerIngredients) {
        let sum = props.bunIngredient[0] && 2*props.bunIngredient[0].price;
        burgerIngredients.forEach((ingredient) => {
                if (ingredient.type !== "bun") {
                    sum += ingredient.price;
                }
            }

        )        
        return sum;
    }


    const backgroundColor = isHover ? "lightgreen" : "transparent";
    
        return (
            <section className={`${BurgerConstructorStyle.constructor}`} ref={dropTarget} style={{backgroundColor}} > 
                {props.bunIngredient[0] && (
                    <div className={`${BurgerConstructorStyle.block}`}> 
                        <ConstructorElement 
                            type={'top'}
                            isLocked={true}
                            text={`${props.bunIngredient[0].name} (верх)`}
                            price={props.bunIngredient[0].price}
                            thumbnail={props.bunIngredient[0].image}
                            // id={bun[0]._id}
                            // handleClose={() => removeIngredientHandler(bun[0]._id)}
                        />
                    </div>
                )}                         
                <ul className={`${BurgerConstructorStyle.constructor_list} layout-cell layout-scrollbar`}>
                    {props.actualIngredients && props.actualIngredients.map((ingredient, i) => (ingredient.type !== "bun") && (
                        <li key={i} className={BurgerConstructorStyle.constructor_item}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                            />
                        </li>)
                    )}
                </ul>
                {props.bunIngredient[0] && (
                <div className={`${BurgerConstructorStyle.block}`}> 
                    <ConstructorElement 
                        type={'bottom'}
                        isLocked={true}
                        text={`${props.bunIngredient[0].name} (низ)`}
                        price={props.bunIngredient[0].price}
                        thumbnail={props.bunIngredient[0].image}
                        // id={bun[0]._id}
                        // handleClose={() => removeIngredientHandler(bun[0]._id)}
                    />
                </div>
                )}     
                <div className={BurgerConstructorStyle.ingredients__price}>
                    <span  className={`${BurgerConstructorStyle.price__text} text_type_digits-medium`}>{sumPriceOrder(props.actualIngredients)}</span>
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