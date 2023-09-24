import { mainApi } from "./MainApi";
import { containsPhrase, filterShortMovie, preparePhrase } from "./filterUtils";

class SavedMoviesData {
  constructor(api) {
    this.api = api;
    this.movies = {};
  }

  filterAsync(filter) {
    const { phrase, shortMovie } = filter;
    return new Promise((resolve) => {
      if (!phrase) {
        resolve(Object.entries(this.movies).map(([_, card]) => card).filter((card) => filterShortMovie(card.duration, shortMovie)));
      } else {
        var words = preparePhrase(phrase);
        resolve(Object.entries(this.movies).map(([_, card]) => card).filter((card) =>
          (containsPhrase(card.nameRU, words) || containsPhrase(card.nameEN, words))
          && filterShortMovie(card.duration, shortMovie)
        ))
      }
    })
  }

  load() {
    return this.api
      .getMovies()
      .then((movies) => {
        this.movies = {}
        movies.forEach((movie) => {
          this.movies = {
            [movie.movieId]: {
              savedMovieId: movie._id,
              ...movie,
            },
            ...this.movies,
          }
        })
      })
  }

  select(cardData) {
    const movieData = {
      ...cardData
    }
    delete movieData._id
    delete movieData.savedMovieId

    return this.api
      .addMovie(movieData)
      .then((savedMovieData) => {
        this.movies = {
          [savedMovieData.movieId]: savedMovieData,
          ...this.movies,
        };
        savedMovieData.savedMovieId = savedMovieData._id;
        cardData.savedMovieId = savedMovieData._id;
        return savedMovieData;
      })
  }

  unselect(cardData) {
    return this.api
      .removeMovie(cardData.savedMovieId)
      .then(() => {
        delete this.movies[cardData.movieId];
        cardData.savedMovieId = null;
      })
  }

  update(cardData) {
    if (this.movies[cardData.movieId]) {
      cardData.savedMovieId = this.movies[cardData.movieId].savedMovieId;
    } else {
      cardData.savedMovieId = null;
    }
  }

  clear() {
    this.movies = {};
  }
}


export const savedMoviesData = new SavedMoviesData(mainApi)