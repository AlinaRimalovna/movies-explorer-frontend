import React from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useState, useEffect } from "react";
import { api } from "../../utils/MainApi.js";
import { moviesApi } from "../../utils/MoviesApi.js";
import {
  Navigate,
  useNavigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ProtectedRouteElement from "../ProtrctedRoute.js";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import NotFound from "../NotFound/NotFound.js";
import Main from "../Main/Main.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Preloader from "../Preloader/Preloader.js";
import InfoTooltip from "../InfoToolTip/InfoToolTip.js";
import * as UserAuth from "../../utils/UserAuth.js";
import { useFormValidation } from "../Validate/Validate";

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("findMovies")) || []
  );
  const [filterMovies, setFilterMovies] = useState(allMovies);
  const [myMovies, setMyMovies] = useState(
    JSON.parse(localStorage.getItem("myMovies")));
  const [myAllMovies, setMyAllMovies] = useState(JSON.parse(localStorage.getItem("myMovies")));
  const [myFilterMovies, setMyFilterMovies] = useState(JSON.parse(localStorage.getItem("myMovies")) || []);
  const [searchName, setSearchName] = useState(localStorage.getItem("searchName") || "");
  const [mySearchName, setMySearchName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(
    JSON.parse(localStorage.getItem("checkFilter")) || false
  );
  const [isMyFilter, setIsMyFilter] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const [isMyFound, setIsMyFound] = useState(false);
  const [cardView, setCardView] = useState(16);
  const [isMore, setIsMore] = useState(false);
  const [isFilm, setIsFilm] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { values, handleChange, errors, isValid, isError, resetForm } = useFormValidation();



  function closeAllPopups() {
    setInfoTooltipOpen(false);
  }

  function handleRegister(name, email, password) {
    setLoading(true);
    UserAuth.register(name, email, password)
      .then((data) => {
        setLoading(false);
        setloggedIn(true);
        navigate("/movies");
        resetForm();
      })
      .catch((err) => {
        setLoading(false);
        setInfoTooltipOpen(true);
        setErrorText(JSON.stringify(err));
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    setLoading(true);
    UserAuth.login(email, password)
      .then((data) => {
        setLoading(false);
        setloggedIn(true);
        navigate("/movies");
        resetForm();
      })
      .catch((err) => {
        setLoading(false);
        setInfoTooltipOpen(true);
        setErrorText(JSON.stringify(err));
        console.log(err);
      });
  }

  const checkToken = () => {
    setLoading(true);
    UserAuth.checktoken()
      .then((data) => {
        if (data) {
          setLoading(false);
          setloggedIn(true);
          navigate(location.pathname);
        } else {
          return;
        }
      })
      .catch((err) => {
        setLoading(false);
        setloggedIn(false);
      });
  };

  function signOut() {
    setLoading(true);
    UserAuth.signOut()
      .then((data) => {
        setLoading(false);
        setloggedIn(false);
        setMovies([]);
        setSearchName("");
        setIsFilter(false);
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(name, email) {
    setLoading(true);
    api
      .changeUserInfo(name, email)
      .then((res) => {
        setLoading(false);
        setCurrentUser(res);
        setInfoTooltipOpen(true);
        setErrorText("Данные успешно обновлены!");
      })
      .catch((err) => {
        setLoading(false);
        setInfoTooltipOpen(true);
        setErrorText(err);
        console.log(err);
      });
  }

  function handleMovieDelete(id) {
    setLoading(true);
    api
      .deleteMovie(id)
      .then((newMyMovies) => {
        setLoading(false);
        setMyMovies((myMovies) => myMovies.filter((c) => c._id !== id));
        setIsFilm(!isFilm);
        if (myMovies.length !== 0) {
          setIsMyFound(false);
        } else {
          setIsMyFound(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddMovie(movie) {
    const isLiked = myMovies.some((i) => i.nameRU === movie.nameRU);
    if (!isLiked) {
      setLoading(true);
      const image = `https://api.nomoreparties.co${movie.image.url}`;
      const thumbnail = `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`;
      const movieId = String(movie.id);
      api
        .addNewMovie(
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
          movie.nameEN
        )
        .then((newMyMovie) => {
          setLoading(false);
          setMyMovies([newMyMovie, ...myMovies]);
          setMyAllMovies([newMyMovie, ...myMovies]);
          setIsMyFound(false);
          setIsFilm(!isFilm);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const myMovie = myMovies.find((i) => i.nameRU === movie.nameRU);
      handleMovieDelete(myMovie._id);
      setIsFilm(!isFilm);
    }
  }

  function handleSearchMyMoviesSubmit() {
    const myFilterMovies = JSON.parse(localStorage.getItem("myMovies"));
    if (mySearchName) {
      setMySearchName(mySearchName)
      const newMyMovies = myFilterMovies.filter((movie) =>
        isMyFilter
          ? movie.nameRU.toLowerCase().includes(mySearchName.toLowerCase()) &&
          movie.duration < 40
          : movie.nameRU.toLowerCase().includes(mySearchName.toLowerCase())
      );
      if (newMyMovies.length !== 0) {
        setIsMyFound(false)
      } else {
        setIsMyFound(true)
      }
      setMyMovies(newMyMovies);

    } else {
      console.log(myMovies)
      setIsMyFound(false)
      setMyMovies(JSON.parse(localStorage.getItem("myMovies")));
    }
  }

  function handleSearchFormSubmit(searchName) {
    if (searchName) {
      localStorage.setItem("checkFilter", isFilter);
      const isFind = JSON.parse(localStorage.getItem("movies"));
      console.log(isFind);
      setCardView(16);
      if (!isFind) {
        moviesApi
          .getMovies()
          .then((movies) => {
            localStorage.setItem("movies", JSON.stringify(movies));
            console.log(movies);
            setFilterMovies(movies);
            console.log(filterMovies);
          })
          .then(() => {

            setAllMovies(JSON.parse(localStorage.getItem("movies")));
            const newMovies = filterMovies.filter((movie) =>
              isFilter
                ? movie.nameRU
                  .toLowerCase()
                  .includes(searchName.toLowerCase()) && movie.duration < 40
                : movie.nameRU.toLowerCase().includes(searchName.toLowerCase())
            );
            if (newMovies.length !== 0) {
              setIsFound(false);
              setMovies(newMovies);
              if (newMovies.length > cardView) {
                setIsMore(true);
              } else {
                setIsMore(false);
              }
            } else {
              setIsFound(true);
              setMovies(newMovies);
              setIsMore(false);
            }
            localStorage.setItem("findMovies", JSON.stringify(newMovies));
            if (window.innerWidth > 1262) {
              setCardView(16);
            } else if (window.innerWidth > 933) {
              setCardView(12);
            } else if (window.innerWidth > 710) {
              setCardView(8);
            } else {
              setCardView(5);
            }
          })
          .catch((err) => {
            setInfoTooltipOpen(true);
            setErrorText(
              "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
            );
            console.log(err);
          });
      } else {
        setSearchName(searchName);
        const newMovies = filterMovies.filter((movie) =>
          isFilter
            ? movie.nameRU.toLowerCase().includes(searchName.toLowerCase()) &&
            movie.duration < 40
            : movie.nameRU.toLowerCase().includes(searchName.toLowerCase())
        );
        if (newMovies.length !== 0) {
          setIsFound(false);
          setMovies(newMovies);
          if (newMovies.length > cardView) {
            setIsMore(true);
          } else {
            setIsMore(false);
          }
        } else {
          setIsFound(true);
          setMovies(newMovies);
          setIsMore(false);
        }
        localStorage.setItem("findMovies", JSON.stringify(newMovies));
        if (window.innerWidth > 1262) {
          setCardView(16);
        } else if (window.innerWidth > 933) {
          setCardView(12);
        } else if (window.innerWidth > 710) {
          setCardView(8);
        } else {
          setCardView(5);
        }
      }
    } else {
      setInfoTooltipOpen(true);
      setErrorText("Введите запрос");
    }
  }

  function handleSearch(evt) {
    const search = evt.target.value;
    setSearchName(search);
    localStorage.setItem("searchName", search);
  }

  function myHandleSearch(evt) {
    const search = evt.target.value;
    setMySearchName(search);
  }

  function filterCheckboxChange(evt) {
    const value = evt.target.checked;
    setIsFilter(value);
    localStorage.setItem("checkFilter", value);
  }

  function myFilterCheckboxChange(evt) {
    const value = evt.target.checked;
    setIsMyFilter(value);
    localStorage.setItem("checkMyFilter", value);
  }
  function handleMore(count) {
    if (window.innerWidth > 1262) {
      count += 4;
    } else if (window.innerWidth > 933) {
      count += 3;
    } else {
      count += 2;
    }
    setCardView(count);
    return count;
  }

  useEffect(() => {
    localStorage.setItem("myMovies", JSON.stringify(myMovies));
  }, [isFilm, setIsFilm]);

  useEffect(() => {
    if (location.pathname !== "/saved-movies") {
      setIsMyFilter(false);
      setMySearchName("");
      setMyMovies(JSON.parse(localStorage.getItem("myMovies")));
      setIsMyFound(false)

    }
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 1262) {
        setCardView(16);
      } else if (window.innerWidth > 933) {
        setCardView(12);
      } else if (window.innerWidth > 710) {
        setCardView(8);
      } else {
        setCardView(5);
      }

    });
    return () => {
      window.removeEventListener("resize", (e) => {
        if (window.innerWidth > 1262) {
          setCardView(16);
        } else if (window.innerWidth > 933) {
          setCardView(12);
        } else if (window.innerWidth > 710) {
          setCardView(8);
        } else {
          setCardView(5);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (loggedIn) {
      const searchName = localStorage.getItem("searchName");
      const newMovies = filterMovies.filter((movie) =>
        isFilter
          ? movie.nameRU.toLowerCase().includes(searchName.toLowerCase()) &&
          movie.duration < 40
          : movie.nameRU.toLowerCase().includes(searchName.toLowerCase())
      );
      if (newMovies.length !== 0) {
        setIsFound(false);
        setMovies(newMovies);
        if (newMovies.length > cardView) {
          setIsMore(true);
        } else {
          setIsMore(false);
        }
      } else {
        setIsFound(true);
        setMovies(newMovies);
        setIsMore(false);
      }
      localStorage.setItem("findMovies", JSON.stringify(newMovies));
    }
  }, [isFilter, cardView]);

  useEffect(() => {
    const myFilterMovies = JSON.parse(localStorage.getItem("myMovies"));
    if (mySearchName) {
      const newMovies = myFilterMovies.filter((movie) =>
        isMyFilter
          ? movie.nameRU.toLowerCase().includes(mySearchName.toLowerCase()) &&
          movie.duration < 40
          : movie.nameRU.toLowerCase().includes(mySearchName.toLowerCase())
      );
      if (newMovies.length !== 0) {
        setIsMyFound(false)
      } else {
        setIsMyFound(true)
      }
      setMyMovies(newMovies);
    } else {
      const newMovies = myFilterMovies.filter((movie) =>
        isMyFilter
          ? movie.duration < 40
          : movie.duration > 0
      );
      if (newMovies.length !== 0) {
        setIsMyFound(false)
      } else {
        setIsMyFound(true)
      }
      setMyMovies(newMovies);
    }
  }, [isMyFilter]);

  useEffect(() => {
    if (loggedIn) {
      api
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .getMovies()
        .then((myMovies) => {
          setMyMovies(myMovies);
          setMovies(JSON.parse(localStorage.getItem("findMovies")) || movies);
          localStorage.setItem("myMovies", JSON.stringify(myMovies));
          setMyFilterMovies(myMovies);
          setIsMyFilter(false);
          setIsMore(false);
          setMyAllMovies(myMovies)
          setMySearchName("");
          if (myMovies.length === 0) {
            setIsMyFound(true);
          }

        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn, setloggedIn]);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Header loggedIn={loggedIn} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/*" element={<NotFound />} />
            <Route
              path="/sign-up"
              element={
                loggedIn ? (
                  <Navigate to="/" replace />
                ) : (
                  <Register onRegister={handleRegister} />
                )
              }
            />
            <Route
              path="/sign-in"
              element={
                loggedIn ? (
                  <Navigate to="/" replace />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  element={Movies}
                  loggedIn={loggedIn}
                  handleSubmit={handleSearchFormSubmit}
                  movies={movies}
                  myMovies={myMovies}
                  onMovieLike={handleAddMovie}
                  onMovieDelete={handleMovieDelete}
                  onClick={filterCheckboxChange}
                  cardView={cardView}
                  isFound={isFound}
                  handleMore={handleMore}
                  isMore={isMore}
                  isFilter={isFilter}
                  handleSearch={handleSearch}
                  searchName={searchName}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  handleSubmit={handleSearchMyMoviesSubmit}
                  movies={myMovies}
                  myMovies={myMovies}
                  onMovieLike={handleAddMovie}
                  onMovieDelete={handleMovieDelete}
                  onClick={myFilterCheckboxChange}
                  isFound={isMyFound}
                  isFilter={isMyFilter}
                  handleSearch={myHandleSearch}
                  searchName={mySearchName}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  element={Profile}
                  onUpdateUser={handleUpdateUser}
                  loggedIn={loggedIn}
                  signOut={signOut}
                />
              }
            />
          </Routes>
          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            text={errorText}
          />
          <Footer />
        </CurrentUserContext.Provider>
      )}
    </>
  );
}

export default App;
