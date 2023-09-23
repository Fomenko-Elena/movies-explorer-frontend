import { mainApiSettings } from "./constants"

class MainApi {
  constructor(options) {
    this.options = options
  }

  signUp(authData) {
    return this._fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(authData),
    })
  }

  signIn(authData) {
    return this._fetch('/signin', {
      method: 'POST',
      body: JSON.stringify(authData),
    })
  }

  signOut() {
    return this._fetch('/signout', {
      method: 'POST',
    })
  }

  getUser() {
    return this._fetch('/users/me')
  }

  getMovies() {
    return this._fetch('/movies')
  }

  addMovie(movie) {
    return this._fetch('/movies', {
      method: 'POST',
      body: JSON.stringify(movie),
    })
  }

  removeMovie(movieId) {
    return this._fetch(`/movies/${movieId}`, {
      method: 'DELETE',
    })
  }

  _fetch(relativePath, options) {
    const resultOptions = {
      headers: this.options.headers,
      credentials: this.options.credentials,
      ...options,
    };
    return fetch(this._getUrl(relativePath), resultOptions)
      .then(result => {
        if (result.ok) return result.json();
        return result.text().then((text) => Promise.reject({ status: result.status, ...JSON.parse(text) }));
      });
  }

  _getUrl(relativePath) {
    return this.options.baseUrl + relativePath;
  }
}


export const mainApi = new MainApi(mainApiSettings)