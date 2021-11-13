import ModalOverlayStyle from './ModalOverlay.module.css';
import Modal from '../Modal/Modal';

function ModalOverlay(props) {
    return(
        <div onClick={props.onClose} className={`${ModalOverlayStyle.modal_overlay} ${props.modal && ModalOverlayStyle.modal_opened}`}>
            <Modal title="Детали ингредиента" onClose={props.onClose} ingredient={props.ingredient}/>
        </div>
    )
};

export default ModalOverlay;