import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { LayoutHighlight, noUser } from '../../utils/constants';
import './Header.css'
import Layout from '../Layout/Layout';
import classNames from 'classnames';

function Header({
  highlight,
  onOpenMenu,
}) {
    const currentUser = useContext(CurrentUserContext)

    function handleOpenMenuClick(e) {
       e.preventDefault();
       onOpenMenu();
    }

    return (
      <Layout highlight={highlight}>
        <header className="header">
          <Link className="header__logo-link" to="/">
              <img className="header__logo" alt="Лого" src={logoPath}/>
          </Link>
          {currentUser === noUser && (
            <nav className="header__nav-right-bar">
              <Link className="header__link" to="/signup">Регистрация</Link>
              <Link className="header__link header__link_highlighted" to="/signin">Войти</Link>
            </nav>
          )}
          {currentUser !== noUser && (
            <>
              <nav className="header__nav-center-bar">
                <Link className="header__link header__link_auth" to="/movies">Фильмы</Link>
                <Link className="header__link header__link_auth" to="/saved-movies">Сохраненные фильмы</Link>
              </nav>
              <nav className="header__nav-right-bar">
                <Link className="header__link header__link_auth" to="/profile">
                  Аккаунт
                  <div className={classNames('header__link-account', { 'header__link-account_blue': highlight === LayoutHighlight.Blue })}>
                    <div className="header__link-account-image"></div>
                  </div>
                </Link>
                <Link className='header__menu' onClick={handleOpenMenuClick}/>
              </nav>
            </>
          )}
        </header>
      </Layout>
    )
}

export default Header