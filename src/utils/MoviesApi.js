class MoviesApi {
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

  getMovies(nameRU) {
    return fetch(`${this._url}`, {
      headers: this._headers
    })
    .then(this._checkResponse);
  } 
}
export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
       'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});