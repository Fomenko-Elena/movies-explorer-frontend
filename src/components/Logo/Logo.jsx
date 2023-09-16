import "./Logo.css"
import logoPath from '../../images/logo.svg';
import { Link } from "react-router-dom"
import classNames from "classnames";

function Logo({
  className,
}) {
  return (
    <Link className={classNames('logo-link', className)} to="/">
      <img className="logo" alt="Логотип" src={logoPath}/>
    </Link>
  )
}

export default Logo