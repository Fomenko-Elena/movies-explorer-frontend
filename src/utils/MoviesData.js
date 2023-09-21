import { moviesApi } from "./MoviesApi";
import { containsPhrase, preparePhrase } from "./filterUtils";

export class MoviesData {
  constructor(moviesApi) {
    this.api = moviesApi;
    this.cards = null;
  }

  get isLoaded() {
    return this.cards != null;
  }

  filterAsync({ phrase, shortMovie }) {
    return new Promise((resolve) => {
      if (this.isLoaded) {
        resolve(this.filter({ phrase, shortMovie }))
      } else {
        resolve(this._load().then(() => this.filter({ phrase, shortMovie })))
      }
    })
  }

  filter({ phrase, shortMovie }) {
    const words = preparePhrase(phrase)
    return this.cards.filter((card) => containsPhrase(card.nameRU, words) || containsPhrase(card.nameEN, words))
  }

  clear() {
    localStorage.removeItem(StorageItemName)
  }

  _load() {
    return new Promise((resolve) => {
      try {
        const cards = JSON.parse(localStorage.getItem(StorageItemName))
        this.cards = cards;
        if (cards) return resolve(cards);
      } catch (e) { }

      resolve(
        this.api
          .getMovies()
          .then((cards) => {
            this.cards = cards;
            console.log(cards)
            localStorage.setItem(StorageItemName, JSON.stringify(cards));
            return cards;
          })
      );
    })
  }
}

const StorageItemName = "movies";

export const moviesData = new MoviesData(moviesApi)