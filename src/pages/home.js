import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import ModalOverlay from '../components/ModalOverlay/ModalOverlay';

import HomePageStyles from "./home.module.css";

function HomePage(props) {
    return (
        <>
            <ModalOverlay 
                isIngredientDetailsOpen={props.isIngredientDetailsOpen}
                isOrderDetailsOpen={props.isOrderDetailsOpen}
                ingredient={props.ingredient}
                onClose={props.onClose}
                orderInfo={props.order}
            />
            <main className={HomePageStyles.main}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients ingredients={props.ingredients} modalOpen={props.modalIngredientDetailsOpen} />
                    <BurgerConstructor ingredients={props.ingredients} actualIngredients={props.actualIngredients} modalOpen={props.modalOrderDetailsOpenOpen} orderButtonClick={props.orderButtonClick} bunIngredient={props.bunIngredient}/>
                </DndProvider>
            </main>
        </>
    );
};
        
export default HomePage;