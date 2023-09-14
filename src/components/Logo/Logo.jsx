import "./Logo.css"
import logoPath from '../../images/logo.svg';
import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link className="logo-link" to="/">
      <img className="logo" alt="Логотип" src={logoPath}/>
    </Link>
  )
}

export default Logo