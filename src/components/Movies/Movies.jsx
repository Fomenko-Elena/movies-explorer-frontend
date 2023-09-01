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

function Movies(props) {
  return (
    <Layout>
      <MoviesSearch></MoviesSearch>
      <MoviesCardList isSelectionMode={false} cards={[
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
        {
          _id: "04",
          url : film4Path,
          description: "33 слова о дизайне 9304 14908 12049 103294 031249 ",
          duration: 40
        },
        {
          _id: "05",
          url : film5Path,
          description: "33 слова о дизайне 9304 14908 12049 103294 031249 ",
          duration: 120
        },
        {
          _id: "06",
          url : film6Path,
          description: "33 слова о дизайне 9304 14908 12049 103294 031249 ",
          duration: 120
        },
        {
          _id: "07",
          url : film7Path,
          description: "33 слова о дизайне 9304 14908 12049 103294 031249 ",
          duration: 120
        },
        {
          _id: "08",
          url : film8Path,
          description: "33 слова о дизайне 9304 14908 12049 103294 031249 ",
          duration: 120
        },
      ]}/>
    </Layout>
  )
}

export default Movies