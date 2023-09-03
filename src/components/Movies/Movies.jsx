import MoviesCardList from "../MoviesCardList/MoviesCardList";
import film1Path from "../../images/film-1.jfif"
import film2Path from "../../images/film-2.jfif"
import film3Path from "../../images/film-3.jfif"
import film4Path from "../../images/film-4.jfif"
import film5Path from "../../images/film-5.jfif"
import film6Path from "../../images/film-6.jfif"
import film7Path from "../../images/film-7.jfif"
import film8Path from "../../images/film-8.jfif"
import film9Path from "../../images/film-9.jfif"
import film10Path from "../../images/film-10.png"
import film11Path from "../../images/film-11.jfif"
import film12Path from "../../images/film-12.jfif"
import film13Path from "../../images/film-13.jfif"
import film14Path from "../../images/film-14.jfif"
import film15Path from "../../images/film-15.jfif"
import film16Path from "../../images/film-16.jfif"
import Layout from "../Layout/Layout";
import MoviesSearch from "../MoviesSearch/MoviesSearch";

function Movies(props) {
  return (
    <Layout>
      <MoviesSearch/>
      <MoviesCardList isSelectionMode={true} more={true} cards={[
        {
          _id: "01",
          url : film1Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "02",
          url : film2Path,
          description: "33 слова о дизайне",
          duration: 125
        },
        {
          _id: "03",
          url : film3Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "04",
          url : film4Path,
          description: "33 слова о дизайне",
          duration: 40
        },
        {
          _id: "05",
          url : film5Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "06",
          url : film6Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "07",
          url : film7Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "08",
          url : film8Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "09",
          url : film9Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "10",
          url : film10Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "11",
          url : film11Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "12",
          url : film12Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "13",
          url : film13Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "14",
          url : film14Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "15",
          url : film15Path,
          description: "33 слова о дизайне",
          duration: 120
        },
        {
          _id: "16",
          url : film16Path,
          description: "33 слова о дизайне",
          duration: 120
        },
      ]}/>
    </Layout>
  )
}

export default Movies