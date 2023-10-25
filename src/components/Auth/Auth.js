import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Auth({ form, title, button, isError, onSubmit, onChange, name, email, password, nameErrors, emailErrors, passwordErrors, isValid, handleChange, sign, isPasswordError, isEmailError, isNameError}) {
  const location = useLocation();
  return (
    <div className="auth">
      <form className="auth__form" name={`${form}form`} onSubmit={onSubmit}>
      <div className="auth__logo-box">
      <img className="auth__logo" src={logo} alt="логотип сайта-поисковика фильмов" /> 
      </div>
        <h2 className="auth__heading">{title}</h2>
        {location.pathname === "/sign-up" &&         <label className="auth__field">
          Имя
          <input type="text" className={`auth__input ${!isNameError ? "auth__input_type_error" : ""}`} id="userName" name="name"
            required minLength="2" maxLength="30" placeholder="Введите имя"  onChange={onChange} value={name}  />
          <span className="auth__error">{nameErrors}</span>
        </label> 
        }
        <label className="auth__field">
          E-mail
          <input type="email" className={`auth__input ${!isEmailError ? "auth__input_type_error" : ""}`} id="email" name="email" 
            onChange={onChange} value={email} required placeholder="pochta@yandex.ru" pattern='^[\w\-\.]+@([\w\-]+\.)+[\w\-{2,4}$'/>
          <span className="auth__error">{emailErrors}</span>
        </label>
        <label className="auth__field">
          Пароль
          <input type="password" className={`auth__input ${!isPasswordError ? "auth__input_type_error" : ""}`} id="password" name="password" 
             onChange={onChange} value={password} required />
             <span className="auth__error">{passwordErrors}</span>
        </label>
        {location.pathname === "/sign-in" && <div className="auth__empty-box"></div>}
        <button className="auth__button" type="submit" disabled={!isValid}>{button}</button>
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

// pattern='^[\wа-я\sё\-].*$'