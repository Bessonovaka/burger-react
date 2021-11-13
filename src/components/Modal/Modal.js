import ModalStyle from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';

function Modal(props) {
    return(
        
            <form
            action="#"
            className={`${ModalStyle.modal}`}
            noValidate
          >
            <div onClick={props.onClose} className={ModalStyle.title} >
              <h2 className="text text_type_main-large">{props.title}</h2>
              <div className={ModalStyle.close}>
                <CloseIcon type="primary" />
              </div>
            </div>
            <OrderDetails isOpen={props.isOrderDetailsOpen}  />
            <IngredientDetails isOpen={props.isIngredientDetailsOpen} ingredient={props.ingredient} />
            </form>
        
    )
}

export default Modal;