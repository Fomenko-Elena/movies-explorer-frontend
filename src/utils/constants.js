import validator from "validator";

import film1Path from "../images/film-1.jfif"
import film2Path from "../images/film-2.jfif"
import film3Path from "../images/film-3.jfif"
import film4Path from "../images/film-4.jfif"
import film5Path from "../images/film-5.jfif"
import film6Path from "../images/film-6.jfif"
import film7Path from "../images/film-7.jfif"
import film8Path from "../images/film-8.jfif"
import film9Path from "../images/film-9.jfif"
import film10Path from "../images/film-10.png"
import film11Path from "../images/film-11.jfif"
import film12Path from "../images/film-12.jfif"
import film13Path from "../images/film-13.jfif"
import film14Path from "../images/film-14.jfif"
import film15Path from "../images/film-15.jfif"
import film16Path from "../images/film-16.jfif"

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


export const validationSchemas = {
  email: (target) => {
    const validationMessage = target.validationMessage;
    if (validationMessage) return {
      message: validationMessage,
      isValid: false,
    }
    const value = target.value;
    if (validator.isEmail(value)) {
      return { isValid: true }
    }
    return {
      message: 'Неправильный формат email',
      isValid: false,
    }
  }
}

export const predefinedMovies = [
  {
    _id: "01",
    trailerLink: film1Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "02",
    trailerLink: film2Path,
    description: "33 слова о дизайне",
    duration: 125
  },
  {
    _id: "03",
    trailerLink: film3Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "04",
    trailerLink: film4Path,
    description: "33 слова о дизайне",
    duration: 40
  },
  {
    _id: "05",
    trailerLink: film5Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "06",
    trailerLink: film6Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "07",
    trailerLink: film7Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "08",
    trailerLink: film8Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "09",
    trailerLink: film9Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "10",
    trailerLink: film10Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "11",
    trailerLink: film11Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "12",
    trailerLink: film12Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "13",
    trailerLink: film13Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "14",
    trailerLink: film14Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "15",
    trailerLink: film15Path,
    description: "33 слова о дизайне",
    duration: 120
  },
  {
    _id: "16",
    trailerLink: film16Path,
    description: "33 слова о дизайне",
    duration: 120
  },
]