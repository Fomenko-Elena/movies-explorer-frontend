import { useState } from "react"
import "./MoviesCard.css"

function MoviesCard({
  data,
  isSelectionMode,
}) {
  const [selected, setSelected] = useState(false)

  function getDuration() {
    const hours = Math.floor(data.duration / 60);
    const mins = data.duration % 60;
    return `${hours > 0 ? hours + 'ч' : ''}${mins > 0 ? mins + 'м' : ''}`;
  }

  function handleSelectionChanged(e) {
    setSelected(!selected);
  }

  function handleRemoveClick(e) {
  }

  function handleCardCick(e) {
    if (isSelectionMode) handleSelectionChanged(e); else handleRemoveClick(e)
  }

  return (
    <li className="card" onClick={handleCardCick}>
      <img className="card-image" alt={data.description} src={data.trailerLink}></img>
      <div className="card-footer">
        <div className="card-footer-left">
          <h2 className="card-description">{data.description}</h2>
          <p className="card-duration">{getDuration()}</p>
        </div>
        <div className="card-footer-right">
          {isSelectionMode && <input type="checkbox" className="card-selection" checked={selected} onChange={handleSelectionChanged}></input>}
          {!isSelectionMode && <input type="button" className="card-remove" onClick={handleRemoveClick}></input>}
        </div>
      </div>
    </li>
  )
}

export default MoviesCard