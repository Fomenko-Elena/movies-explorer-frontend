import { Link } from "react-router-dom"
import "./PageNotFound.css"

function PageNotFound() {
  return (
    <section className="page-not-found">
      <h1 className="page-not-found__header">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <Link className="page-not-found__link" to="/">Назад</Link>
    </section>
  )
}

export default PageNotFound