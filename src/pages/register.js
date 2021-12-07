import { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginStyle from './login.module.css';
import { Button, Input, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';


export function RegisterPage() {
    const [form, setValue] = useState({ email: '', password: '', name: '' });

    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
  
  return (
    <div className={LoginStyle.wrapper}>
      <div className={LoginStyle.container}>
        <form className={LoginStyle.form}>
          <h1 className="text text_type_main-medium">Регистрация</h1>
          <Input placeholder="Имя" value={form.name} name="name" onChange={onChange} />
          <EmailInput placeholder="Email" value={form.email} name="email" onChange={onChange} />
          <PasswordInput
            placeholder="Пароль"
            value={form.password}
            name="password"
            onChange={onChange}
          />
          <Button type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </form>
        <p className={`${LoginStyle.text} text text_type_main-small`}>Уже зарегистрированы? <Link to="/login" className={LoginStyle.link}>Войти</Link></p>
      </div>
    </div>
  );
}