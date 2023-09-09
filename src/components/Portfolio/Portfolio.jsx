import { Link } from "react-router-dom"
import Layout from "../Layout/Layout"
import './Portfolio.css'

function Portfolio(props) {
  return (
    <Layout>
      <section className="portfolio">

        <div className="portfolio__header">
          <p className="portfolio__header-item">Портфолио</p>
        </div> 
      
        <ul className="portfolio__link">
          <li className="portfolio__link-item">
           <p className="portfolio__link-text">Статичный сайт</p> <Link className="portfolio__link-arrows">↗</Link>
          </li> 

          <li className="portfolio__link-item">
           <p className="portfolio__link-text">Адаптивный сайт</p> <Link className="portfolio__link-arrows">↗</Link>
          </li> 

          <li className="portfolio__link-item">
           <p className="portfolio__link-text">Одностраничное приложение</p> <Link className="portfolio__link-arrows">↗</Link>
          </li> 
        </ul>    

      </section>
    </Layout>
  )
}

export default Portfolio