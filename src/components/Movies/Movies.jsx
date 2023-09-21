import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Layout from "../Layout/Layout";
import MoviesSearch from "../MoviesSearch/MoviesSearch";
import Preloader from "../Preloader/Preloader";
import { ComponentStatus, LayoutWidthStyle } from "../../utils/constants";
import { useState } from "react";

function Movies({
  componentStatus,
  cards,
  filterConditions,
  onFilter,
}) {
  const [filter, setFilter] = useState(filterConditions)

  function handleFilterChange(filterConditions) {
    setFilter(filterConditions)
    onFilter({
      count: 16,
      ...filterConditions
    })
  }

  return (
    <Layout widthStyle={LayoutWidthStyle.Wider}>
      <MoviesSearch onFilter={handleFilterChange} filter={filter} />
      {componentStatus === ComponentStatus.Loading && <Preloader/>}
      {componentStatus === ComponentStatus.Successed && <MoviesCardList isSelectionMode={true} more={true} cards={cards}/>}
      {componentStatus === ComponentStatus.Failed && <>Ошибка</>}
    </Layout>
  )
}

export default Movies