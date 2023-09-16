import React from 'react';
import './App.css';
// import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
// import { useState, useEffect } from 'react';
// import { api } from '../utils/api.js';
import { Routes, Route } from "react-router-dom";
// import ProtectedRouteElement from './components/ProtrctedRoute.js'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../SavedMovies/SavedMovies.js'
import Profile from '../Profile/Profile.js'
import NotFound from '../NotFound/NotFound.js'
import Main from '../Main/Main.js'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

function App() {
  return (
    <>
      {/* <CurrentUserContext.Provider value={currentUser}> */}
      <Header />
      <Routes>
        <Route path="/" element={
          <Main />
        } />
        <Route path="/404" element={
          <NotFound />
        } />
        <Route path="/sign-up" element={
          <Register />
        } />
        <Route path="/sign-in" element={
          <Login />
        } />
        <Route path="/movies" element={
          <Movies />
        } />
        <Route path="/saved-movies" element={
          <SavedMovies />
        } />
        <Route path="/profile" element={
          <Profile />
        } />
        {/* <Route path="/" element={loggedIn ? <Navigate to="/sign-in" replace /> : <Navigate to="/sign-up" replace />} /> */}

      </Routes>
      <Footer />
      {/* </CurrentUserContext.Provider> */}
    </>

  );
}



export default App;
