import { Link } from "react-router-dom"
import Layout from "../Layout/Layout"
import './Portfolio.css'

function Portfolio(props) {
  return (
    <Layout>
      <section className="portfolio">

        <div className="portfolio__header">
          <h2 className="portfolio__header-item">Портфолио</h2>
        </div> 
      
        <ul className="portfolio__link">
          <li className="portfolio__link-item">
           <p className="portfolio__link-text">Статичный сайт</p> <Link className="portfolio__link-arrows" to="https://fomenko-elena.github.io/russian-travel/index.html" target="_blank">↗</Link>
          </li> 

          <li className="portfolio__link-item">
           <p className="portfolio__link-text">Адаптивный сайт</p> <Link className="portfolio__link-arrows" to="https://fomenko-elena.github.io/mesto" target="_blank">↗</Link>
          </li> 
          
          <li className="portfolio__link-item">
           <p className="portfolio__link-text">Одностраничное приложение</p> <Link className="portfolio__link-arrows" to="https://helen-fomenko.nomoreparties.co" target="_blank">↗</Link>
          </li> 
        </ul>    

      </section>
    </Layout>
  )
}

export default Portfolio