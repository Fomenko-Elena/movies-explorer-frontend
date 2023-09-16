import "./More.css"

function More(props) {
  return (
    <section className={"more" + (props.more ? "" : " more_empty")}>
      {props.more && <button className="more__button">Ещё</button>}
    </section>
  )
}

export default More