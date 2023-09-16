import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Layout from "../Layout/Layout";
import MoviesSearch from "../MoviesSearch/MoviesSearch";
import Preloader from "../Preloader/Preloader";
import { ComponentStatus, LayoutWidthStyle } from "../../utils/constants";
import { useEffect } from "react";

function Movies({
  componentStatus,
  cards,
  OnFilter,
}) {
  useEffect(() => { OnFilter(); }, [])

  return (
    <Layout widthStyle={LayoutWidthStyle.Wider}>
      <MoviesSearch/>
      {componentStatus === ComponentStatus.Loading && <Preloader/>}
      {componentStatus === ComponentStatus.Successed && <MoviesCardList isSelectionMode={true} more={true} cards={cards}/>}
      {componentStatus === ComponentStatus.Failed && <>Ошибка</>}
    </Layout>
  )
}

export default Movies