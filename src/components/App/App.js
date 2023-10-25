import React from 'react';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { useState, useEffect } from 'react';
import { api } from '../../utils/MainApi.js';
import { moviesApi } from '../../utils/MoviesApi.js';
import { Navigate, useNavigate, Routes, Route, useLocation } from "react-router-dom";
import ProtectedRouteElement from '../ProtrctedRoute.js'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../SavedMovies/SavedMovies.js'
import Profile from '../Profile/Profile.js'
import NotFound from '../NotFound/NotFound.js'
import Main from '../Main/Main.js'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import Preloader from '../Preloader/Preloader.js'
import InfoTooltip from '../InfoToolTip/InfoToolTip.js'
import * as UserAuth from "../../utils/UserAuth.js"

function App() {

  const [loggedIn, setloggedIn] = useState([false]);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('findMovies')) || []);
  const [filterMovies, setFilterMovies] = useState(allMovies);
  const [myMovies, setMyMovies] = useState(JSON.parse(localStorage.getItem('myMovies')) || []);
  const [searchName, setSearchName] = useState("");
  const [isLoading, setLoading] = useState([false]);
  const [isFilter, setIsFilter] = useState(localStorage.getItem('checkFilter') || false);
  const [isFound, setIsFound] = useState(false);
  const [cardView, setCardView] = useState(16);
  const [isMore, setIsMore] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [errorText, setErrorText] = useState("");



  function closeAllPopups() {
    setInfoTooltipOpen(false);
  }

  function handleRegister(name, email, password) {
    setLoading(false);
    UserAuth.register(name, email, password)
    .then((data) => {
      setLoading(true);
      console.log(data);
      navigate('/movies');
    })
    .catch((err) => {
      setLoading(true);
      setInfoTooltipOpen(true);
      setErrorText(JSON.stringify(err))
     console.log(err)
    });
  }

  function handleLogin(email, password) {
    setLoading(false);
    UserAuth.login(email, password)
    .then((data) => {
      setLoading(true);
      console.log(email);
      setloggedIn(true);
      navigate('/movies');
    })
       .catch((err) => {
        setLoading(true);
        setInfoTooltipOpen(true);
        setErrorText(JSON.stringify(err))
      console.log(err)
    });
  }

  const checkToken = () => {
    UserAuth.checktoken()
      .then((data) => {
        if (data) {
          console.log(data.id);
          setloggedIn(true);
          navigate(location.pathname)
        }
        else { return; }
      })
      .catch((err) => {
        setloggedIn(false);
        console.log(err)
      });
  }

  function signOut() {
    setLoading(false);
    UserAuth.signOut()
    .then((data) => {
      setLoading(true);
      console.log('успех');
      setloggedIn(false);
      setMovies([])
      localStorage.removeItem('movies');
      localStorage.removeItem('findMovies');
      localStorage.removeItem('searchName');
      localStorage.removeItem('checkFilter');
      localStorage.removeItem('myMovies');
      navigate('/');
    })
       .catch((err) => {
      console.log(err)
    });
  }

  function handleUpdateUser(name, email) {
    setLoading(true);
    api.changeUserInfo(name, email)
      .then((res) => {
        setLoading(false);
        setCurrentUser(res);
      })
      .catch((err) => {
        setInfoTooltipOpen(true);
        setErrorText(err)
        console.log(err);
      })
  }

  function handleMovieDelete(id) {
    setLoading(false);
    api.deleteMovie(id)
      .then((newMyMovies) => {
        setLoading(true);
        setMyMovies(myMovies => myMovies.filter((c) => c._id !== id));
        if (myMovies.length === 0) {
        setIsFound(true)}
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleAddMovie (movie) { 
    const isLiked = myMovies.some((i) => i.nameRU === movie.nameRU);
    if(!isLiked) {
      setLoading(false);
      const image=`https://api.nomoreparties.co${movie.image.url}`
      const thumbnail=`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`
      const movieId=String(movie.id)
    api.addNewMovie(
      movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      image,
      movie.trailerLink,
     thumbnail,
      movieId,
      movie.nameRU,
      movie.nameEN)
      .then((newMyMovie) => {
        setLoading(true);
        setMyMovies([newMyMovie, ...myMovies]);
       console.log(newMyMovie);
       setIsFound(false)
      })
      .catch((err) => {
        console.log(image)
        console.log(err);
      })
    } else {
      const myMovie = myMovies.find((i) => i.nameRU === movie.nameRU);
      console.log(myMovie)
      handleMovieDelete(myMovie._id) 
    }
  }

  function handleSearchMyMoviesSubmit(searchName) {
    const newMyMovies = myMovies.filter(({nameRU}) =>
    nameRU.toLowerCase().includes(searchName.toLowerCase()));
    setMyMovies(newMyMovies);
      console.log(newMyMovies)
  }

  function handleSearchFormSubmit(searchName) {
    if (searchName) {
    const isFind = JSON.parse(localStorage.getItem('movies'));
    console.log(isFind)
    setCardView(16);
    if (!isFind) {
   moviesApi.getMovies()
      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(movies))
      })
      .then(() => {
        setAllMovies(JSON.parse(localStorage.getItem('movies')))
        setFilterMovies(JSON.parse(localStorage.getItem('movies')))
        console.log(allMovies)
        console.log(filterMovies)
        setSearchName(searchName);
        console.log(searchName)
        if (window.innerWidth > 1262) {
          setCardView(16)
        } else if (window.innerWidth > 933) {
          setCardView(12)
        }
        else if (window.innerWidth > 710) {
          setCardView(8)
        }
        else {
          setCardView(5) 
        }
      }
      )
      .catch((err) => {
        setInfoTooltipOpen(true);
        setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        console.log(err);
      })
      } else {
         setSearchName(searchName);
         if (window.innerWidth > 1262) {
          setCardView(16)
        } else if (window.innerWidth > 933) {
          setCardView(12)
        }
        else if (window.innerWidth > 710) {
          setCardView(8)
        }
        else {
          setCardView(5) 
        }

      }
  } else {
    setInfoTooltipOpen(true);
    setErrorText('Введите запрос')
  }
}

  function FilterCheckboxChange() {
    if (isFilter) {
     setIsFilter(false);
    } else {
      setIsFilter(true);
    }
  }

  function MyFilterCheckboxChange() {
    if (isFilter) {
    const filter = myMovies.filter(({duration}) =>
     duration < 40);
     console.log(filter)
     setIsFilter(false);
     return setMyMovies(filter)
    } else {
      setIsFilter(true);
      return setMyMovies(JSON.parse(localStorage.getItem('myMovies')))
    }
  }
  function handleMore (count) {
    if (window.innerWidth > 1262) {
      count += 4;
    } else if (window.innerWidth > 933) {
      count += 3;
    }
    else {
      count += 2;
    }
    setCardView(count)
    return count
  }
  window.addEventListener('resize', (e) => {
    if (window.innerWidth > 1262) {
      setCardView(16)
    } else if (window.innerWidth > 933) {
      setCardView(12)
    }
    else if (window.innerWidth > 710) {
      setCardView(8)
    }
    else {
      setCardView(5) 
    }
  
  })


  useEffect(() => {
    // if(searchName) {
      console.log(cardView)
        const searchName = localStorage.getItem('searchName');
        const newMovies = filterMovies.filter((movie) => isFilter
        ? movie.nameRU.toLowerCase().includes(searchName.toLowerCase()) && movie.duration < 40
        : movie.nameRU.toLowerCase().includes(searchName.toLowerCase()))
        if (newMovies.length !== 0) {
          setIsFound(false)
          setMovies(newMovies);
          console.log(cardView)
          if (newMovies.length > cardView) {
            setIsMore(true)
          } else { 
            setIsMore(false)
           }
        } else {
          setMovies(newMovies);
          console.log(newMovies)
          setIsFound(true)
          setIsMore(false)
          console.log(cardView)
        }
        localStorage.setItem('findMovies', JSON.stringify(newMovies))
    // }
      }, [searchName, isFilter, cardView ])




    useEffect(() => {
      if (loggedIn) {
        UserAuth.checktoken()  
        api.getUserInfo()
          .then((res) => {
            console.log("ok")
            setCurrentUser(res)
          })
          .catch((err) => {
            console.log(err);
          })
        api.getMovies()
          .then((myMovies) => {
            setMyMovies(myMovies)
            console.log(isFound)
            setMovies(JSON.parse(localStorage.getItem('findMovies')) || movies)
            console.log(movies)
            localStorage.setItem('myMovies', JSON.stringify(myMovies));
            if (myMovies.length === 0) {
              setIsFound(true)}
          })
          .catch((err) => {
            console.log(err);
          })
       }
      }, [loggedIn])
  
    useEffect(() => {
      checkToken();
    }, [])


