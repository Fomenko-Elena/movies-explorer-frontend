import { Link } from "react-router-dom"
import Layout from "../Layout/Layout"
import './Portfolio.css'

function Portfolio() {
  return (
    <Layout>
      <section className="portfolio">

        <div className="portfolio__header">
          <h2 className="portfolio__header-item">Портфолио</h2>
        </div> 
      
        <ul className="portfolio__links">
          <li className="portfolio__link-item">
            <Link className="portfolio__link" to="https://fomenko-elena.github.io/russian-travel/index.html" target="_blank">
              <p className="portfolio__link-text">Статичный сайт</p>
              <span className="portfolio__link-arrows">↗</span>
            </Link>
          </li> 

          <li className="portfolio__link-item">
            <Link className="portfolio__link" to="https://fomenko-elena.github.io/mesto" target="_blank">
              <p className="portfolio__link-text">Адаптивный сайт</p>
              <span className="portfolio__link-arrows">↗</span>
             </Link>
          </li> 
          
          <li className="portfolio__link-item">
            <Link className="portfolio__link" to="https://helen-fomenko.nomoreparties.co" target="_blank">
              <p className="portfolio__link-text">Одностраничное приложение</p>
              <span className="portfolio__link-arrows">↗</span>
             </Link>
          </li> 
        </ul>    

      </section>
    </Layout>
  )
}

export default Portfolio