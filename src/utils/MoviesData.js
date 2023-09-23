import { moviesApi } from "./MoviesApi";
import { savedMoviesData } from "./SavedMoviesData";
import { DefaultFilter,  StorageMoviesItemName, StotageFilterItemName } from "./constants";
import { logErrorHandler } from "./errors";
import { containsPhrase, filterShortMovie, preparePhrase } from "./filterUtils";
import { getAbsoluteImageUrl } from "./utils";

export class MoviesData {
  constructor(moviesApi, savedMoviesData) {
    this.api = moviesApi;
    this.savedMoviesData = savedMoviesData;
    this.cards = null;
    this.filter = null;
  }

  get isLoaded() {
    return this.cards != null;
  }

  get currentFilter() {
    return this.filter;
  }

  loadFromCache() {
    try {
      this.filter = JSON.parse(localStorage.getItem(StotageFilterItemName)) || DefaultFilter;;
      this.cards = JSON.parse(localStorage.getItem(StorageMoviesItemName))
      this._updateSelections();
    } catch(e) {
      logErrorHandler(e);
      this.filter = DefaultFilter;
      this.cards = null;
    }
  }

  filterAsync(filter) {
    return new Promise((resolve) => {
      const { phrase, shortMovie } = filter

      const reload = this.cards == null || this.filter.phrase.toUpperCase() !== phrase.toUpperCase();

      this.filter = filter;
      localStorage.setItem(StotageFilterItemName, JSON.stringify(filter));
      
      if (!reload) {
        resolve(this._filterByDuration(this.cards, shortMovie));
      } else {
        resolve(this
          ._load()
          .then((cards) => {
            this.cards = this._filterByPhrase(cards, phrase);
            localStorage.setItem(StorageMoviesItemName, JSON.stringify(this.cards));

            this._updateSelections();

            return this._filterByDuration(this.cards, shortMovie);
          })
        );
      }
    })
  }

  _filterByPhrase(cards, phrase) {
    const words = preparePhrase(phrase);
    return cards.filter((card) => containsPhrase(card.nameRU, words) || containsPhrase(card.nameEN, words));
  }

  _filterByDuration(cards, shortMovie) {
    return cards.filter((card) => filterShortMovie(card.duration, shortMovie));
  }

  select(cardData) {
    return this.savedMoviesData
      .select(cardData)
      .then(() => cardData);
  }

  unselect(cardData) {
    return this.savedMoviesData
      .unselect(cardData)
      .then(() => cardData);
  }

  clear() {
    localStorage.removeItem(StorageMoviesItemName);
    localStorage.removeItem(StotageFilterItemName);
  }

  _load() {
    return this.api
      .getMovies()
      .then((cards) => cards.map((cardData) => ({
          country: cardData.country,
          director: cardData.director,
          duration: cardData.duration,
          year: cardData.year,
          description: cardData.description,
          image: getAbsoluteImageUrl(cardData.image.url),
          trailerLink: cardData.trailerLink,
          thumbnail: getAbsoluteImageUrl(cardData.image.formats.thumbnail.url),
          movieId: cardData.id,
          nameRU: cardData.nameRU,
          nameEN: cardData.nameEN,
          savedMovieId: null,
      })));
  }

  _updateSelections() {
    (this.cards || []).forEach((card) => {
      this.savedMoviesData.update(card);
    })
  }
}

export const moviesData = new MoviesData(moviesApi, savedMoviesData)