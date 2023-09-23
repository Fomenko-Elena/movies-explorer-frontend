import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Layout from "../Layout/Layout";
import MoviesSearch from "../MoviesSearch/MoviesSearch";
import Preloader from "../Preloader/Preloader";
import { ComponentStatus, DefaultCardListSettings, LayoutWidthStyle, CardListSettings } from "../../utils/constants";
import { useContext, useEffect, useState } from "react";
import { WindowSizeContext } from "../../contexts/WindowSizeContext";
import "./Movies.css"

function Movies({
  componentStatus,
  cards,
  filter,
  onFilter,
  onSelect,
  onRemove,
}) {
  const { width } = useContext(WindowSizeContext)
  const [shownCardCount, setShownCardCount] = useState(0)

  useEffect(() => {
    const { initialCount } = getCurrentCardListSettings();
    setShownCardCount(initialCount)
  }, [filter])

  function handleFilterChange(filter) {
    onFilter(filter)
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
    return onSelect(data);
  }

  function handleAddSelection(data) {
    return onRemove(data);
  }

  return (
    <Layout widthStyle={LayoutWidthStyle.Wider}>
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
    </Layout>
  )
}

export default Movies