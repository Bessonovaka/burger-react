import AppHeaderStyle from './AppHeader.module.css';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
    return (
        <header className={AppHeaderStyle.header}>
          <nav className={`text_type_main-default ${AppHeaderStyle.navigation}`}>
              <div className={AppHeaderStyle.navigation__group}>
              <a href="#" className={AppHeaderStyle.navigation__link}>
                <BurgerIcon type="primary" className={AppHeaderStyle.navigation__icon} />
                <span className={AppHeaderStyle.navigation__text}>Конструктор</span>
              </a>
              <a href="#" className={AppHeaderStyle.navigation__link}>
                <ListIcon type="primary" />
                <span className={AppHeaderStyle.navigation__text}>Лента заказов</span>
              </a>
              </div>
              <a href="#" className={`${AppHeaderStyle.navigation__link} ${AppHeaderStyle.navigation__logo}`}>
                <Logo />
              </a>
              <a href="#" className={AppHeaderStyle.navigation__link}>
              <ProfileIcon type="primary" />
                <span className={AppHeaderStyle.navigation__text}>Личный кабинет</span>
              </a>
          </nav>
        </header>
    );
  }
  
  export default AppHeader;