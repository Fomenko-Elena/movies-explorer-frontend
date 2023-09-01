import MoviesCard from "../MoviesCard/MoviesCard"
import "./MoviesCardList.css"

function MoviesCardList(props) {
  return (
    <ul className="card-list">
      {
        props.cards.map((card) => (
          <MoviesCard key={card._id} data={card} isSelectionMode={props.isSelectionMode}/>
        ))
      }
    </ul>
  )
}

export default MoviesCardList