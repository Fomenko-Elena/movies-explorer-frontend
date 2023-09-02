import MoviesCardList from "../MoviesCardList/MoviesCardList";
import film1Path from "../../images/film-1.jfif"
import film2Path from "../../images/film-2.jfif"
import film3Path from "../../images/film-3.jfif"
import film4Path from "../../images/film-4.jfif"
import film5Path from "../../images/film-5.jfif"
import film6Path from "../../images/film-6.jfif"
import film7Path from "../../images/film-7.jfif"
import film8Path from "../../images/film-8.jfif"
import Layout from "../Layout/Layout";
import MoviesSearch from "../MoviesSearch/MoviesSearch";

function SavedMovies(props) {
  return (
    <Layout>
      <MoviesSearch/>
      <MoviesCardList isSelectionMode={false} more={false} cards={[
        {
          _id: "01",
          url : film1Path,
          description: "33 слова о дизайне 9304 14908 12049 103294 031249 ",
          duration: 120
        },
        {
          _id: "02",
          url : film2Path,
          description: "33 слова о дизайне 9304 14908 12049 103294 031249 ",
          duration: 125
        },
        {
          _id: "03",
          url : film3Path,
          description: "33 слова о дизайне 9304 14908 12049 103294 031249 ",
          duration: 120
        },
      ]}/>
    </Layout>
  )
}

export default SavedMovies