import classNames from "classnames"
import "./DialogHeader.css"

function DialogHeader({ header, wide }) {
  return (
    <h1 className={classNames('dialog__header', { 'dialog__header_wide': wide })}>{header}</h1>
  )
}

export default DialogHeader