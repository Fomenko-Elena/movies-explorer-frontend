import classNames from "classnames"
import { Link } from "react-router-dom"
import "./DialogSubmitSection.css"

function DialogSubmitSection({
  className,
  wide,
  submitText,
  notes,
  linkText,
  link,
  error,
}) {
  return (
    <div className={className}>
      <span className="dialog__error">{error}</span>
      <button className={classNames('dialog__submit', { 'dialog__submit_wide': wide })} type="submit">{submitText}</button>
      <p className="dialog__text">
        {notes}
        <Link className={classNames('dialog__link', { 'dialog__link_wide': wide })} to={link}>{linkText}</Link>
      </p>
    </div>
  )
}

export default DialogSubmitSection