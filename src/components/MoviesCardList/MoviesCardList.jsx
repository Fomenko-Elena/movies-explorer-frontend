import More from "../More/More"
import MoviesCard from "../MoviesCard/MoviesCard"
import "./MoviesCardList.css"

function MoviesCardList({
  cards,
  isSelectionMode,
  more,
  onMore,
  onSelect,
  onRemove,
}) {
  function handleMore() {
    return onMore()
  }

  function handleRemoveSelection(data) {
    return onRemove(data);
  }

  function handleAddSelection(data) {
    return onSelect(data);
  }

  return (
    <>
      <section className="cards">
        {cards.length > 0 &&
          <ul className="card-list">
            {
              cards.map((card) => (
                <MoviesCard key={card.movieId} data={card} isSelectionMode={isSelectionMode} onRemove={handleRemoveSelection} onSelect={handleAddSelection} />
              ))
            }
          </ul>
        }
        {cards.length === 0 &&
          <p className="cards__empty">Ничего не найдено</p>
        }
      </section>
      <More more={more} onMore={handleMore} />
    </>
  )
}

export default MoviesCardList