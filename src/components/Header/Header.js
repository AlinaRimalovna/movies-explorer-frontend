import icon from "../../images/icon-main.svg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ loggedIn }) {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`header ${location.pathname === "/" && "header_type_main"} ${
        location.pathname === "/sign-in" && "header_type_hidden"
      } ${location.pathname === "/sign-up" && "header_type_hidden"} ${
        location.pathname === "/404" && "header_type_hidden"
      }`}
    >
      <div className="header__main">
        <Link to="/" className="header__logo"></Link>
        {loggedIn && (
          <div className="header__info">
            <Link to="/movies" className="header__movie-link">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__movie-link">
              Сохраненные фильмы
            </Link>
          </div>
        )}
        {loggedIn ? (
          <div className="header__profile">
            <Link to="/profile" className="header__account">
              Аккаунт
            </Link>
            <div
              className={`header__icon-box ${
                location.pathname === "/" && "header__icon-box_type-main"
              }`}
            >
              <img className="header__icon" alt="иконка аккаунта" src={icon} />
            </div>
          </div>
        ) : (
          <div className="header__buttons">
            <Link to="/sign-up" className="header__button_register">
              Регистрация
            </Link>
            <Link to="/sign-in" className="header__button_login">
              Войти
            </Link>
          </div>
        )}
        <button
          className={`header__burger ${
            location.pathname === "/" && "header__burger_type-main"
          }`}
          onClick={handleMenuClick}
        ></button>
        <div
          className={`header__menu ${isMenuOpen ? "header__menu_opened" : ""}`}
        >
          <button
            className="header__menu-button"
            type="button"
            aria-label="Закрыть"
            onClick={closeMenu}
          ></button>
          <div className="header__menu-box">
            <nav class="header__links">
              <Link to="/" className="header__link">
                Главная
              </Link>
              <Link to="/movies" className="header__link">
                Фильмы
              </Link>
              <Link to="/saved-movies" className="header__link">
                Сохраненные фильмы
              </Link>
            </nav>
            <div className="header__profile-menu">
              <Link to="/profile" className="header__account">
                Аккаунт
              </Link>
              <div
                className={`header__icon-box ${
                  location.pathname === "/" && "header__icon-box_type-main"
                }`}
              >
                <img
                  className="header__icon"
                  alt="иконка аккаунта"
                  src={icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
