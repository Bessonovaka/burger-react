import { useState } from 'react';

import ProfileStyle from './profile.module.css';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';


export function ProfilePage() {
    const [form, setValue] = useState({ email: '', password: '', name: '' });

    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
  
  return (
    <div className={ProfileStyle.wrapper}>
        <div className={ProfileStyle.container}>
            <ul className={ProfileStyle.menu}>
                <li className={`${ProfileStyle.menu__item} ${ProfileStyle.menu__item_active} text text_type_main-medium`}>Профиль</li>
                <li className={`${ProfileStyle.menu__item} text text_type_main-medium`}>История заказов</li>
                <li className={`${ProfileStyle.menu__item} text text_type_main-medium`}>Выход</li>
                <p className={`${ProfileStyle.text} text text_type_main-small`}>В этом разделе вы можете изменить свои персональные данные</p>
            </ul>
            <form className={ProfileStyle.form}>
                <Input placeholder="Имя" value={form.name} name="name" onChange={onChange} icon={'EditIcon'}/>
                <Input placeholder="Логин" value={form.email} name="email" onChange={onChange} icon={'EditIcon'}/>
                <Input placeholder="Пароль" value={form.password} name="password" onChange={onChange} icon={'EditIcon'}/>
            </form>
        </div>
    </div>
  );
}