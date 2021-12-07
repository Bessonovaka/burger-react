import AppHeaderStyle from './AppHeader.module.css';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

function AppHeader() {
    return (
        <header className={AppHeaderStyle.header}>
          <nav className={`text_type_main-default ${AppHeaderStyle.navigation}`}>
              <div className={AppHeaderStyle.navigation__group}>
              <NavLink to="/" className={AppHeaderStyle.navigation__link}>
                <BurgerIcon type="primary" className={AppHeaderStyle.navigation__icon} />
                <span className={AppHeaderStyle.navigation__text}>Конструктор</span>
              </NavLink>
              <NavLink to="#" className={AppHeaderStyle.navigation__link}>
                <ListIcon type="primary" />
                <span className={AppHeaderStyle.navigation__text}>Лента заказов</span>
              </NavLink>
              </div>
              <NavLink to="/" className={`${AppHeaderStyle.navigation__link} ${AppHeaderStyle.navigation__logo}`}>
                <Logo />
              </NavLink>
              <NavLink to="/profile" className={AppHeaderStyle.navigation__link}>
              <ProfileIcon type="primary" />
                <span className={AppHeaderStyle.navigation__text}>Личный кабинет</span>
              </NavLink>
          </nav>
        </header>
    );
  }
  
  export default AppHeader;