import { mainApi } from "./MainApi";
import { getAbsoluteImageUrl } from "./utils";

class SavedMoviesData{
  constructor(api) {
    this.api = api;
    this.movies = {};
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
        cardData.savedMovieId = savedMovieData._id;
        return savedMovieData;
      })
  }

  unselect(cardData) {
    return this.api
      .removeMovie(cardData.savedMovieId)
      .then(() => {
        delete this.movies[cardData.savedMovieId];
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