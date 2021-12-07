import { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginStyle from './login.module.css';
import { Button, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';


export function LoginPage() {
    const [form, setValue] = useState({ email: '', password: '' });

    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
  
  return (
    <div className={LoginStyle.wrapper}>
      <div className={LoginStyle.container}>
        <form className={LoginStyle.form}>
          <h1 className="text text_type_main-medium">Вход</h1>
          <EmailInput placeholder="Email" value={form.email} name="email" onChange={onChange} />
          <PasswordInput
            placeholder="Пароль"
            value={form.password}
            name="password"
            onChange={onChange}
          />
          <Button type="primary" size="medium">
            Войти
          </Button>
        </form>
        <p className={`${LoginStyle.text} text text_type_main-small`}>Вы — новый пользователь? <Link to="/register" className={LoginStyle.link}>Зарегистрироваться</Link></p>
        <p className={`${LoginStyle.text} text text_type_main-small`}>Забыли пароль? <Link to="/forgot-password" className={LoginStyle.link}>Восстановить пароль</Link></p>
      </div>
    </div>
  );
}