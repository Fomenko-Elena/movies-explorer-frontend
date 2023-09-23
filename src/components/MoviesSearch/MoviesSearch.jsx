import { useEffect, useState } from "react"
import "./MoviesSearch.css"
import { useMount } from "../../hooks/componentHook"

function MoviesSearch({
  filter,
  onFilter
}) {
  const [phrase, setPhrase] = useState(filter.phrase)
  const [shortMovie, setShortMovie] = useState(filter.shortMovie)
  const didMount = useMount()

  function handleSubmit(e) {
    e.preventDefault();
    doSearch();
  }

  function handlePhraseChange(e) {
    setPhrase(e.target.value)
  }

  function handleShortMovieChange() {
    setShortMovie(!shortMovie);
  }

  function doSearch() {
    onFilter({
      phrase,
      shortMovie,
    })
  }

  useEffect(() => {
    const { phrase, shortMovie } = filter
    setPhrase(phrase)
    setShortMovie(shortMovie)
  }, [filter])

  useEffect(() => {
      if (didMount) doSearch()
    }, 
    [shortMovie]);

  return (
    <section className="search">
      <form className="search__phrase" onSubmit={handleSubmit}>
        <input type="text" className="search__text" placeholder="Фильм" value={phrase} onChange={handlePhraseChange}></input>
        <button type="submit" className="search__button"/>
      </form>
      <div className="search__options">
        <input type="checkbox" className="search__short" checked={shortMovie} onChange={handleShortMovieChange}></input>
        <label className="search__short-label">Короткометражки</label>
      </div>
    </section>
  )
}

export default MoviesSearch
