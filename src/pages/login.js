import { useState } from 'react';
import { Link, useHistory, useLocation, Redirect } from 'react-router-dom';

import LoginStyle from './login.module.css';
import { Button, PasswordInput, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

export function LoginPage(props) {
    const [form, setValue] = useState({ email: '', password: '' });

    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };

    const history = useHistory();
    const location = useLocation();

    const { from } = (location) || { from: { pathname: "/" } };
    const cb = () => {
        history.replace(from);
    };

    const loginButtonClick = (e) => {
      e.preventDefault();
      props.loginButtonClick(form, cb);
    }
  
    console.log(props.isLoggedIn)
    if (props.isLoggedIn) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
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
          <Button type="primary" size="medium" onClick={loginButtonClick} >
            Войти
          </Button>
        </form>
        <p className={`${LoginStyle.text} text text_type_main-small`}>Вы — новый пользователь? <Link to="/register" className={LoginStyle.link}>Зарегистрироваться</Link></p>
        <p className={`${LoginStyle.text} text text_type_main-small`}>Забыли пароль? <Link to="/forgot-password" className={LoginStyle.link}>Восстановить пароль</Link></p>
      </div>
    </div>
  );
}
}