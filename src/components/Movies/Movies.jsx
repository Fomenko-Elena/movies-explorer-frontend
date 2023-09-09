import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Layout from "../Layout/Layout";
import MoviesSearch from "../MoviesSearch/MoviesSearch";
import Preloader from "../Preloader/Preloader";
import { ComponentStatus } from "../../utils/constants";
import { useEffect, useState } from "react";

function Movies({
  componentStatus,
  cards,
  OnFilter,
}) {
  useEffect(
    () => {
      OnFilter();
    }, 
    [])
    
  return (
    <Layout>
      <MoviesSearch/>
      {componentStatus === ComponentStatus.Loading && <Preloader/>}
      {componentStatus === ComponentStatus.Successed && 
        <MoviesCardList isSelectionMode={true} more={true} cards={cards}/>
      }
      {componentStatus === ComponentStatus.Failed && <>Ошибка</>}
    </Layout>
  )
}

export default Movies