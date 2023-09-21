import { moviesApiSettings } from "./constants"

class MoviesApi {
  constructor(options) {
    this.options = options
  }

  getMovies() {
    return this._fetch('/', {
      headers: {
        'Content-Type': 'application/json'
      }
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


export const moviesApi = new MoviesApi(moviesApiSettings)