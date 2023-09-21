import More from "../More/More"
import MoviesCard from "../MoviesCard/MoviesCard"
import "./MoviesCardList.css"

function MoviesCardList({
  cards,
  isSelectionMode,
  more,
}) {
  return (
    <>
      <section className="cards">
        <ul className="card-list">
          {
            cards.map((card) => (
              <MoviesCard key={card._id} data={card} isSelectionMode={isSelectionMode}/>
            ))
          }
        </ul>
      </section>
      <More more={more}/>
    </>
  )
}

export default MoviesCardList