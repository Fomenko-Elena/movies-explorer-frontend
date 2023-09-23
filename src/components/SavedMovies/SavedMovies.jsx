import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Layout from "../Layout/Layout";
import MoviesSearch from "../MoviesSearch/MoviesSearch";
import { DefaultFilter } from "../../utils/constants";
import { useEffect, useState } from "react";
import { logErrorHandler } from "../../utils/errors";

function SavedMovies({
  onFilter,
  onRemove,
}) {
  const [filter, setFilter] = useState(DefaultFilter)
  const [cards, setCards] = useState([])

  useEffect(() => {
    filterCards(filter)
  }, [])

  function handleFilterChange(filter) {
    setFilter(filter);
    return filterCards(filter);
  }

  function filterCards(filter) {
    return onFilter(filter)
      .then((cards) => {
        setCards(cards);
      })
      .catch(logErrorHandler)
  }

  function handleRemoveSelection(data) {
    return onRemove(data)
      .then(() => filterCards(filter))
  }

  return (
    <Layout>
      <MoviesSearch onFilter={handleFilterChange} filter={filter}/>
      <MoviesCardList isSelectionMode={false} more={false} cards={cards} onRemove={handleRemoveSelection}/>
    </Layout>
  )
}

export default SavedMovies