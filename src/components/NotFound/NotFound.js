import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  function handleRegister() {
    navigate(-1);
  }
  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__subtitle">Страница не найдена</p>
      <button onClick={handleRegister} className="notFound__button" >Назад</button>
    </div>
  );
}

export default NotFound;