import PropTypes from 'prop-types';

import OrderDetailsStyle from './OrderDetails.module.css';
import done from '../../images/done.svg';


function OrderDetails(props) {
    if (props.orderInfo !== undefined) {   
        return(        
            <div className={`${OrderDetailsStyle.container} ${props.isOpen && OrderDetailsStyle.opened}`}>
                <h2 className={`${OrderDetailsStyle.title} text text_type_digits-large`}>{props.orderInfo.number}</h2>
                <p className={`${OrderDetailsStyle.subtitle} text text_type_main-medium`}>идентификатор заказа</p>
                <img className={OrderDetailsStyle.img} alt="done" src={done} />
                <p className={`${OrderDetailsStyle.text} text text_type_main-small`}>Ваш заказ начали готовить</p>
                <p className={`${OrderDetailsStyle.subtext} text text_type_main-small`}>Дождитесь готовности на орбитальной станции</p>
            </div>
        )
    } else {
        return(        
            <div className={`${OrderDetailsStyle.container} ${props.isOpen && OrderDetailsStyle.opened}`}>
                <h2 className={`${OrderDetailsStyle.title} text text_type_main-large`}>Упс!</h2>
                <p className={`${OrderDetailsStyle.subtitle} text text_type_main-medium`}>Что-то пошло не так...</p>
                <p className={`${OrderDetailsStyle.text} text text_type_main-small`}>Попробуйте добавить ингредиенты в заказ</p>
                <p className={`${OrderDetailsStyle.subtext} text text_type_main-small`}>и отправить его снова</p>
            </div>
        )
    }
}

OrderDetails.propTypes = {
    orderInfo: PropTypes.object
};

export default OrderDetails;