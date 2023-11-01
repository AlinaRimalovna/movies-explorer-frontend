import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { useFormValidation } from "../Validate/Validate";

function Profile({ onUpdateUser, error, signOut }) {

  const { values, handleChange, errors, isValid, isError, resetForm } = useFormValidation();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isEdit, setEdit] = useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
  }, [currentUser]);

  function handleNameChange(e) {
    handleChange(e);
    setUserName(e.target.value);
    console.log(currentUser.name);
    setEdit(true);
    console.log(isValid)
  }

  function handleEmailChange(e) {
    handleChange(e);
    setUserEmail(e.target.value);
    setEdit(true);
    console.log(isValid)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(userName, userEmail);
    console.log(isValid)
  }

  function handleSignOut() {
    signOut()
  }

  return (
    <>
      <form className="profile" onSubmit={handleSubmit}>
        <h1 className="profile__title">Привет,{userName}!</h1>
        <div className="profile__box">
          <label className="profile__name">
            Имя
          </label>
          <input type="text" className="profile__input" id="name" name="name" value={userName || ""} onChange={handleNameChange} required minLength="2" maxLength="30" pattern='^[A-Za-zа-яА-ЯЁё\.-]+$' />
        </div>
        <div className="profile__box">
          <label className="profile__name">
            E-mail
          </label>
          <input type="email" className="profile__input" id="email" name="email" value={userEmail || ""} onChange={handleEmailChange} required pattern='[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-z]{2,}' />
        </div>
        <span className="profile__error">{errors.name}</span>
        <span className="profile__error">{errors.email}</span>
        {isEdit && <button className="profile__button-save" disabled={!isValid} >Сохранить</button>}
        <button className="profile__button-out" onClick={handleSignOut}>Выйти из аккаунта</button>
      </form>
    </>
  );
}

export default Profile;