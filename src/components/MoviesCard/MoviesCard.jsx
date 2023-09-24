import { Link } from "react-router-dom";
import "./MoviesCard.css"
import { getDuration } from "../../utils/utils";

function MoviesCard({
  data,
  isSelectionMode,
  onSelect,
  onRemove,
}) {
  function handleSelectionChanged(e) {
    const newSelected = !getSelectedState();
    if (newSelected) onSelect(data); else onRemove(data);
  }

  function handleRemoveClick(e) {
    onRemove(data);
  }

  function getSelectedState() {
    return !!data.savedMovieId;
  }

  return (
    <li className="card">
      <Link className="card-link"  target="_blank" to={data.trailerLink}>
        <img className="card-image" alt={data.nameRU} src={data.image}></img>
      </Link>
      <div className="card-footer">
        <div className="card-footer-left">
          <h2 className="card-description">{data.nameRU}</h2>
          <p className="card-duration">{getDuration(data.duration)}</p>
        </div>
        <div className="card-footer-right">
          {isSelectionMode && <input type="checkbox" className="card-selection" checked={getSelectedState()} onChange={handleSelectionChanged}></input>}
          {!isSelectionMode && <input type="button" className="card-remove" onClick={handleRemoveClick}></input>}
        </div>
      </div>
    </li>
  )
}

export default MoviesCard