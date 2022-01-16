import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import LoginStyle from './login.module.css';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';


export function ForgotPasswordPage() {
    const [form, setValue] = useState({ email: '', postStatus: false });

    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };

    const submitData = (evt) => {
      evt.preventDefault();
      fetch('https://norma.nomoreparties.space/api/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({"email": form.email})
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          setValue({ ...form, postStatus: true })
        })
        .catch((err) => {
          console.log("Ошибка");
        });
    }
      
      if (form.postStatus) {
        return (
          <Redirect
            to="/reset-password"
          />
        )
      }
    return (
      <div className={LoginStyle.wrapper}>
        <div className={LoginStyle.container}>
          <form className={LoginStyle.form}>
            <h1 className="text text_type_main-medium">Восстановление пароля</h1>
            <EmailInput placeholder="Email" value={form.email} name="email" onChange={onChange} />
            <Button type="primary" size="medium" onClick={submitData}>
              Восстановить
            </Button>
          </form>
          <p className={`${LoginStyle.text} text text_type_main-small`}>Вспомнили пароль? <Link to="/login" className={LoginStyle.link}>Войти</Link></p>
        </div>
      </div>
    );
};