import { useState } from "react"
import "./MoviesCard.css"

function MoviesCard(props) {
  const [selected, setSelected] = useState(false)

  function getDuration() {
    const hours = Math.floor(props.data.duration / 60);
    const mins = props.data.duration % 60;
    return `${hours > 0 ? hours + 'ч' : ''}${mins > 0 ? mins + 'м' : ''}`;
  }

  function handleSelectionChanged(e) {
    setSelected(!selected);
  }

  function handleRemoveClick(e) {
  }

  return (
    <li className="card">
      <img className="card-image" alt={props.data.description} src={props.data.url}></img>
      <div className="card-footer">
        <div className="card-footer-left">
          <h2 className="card-description">{props.data.description}</h2>
          <p className="card-duration">{getDuration()}</p>
        </div>
        <div className="card-footer-right">
          {props.isSelectionMode && <input type="checkbox" className="card-selection" checked={selected} onChange={handleSelectionChanged}></input>}
          {!props.isSelectionMode && <input type="button" className="card-remove" onClick={handleRemoveClick}></input>}
        </div>
      </div>
    </li>
  )
}

export default MoviesCard