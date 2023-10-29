class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  changeUserInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email })
    })
      .then(this._checkResponse);
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  addNewMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN
      })
    })
      .then(this._checkResponse);
  }
  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse);
  }
}

export const api = new Api({
  url: 'https://api.alina-movie.nomoredomainsicu.ru',
  headers: {
    'Content-Type': 'application/json'
  }
});