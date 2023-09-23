import "./MoviesCard.css"

function MoviesCard({
  data,
  isSelectionMode,
  onSelect,
  onRemove,
}) {
  function getDuration() {
    const hours = Math.floor(data.duration / 60);
    const mins = data.duration % 60;
    return `${hours > 0 ? hours + 'ч' : ''}${mins > 0 ? mins + 'м' : ''}`;
  }

  function handleSelectionChanged(e) {
    const newSelected = !getSelectedState();
    if (newSelected) onSelect(data); else onRemove(data);
  }

  function handleRemoveClick(e) {
    onRemove(data);
  }

  function handleCardCick(e) {
  }

  function getSelectedState() {
    return !!data.savedMovieId;
  }

  return (
    <li className="card" onClick={handleCardCick}>
      <img className="card-image" alt={data.nameRU} src={data.image}></img>
      <div className="card-footer">
        <div className="card-footer-left">
          <h2 className="card-description">{data.nameRU}</h2>
          <p className="card-duration">{getDuration()}</p>
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