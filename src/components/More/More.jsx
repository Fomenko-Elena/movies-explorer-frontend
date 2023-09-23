import "./More.css"

function More({
  more,
  onMore
}) {
  function handleMoreClick() {
    onMore()
  }
  return (
    <section className={"more" + (more ? "" : " more_empty")}>
      {more && <button className="more__button" onClick={handleMoreClick}>Ещё</button>}
    </section>
  )
}

export default More