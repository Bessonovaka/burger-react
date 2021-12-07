import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
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
        drop(curItem) {
            const customID = uuidv4();
            var isBun = false;
            props.actualIngredients.forEach(item => {
                if (item.type === "bun") {
                    isBun = true;
                }
            });
            dispatch({
                type: 'UPDATE_TYPE',
                id: curItem._id,
                count: curItem.__v,
                isBun: isBun,
                itemType: curItem.type, 
                customID: customID
            });
        }
    });

    function orderBtnClick() {
        props.orderButtonClick();
        props.modalOpen();

    };

    function sumPriceOrder(burgerIngredients) {
        let sum = 0;
        burgerIngredients.forEach((ingredient) => {
                if (ingredient.type !== "bun") {
                    sum += ingredient.price;
                } else {
                    sum += 2*props.bunIngredient[0].price;
                } 
            }
        )        
        return sum;
    };

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
                    {props.actualIngredients && props.actualIngredients.map((ingredient, i) => {
                        const deleteIngredient = () => {
                            dispatch({
                              type: 'DELETE_INGREDIENT',
                              id: ingredient._id,
                              count: ingredient.__v,
                              customID: ingredient.customID
                            });
                        };
                        if (ingredient.type !== "bun") {
                            return (
                                    <li key={i} className={BurgerConstructorStyle.constructor_item}>
                                        <DragIcon type="primary"/>
                                        <ConstructorElement
                                        text={ingredient.name}
                                        price={ingredient.price}
                                        thumbnail={ingredient.image}
                                        handleClose={deleteIngredient}
                                        />
                                    </li>
                                )
                            }
                        }
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
                    { props.isLoggedIn ? (
                            <Button type="primary" size="medium" onClick={orderBtnClick}>
                                Оформить заказ
                            </Button>
                        ) : (
                            <Link 
                                to={{
                                pathname: `/login`
                                }}
                                className={ `text text_type_main-default`}
                            >
                                Войти
                            </Link>
                        )
                    }
                    </div>
                </div>    
            </section>
        )
    }

export default BurgerConstructor;