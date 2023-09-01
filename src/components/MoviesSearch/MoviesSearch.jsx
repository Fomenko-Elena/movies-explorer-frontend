import "./MoviesSearch.css"

function MoviesSearch(props) {
  return (
    <section className="search">
      <div className="search__phrase">
        <input type="text" className="search__text" placeholder="Фильм"></input>
        <input type="button" className="search__button"></input>
      </div>
      <div className="search__options">
        <input type="checkbox" className="search__short"></input>
        <label className="search__short-label">Короткометражки</label>
      </div>
    </section>
  )
}

export default MoviesSearch
