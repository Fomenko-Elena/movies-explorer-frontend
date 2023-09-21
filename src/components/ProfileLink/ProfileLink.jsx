import classNames from "classnames";
import { LayoutHighlight } from "../../utils/constants";
import "./ProfileLink.css"
import { NavLink } from 'react-router-dom';

function ProfileLink({
  className,
  highlight,
  onClick
}) {
  function getClassName(args) {
    if (typeof className === 'function') {
      return classNames('profile-link', className(args))
    }
    return classNames('profile-link', className)
  }

  return (
    <NavLink className={getClassName} to="/profile" onClick={onClick}>
      Аккаунт
      <div className={classNames('profile-link-account', { 'profile-link-account_blue': highlight === LayoutHighlight.Blue })}>
        <div className="profile-link-image"></div>
      </div>
    </NavLink>
  )
}

export default ProfileLink