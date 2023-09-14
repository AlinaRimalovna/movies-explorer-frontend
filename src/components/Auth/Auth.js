import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Auth({ name, title, button, children, onSubmit, onChange, email, password, error, footer, link, sign }) {
  const location = useLocation();
  return (
    <div className="auth">
      <form className="auth__form" name={`${name}form`} onSubmit={onSubmit}>
      <div className="auth__logo-box">
      <img className="auth__logo" src={logo} alt="логотип сайта-поисковика фильмов" /> 
      </div>
        <h2 className="auth__heading">{title}</h2>
        {children}
        <label className="auth__field">
          E-mail
          <input type="email" className="auth__input" id="email" name="email" 
            value={email} onChange={onChange} required placeholder="pochta@yandex.ru" />
          {/* <span className="auth__error"></span> */}
        </label>
        <label className="auth__field">
          Пароль
          <input type="password" className="auth__input" id="password" name="password" 
            value={password} onChange={onChange} required />
          {location.pathname === "/sign-up" &&<span className="auth__error">Что-то пошло не так...</span>}
          {location.pathname === "/sign-in" &&<span className="auth__error">{error}</span>}
        </label>
        {location.pathname === "/sign-in" && <div className="auth__empty-box"></div>}
        <button className="auth__button" type="submit">{button}</button>
        <div className="auth__signin">
        <p className="auth__signin-text">{sign}</p>
        {location.pathname === "/sign-up" && <Link to="/sign-in" className="auth__link">Войти</Link>}
        {location.pathname === "/sign-in" && <Link to="/sign-up" className="auth__link">Регистрация</Link>}
      </div>
      </form>
  
    </div>
  );
}

export default Auth;