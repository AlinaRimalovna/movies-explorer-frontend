import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Profile({ onUpdateUser, error, signOut }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isEdit, setEdit] = useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    setUserName(currentUser.name);
    setUserEmail(currentUser.email);
  }, [currentUser]);

  function handleNameChange(e) {
    setUserName(e.target.value);
    console.log(currentUser.name);
    setEdit(true);
  }

  function handleEmailChange(e) {
    setUserEmail(e.target.value);
    setEdit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(userName, userEmail);
  }

  function handleSignOut() {
    signOut()
    // navigate('/sign-up');
  }

  return (
    <>
      <div className="profile">
        <h1 className="profile__title">Привет,{userName}!</h1>
        <div className="profile__box">
          <label className="profile__name">
            Имя
          </label>
          <input type="text" className="profile__input" id="name" name="name" value={userName || ""} onChange={handleNameChange} required />
        </div>
        <div className="profile__box">
          <label className="profile__name">
            E-mail
          </label>
          <input type="email" className="profile__input" id="email" name="email" value={userEmail || ""} onChange={handleEmailChange} required />
        </div>
        <button className="profile__button">Редактировать</button>
        <span className="profile__error">{error}</span>
        {isEdit && <button className="profile__button-save" onClick={handleSubmit}>Сохранить</button>}
        <button className="profile__button-out"onClick={handleSignOut}>Выйти из аккаунта</button>
      </div>
    </>
  );
}

export default Profile;