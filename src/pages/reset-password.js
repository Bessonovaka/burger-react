import { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginStyle from './login.module.css';
import { Button, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';


export function ResetPasswordPage() {
    const [form, setValue] = useState({ password: '', cod: '' });

    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };

    const submitData = (evt) => {
      evt.preventDefault();
      fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          "password": form.password,
          "token": form.cod
        })
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json()
        }).then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log("Ошибка");
        });
      }
  
  return (
    <div className={LoginStyle.wrapper}>
      <div className={LoginStyle.container}>
        <form className={LoginStyle.form}>
          <h1 className="text text_type_main-medium">Восстановление пароля</h1>
          <PasswordInput
            placeholder="Введите новый пароль"
            value={form.password}
            name="password"
            onChange={onChange}
          />
          <Input placeholder="Введите код из письма" value={form.cod} name="cod" onChange={onChange} />
          <Button onClick={submitData} type="primary" size="medium">
            Сохранить
          </Button>
        </form>
        <p className={`${LoginStyle.text} text text_type_main-small`}>Вспомнили пароль? <Link to="/login" className={LoginStyle.link}>Войти</Link></p>
      </div>
    </div>
  );
}