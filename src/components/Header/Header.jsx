import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { noUser } from '../../utils/constants';
import './Header.css'
import Layout from '../Layout/Layout';
import Logo from '../Logo/Logo';
import ProfileLink from '../ProfileLink/ProfileLink';

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
    <Layout highlight={highlight} component="header">
      <div className="header">
        <Logo />
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
              <ProfileLink className="header__link header__link_auth" highlight={highlight} />
              <Link className='header__menu' onClick={handleOpenMenuClick} />
            </nav>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Header