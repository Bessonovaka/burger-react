import OrderDetailsStyle from './OrderDetails.module.css';
import done from '../../images/done.svg';


function OrderDetails(props) {
    return(
        <div className={`${OrderDetailsStyle.container} ${props.isOpen && OrderDetailsStyle.opened}`}>
            <h2 className={`${OrderDetailsStyle.title} text text_type_digits-large`}>034536</h2>
            <p className={`${OrderDetailsStyle.subtitle} text text_type_main-medium`}>идентификатор заказа</p>
            <img className={OrderDetailsStyle.img} src={done} />
            <p className={`${OrderDetailsStyle.text} text text_type_main-small`}>Ваш заказ начали готовить</p>
            <p className={`${OrderDetailsStyle.subtext} text text_type_main-small`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;