// return () => {
//   window.removeEventListener('resize')
//  }
//  , [])

  return (
    <>
    {!isLoading ? <Preloader /> : 
      <CurrentUserContext.Provider value={currentUser}>
      <Header  loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={
          <Main />
        } />
        <Route path="/404" element={
          <NotFound />
        } />
        <Route path="/sign-up" element={
          <Register onRegister={handleRegister} />
        } />
        <Route path="/sign-in" element={
          <Login onLogin={handleLogin} />
        } />
        <Route path="/movies" element={
           <ProtectedRouteElement element={Movies}
           loggedIn={loggedIn}
           handleSubmit={handleSearchFormSubmit}
           movies={movies}
           myMovies={myMovies}
           onMovieLike={handleAddMovie}
           onMovieDelete={handleMovieDelete}
           onClick={FilterCheckboxChange}
           cardView={cardView} 
           isFound={isFound}
           handleMore={handleMore}
           isMore={isMore}
           />
        } />
        <Route path="/saved-movies" element={
              <ProtectedRouteElement element={SavedMovies}
              loggedIn={loggedIn}
              handleSubmit={handleSearchMyMoviesSubmit}
              movies={myMovies}
              myMovies={myMovies}
              onMovieLike={handleAddMovie}
              onMovieDelete={handleMovieDelete}
              onClick={MyFilterCheckboxChange}
              isFound={isFound}
              />
        } />
        <Route path="/profile" element={
           <ProtectedRouteElement element={Profile} 
           onUpdateUser={handleUpdateUser}
           loggedIn={loggedIn}
           signOut={signOut}
           />
        } />
        <Route path="/movies" element={loggedIn ? <Navigate to="/sign-in" replace /> : <Navigate to="/sign-up" replace />} />
        <Route path="/saved-movies" element={loggedIn ? <Navigate to="/sign-in" replace /> : <Navigate to="/sign-up" replace />} />
        <Route path="/profile" element={loggedIn ? <Navigate to="/sign-in" replace /> : <Navigate to="/sign-up" replace />} />
      </Routes>
      <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} text={errorText} />
      <Footer />
      </CurrentUserContext.Provider>
       }
    </>
  );
}



export default App;
