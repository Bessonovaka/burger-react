import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorStyle from './BurgerConstructor.module.css';

import bun1 from '../../images/bun-02.png';

function BurgerConstructor() {
    return (
        <section className={BurgerConstructorStyle.constructor}>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={bun1}
                />
            </div>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={bun1}
                />
            </div>
            <div className={BurgerConstructorStyle.constructor_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={bun1}
                />
            </div>
            <div className={BurgerConstructorStyle.ingredients__price}>
                <span  className={`text text_type_digits-medium`}>600</span>
                <CurrencyIcon type="primary" />
                <div className={BurgerConstructorStyle.price}>
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button>
                </div>
            </div>
    
</section>
    )
}

export default BurgerConstructor;