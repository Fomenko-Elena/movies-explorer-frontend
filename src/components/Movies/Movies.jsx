import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Layout from "../Layout/Layout";
import MoviesSearch from "../MoviesSearch/MoviesSearch";
import Preloader from "../Preloader/Preloader";
import { ComponentStatus, DefaultCardListSettings, LayoutWidthStyle, CardListSettings, DefaultFilter } from "../../utils/constants";
import { useContext, useEffect, useReducer, useState } from "react";
import { WindowSizeContext } from "../../contexts/WindowSizeContext";
import "./Movies.css"
import { logErrorHandler } from "../../utils/errors";
import { useMount } from "../../hooks/componentHook";
import { moviesData } from "../../utils/MoviesData";

function Movies({
  onFilter,
  onSelect,
  onRemove,
}) {
  const { width } = useContext(WindowSizeContext)
  const [shownCardCount, setShownCardCount] = useState(0)
  const [componentStatus, setComponentStatus] = useState(ComponentStatus.Initial)
  const [filter, setFilter] = useState(DefaultFilter)
  const [cards, dispatchCards] = useReducer(cardsReduced, [])
  const didMount = useMount()

  useEffect(() => {
    moviesData.loadFromCache();
    setFilter(moviesData.currentFilter);
  }, [])

  useEffect(() => {
    if (!didMount) return;

    const { initialCount } = getCurrentCardListSettings();
    setShownCardCount(initialCount)

    setComponentStatus(ComponentStatus.Loading);
    onFilter(filter)
      .then((cards) => {
        setComponentStatus(ComponentStatus.Successed);
        dispatchCards({ type: 'REPLACE', cards });
      })
      .catch((error) => {
        setComponentStatus(ComponentStatus.Failed);
        logErrorHandler(error);
      })
  }, [filter])

  function cardsReduced(state, action) {
    switch(action.type) {
      case 'REPLACE': return action.cards;
      case 'UPDATE': return state.map((card) => 
      {
        if (card.movieId === action.card.movieId) {
          return action.card;
        } else {
          return card;
        }
      })
      default: return state
    }
  }

  function handleFilterChange(filter) {
    if (!filter.phrase) {
      setComponentStatus(ComponentStatus.ErrFilter)
    } else {
      setFilter(filter)
    }
  }

  function handleMore() {
    const { appendCount } = getCurrentCardListSettings();
    const rest = shownCardCount % appendCount;
    setShownCardCount(shownCardCount + appendCount - rest);
  }

  function getCards() {
    return cards.slice(0, shownCardCount);
  }

  function getCurrentCardListSettings() {
    return CardListSettings.filter((setting) => setting.width <= width)[0] || DefaultCardListSettings;
  }

  function hasMoreCards() {
    return cards.length > shownCardCount;
  }

  function handleRemoveSelection(data) {
    return onRemove(data)
      .then((cardData) => {
        dispatchCards({ type: 'UPDATE', card: cardData })
      })
      .catch(logErrorHandler);
  }

  function handleAddSelection(data) {
    return onSelect(data)
      .then((cardData) => {
        dispatchCards({ type: 'UPDATE', card: cardData })
      })
      .catch(logErrorHandler);
  }

  return (
    <Layout widthStyle={LayoutWidthStyle.Wider} component="main">
      <MoviesSearch onFilter={handleFilterChange} filter={filter} />
      {componentStatus === ComponentStatus.Loading && <Preloader />}
      {componentStatus === ComponentStatus.Successed &&
        <MoviesCardList
          isSelectionMode={true}
          more={hasMoreCards()}
          cards={getCards()}
          onMore={handleMore}
          onSelect={handleAddSelection}
          onRemove={handleRemoveSelection} />
      }
      {componentStatus === ComponentStatus.Failed && <p className="movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      {componentStatus === ComponentStatus.ErrFilter && <p className="movies__error">Нужно ввести ключевое слово</p>}
    </Layout>
  )
}

export default Movies