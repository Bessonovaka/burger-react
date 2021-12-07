import { Link } from 'react-router-dom';

import NotFoundStyle from './not-found.module.css';

export const NotFound404 = () => {
    return (
        <div className={NotFoundStyle.wrapper}>
            <div className={NotFoundStyle.container}>
                <h2 className={`text text_type_main-large`}>Упс!</h2>
                <p className={`${NotFoundStyle.text} text text_type_main-medium`}>Такой страницы нет</p>
                <Link className={`${NotFoundStyle.link} text text_type_main-small`} to='/'>Вернуться на главную</Link>
            </div>
        </div>
    )
}