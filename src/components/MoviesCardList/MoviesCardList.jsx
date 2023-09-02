import More from "../More/More"
import MoviesCard from "../MoviesCard/MoviesCard"
import "./MoviesCardList.css"

function MoviesCardList(props) {
  return (
    <>
      <section className="cards">
        <ul className="card-list">
          {
            props.cards.map((card) => (
              <MoviesCard key={card._id} data={card} isSelectionMode={props.isSelectionMode}/>
            ))
          }
        </ul>
      </section>
      <More more={props.more}/>
    </>
  )
}

export default MoviesCardList