import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { LayoutHighlight, noUser } from '../../utils/constants';
import './Header.css'
import Layout from '../Layout/Layout';

function Header(props) {
    const currentUser = useContext(CurrentUserContext);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isMenuOpened, setMenuOpened] = useState(false)

    function handleWindowResize() {
      setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener('resize', handleWindowResize)
      return () => {
        window.removeEventListener('resize', handleWindowResize)
      }
    }, [])

    function getAccountHighlightClassName() {
      switch(props.highlight) {
        case LayoutHighlight.Blue: return "header__link-account header__link-account_blue";
        default: return "header__link-account";
      }
    }

    return (
      <Layout highlight={props.highlight}>
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
                  <div className={getAccountHighlightClassName()}>
                    <div className="header__link-account-image"></div>
                  </div>
                </Link>
              </nav>
            </>
          )}
          
        </header>
      </Layout>
    )
}

export default Header