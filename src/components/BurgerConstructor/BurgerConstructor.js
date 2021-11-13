import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorStyle from './BurgerConstructor.module.css';

function BurgerConstructor(props) {
    return (
        <section  className={`${BurgerConstructorStyle.constructor} layout-cell layout-scrollbar`}>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    //thumbnail={props.ingredients[0][image]}
                />
            </div>
            <div  className={`layout-cell layout-scrollbar`}>
            
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    //thumbnail={bun1}
                />
            </div>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    //thumbnail={bun1}
                />
            </div>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    //thumbnail={bun1}
                />
            </div>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    //thumbnail={bun1}
                />
            </div>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    //thumbnail={bun1}
                />
            </div>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    //thumbnail={bun1}
                />
            </div>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    //thumbnail={bun1}
                />
            </div>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    //thumbnail={bun1}
                />
            </div>
            
            </div>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    //thumbnail={bun1}
                />
            </div>
            <div className={BurgerConstructorStyle.ingredients__price}>
                <span  className={`${BurgerConstructorStyle.price__text} text_type_digits-medium`}>600</span>
                <CurrencyIcon type="primary" />
                <div className={BurgerConstructorStyle.price__btn}>
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button>
                </div>
            </div>
    
</section>
    )
}

export default BurgerConstructor;