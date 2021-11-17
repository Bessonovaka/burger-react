import ModalOverlayStyle from './ModalOverlay.module.css';
import Modal from '../Modal/Modal';

function ModalOverlay(props) {
    return(
        <div onClick={props.onClose} className={`${ModalOverlayStyle.modal_overlay} ${(props.isIngredientDetailsOpen || props.isOrderDetailsOpen) && ModalOverlayStyle.modal_opened}`}>
            <Modal 
                title={props.isIngredientDetailsOpen ? "Детали ингредиента" : ""}
                onClose={props.onClose} 
                ingredient={props.ingredient}
                isOrderDetailsOpen={props.isOrderDetailsOpen}
                isIngredientDetailsOpen={props.isIngredientDetailsOpen} 
                orderInfo={props.orderInfo}
            />
        </div>
    )
};

export default ModalOverlay;