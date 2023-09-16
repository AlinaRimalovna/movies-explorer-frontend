import React from 'react';

function Profile({ name, email, error }) {
  const isEdit = false;
  return (
    <>
      <div className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__box">
          <label className="profile__name">
            Имя
          </label>
          <input type="text" className="profile__input" id="name" name="name" placeholder="Алина" value={name} required />
        </div>
        <div className="profile__box">
          <label className="profile__name">
            E-mail
          </label>
          <input type="email" className="profile__input" id="email" name="email" placeholder="pochta@yandex.ru" value={email} required />
        </div>
        <button className="profile__button">Редактировать</button>
        <span className="profile__error">{error}</span>
        {isEdit && <button className="profile__button-save">Сохранить</button>}
        <button className="profile__button-out">Выйти из аккаунта</button>
      </div>
    </>
  );
}

export default Profile;