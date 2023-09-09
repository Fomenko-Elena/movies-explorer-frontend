import "./DialogHeader.css"

function DialogHeader({ header, wide }) {
  return (
    <h1 className="dialog__header">{header}</h1>
  )
}

export default DialogHeader