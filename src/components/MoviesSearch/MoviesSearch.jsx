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

  function handleSearchClick() {
    doSearch();
  }

  function handlePhraseChange(e) {
    setPhrase(e.target.value)
  }

  function handleShortMovieChange() {
    setShortMovie(!shortMovie);
  }

  function doSearch() {
    if (!phrase) return;

    onFilter({
      phrase,
      shortMovie,
    })
  }

  useEffect(() => {
      if (didMount) doSearch()
    }, 
    [shortMovie]);

  return (
    <section className="search">
      <div className="search__phrase">
        <input type="text" className="search__text" placeholder="Фильм" value={phrase} onChange={handlePhraseChange}></input>
        <input type="button" className="search__button" onClick={handleSearchClick}></input>
      </div>
      <div className="search__options">
        <input type="checkbox" className="search__short" checked={shortMovie} onChange={handleShortMovieChange}></input>
        <label className="search__short-label">Короткометражки</label>
      </div>
    </section>
  )
}

export default MoviesSearch
