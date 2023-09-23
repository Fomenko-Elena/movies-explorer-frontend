export const noUser = {
  _id: 0,
  email: '',
  name: ''
}

export const LayoutHighlight = {
  Default: '',
  Blue: 'blue',
  Gray: 'gray',
}

export const LayoutWidthStyle = {
  Default: '',
  Wider: 'wider'
}

export const nameValidationSettiings = {
  required: true,
  minLength: 2,
  maxLength: 30,
  pattern: '[a-zA-Zа-яА-Я]+[a-zA-Zа-яА-Я \\-]*',
}

export const ComponentStatus = {
  Initial: 'initial',
  Loading: 'loading',
  Successed: 'successed',
  Failed: 'failed,'
}

const moviesApiUrl = process.env.REACT_APP_MOVIES_API_URL || 'https://api.nomoreparties.co/beatfilm-movies';
const mainApiUrl = process.env.REACT_APP_MAIN_API_URL || 'http://localhost:3000';

export const moviesApiSettings = {
    baseUrl: moviesApiUrl,
    headers: {
        'Content-Type': 'application/json'
    },
}

export const mainApiSettings = {
    baseUrl: mainApiUrl,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
}

export const HTTP_ERR_UNAUTHORIZED = 401;
export const HTTP_ERR_CONFLICT = 409;

export const DefaultCardListSettings = { width: 0, initialCount: 5 * 1, appendCount: 2 };
export const CardListSettings = [
  { width: 1280, initialCount: 4 * 4, appendCount: 4 },
  { width: 1150, initialCount: 4 * 4, appendCount: 4 },
  { width: 820, initialCount: 4 * 3, appendCount: 3 },
  { width: 768, initialCount: 4 * 2, appendCount: 2 },
  { width: 630, initialCount: 4 * 2, appendCount: 2 },
  { width: 320, initialCount: 5 * 1, appendCount: 2 },
];

export const StorageMoviesItemName = "movies";
export const StotageFilterItemName = "filter";

export const DefaultFilter = {
  phrase: "",
  shortMovie: false,
}