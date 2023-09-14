import { createRef, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import "./NavigationMenu.css"
import classNames from "classnames";
import ProfileLink from "../ProfileLink/ProfileLink";

function NavigationMenu({
  isOpened,
  onClose,
}) {
  const popupRef = createRef();

  function handleKeyUp(evt) {
    if (evt.code !== 'Escape') return;
    onClose();
  }

  function handleMouseDown(evt) {
    if (evt.target !== popupRef.current) return;
    onClose();
  }

  function handleClose() {
    onClose();
  }

  useEffect(() => {
    if (isOpened) {
      document.addEventListener('keyup', handleKeyUp);
    } else {
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [isOpened]);

  return (
    <div ref={popupRef} className={classNames('popup', 'popup__navigation-menu', { 'popup_opened': isOpened })} onMouseDown={handleMouseDown}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={handleClose}></button>
        <nav className="navigation">
          <NavLink
            to="/"
            className={({isActive}) => classNames('navigation__link', { 'navigation__link_active': isActive })}
            onClick={handleClose}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({isActive}) => classNames('navigation__link', { 'navigation__link_active': isActive })}
            onClick={handleClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({isActive}) => classNames('navigation__link', { 'navigation__link_active': isActive })}
            onClick={handleClose}
          >
            Сохранённые фильмы
          </NavLink>
          <ProfileLink 
            className={({isActive}) => classNames('navigation__link', 'navigation__link_profile', { 'navigation__link_active': isActive })}
            onClick={handleClose}/>
        </nav>
      </div>
    </div>
  )
}

export default NavigationMenu