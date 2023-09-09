import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { LayoutHighlight, noUser } from '../../utils/constants'
import './App.css'
import Profile from '../Profile/Profile'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import NavigationMenu from '../NavigationMenu/NavigationMenu'

function App() {
  const [currentUser, setCurrentUser] = useState(noUser)
  const [menuVisible, setMenuVisible] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const navigate = useNavigate()
  const location = useLocation()
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile']

  function handleWindowResize() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  useEffect(() => {
    if (!isMobile() && menuVisible) setMenuVisible(false)
  }, [windowWidth])

  function isMobile() {
    return windowWidth <= 768
  }

  function handleSignOut() {
    setCurrentUser(noUser);
    navigate('/signin', { replace: true });
  }

  function handleRegister(registrationData) {
    navigate('/signin', { replace: true });
  }

  function handleLogin(loginData) {
    const userData = { 
      _id: 1,
      name: 'Test User',
      email: loginData.email
    };
    setCurrentUser(userData);
    navigate('/', { replace: true });
  }

  function handleLogoff() {
    setCurrentUser(noUser);
    navigate('/', { replace: true });
  }

  function handleOpenMenu() {
    setMenuVisible(true)
  }

  function handleMenuClose() {
    setMenuVisible(false)
  }

  function isHeaderFooterVisible() {
    return headerPaths.includes(location.pathname);
  }

  function getHeaderHighlight() {
    if (location.pathname === "/") return LayoutHighlight.Blue;
    return LayoutHighlight.Default
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {isHeaderFooterVisible() && <Header highlight={getHeaderHighlight()} onOpenMenu={handleOpenMenu}/>}

        <Routes>
          <Route
            path="/" 
            element={<Main/>} 
          />
          <Route
            path="/movies" 
            element={<Movies/>} 
          />
          <Route
            path="/saved-movies" 
            element={<SavedMovies/>} 
          />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister}/>}
          />
          <Route
            path="/signin"
            element={<Login onLogin={handleLogin}/>}
          />
          <Route
            path="/profile"
            element={<Profile onLogoff={handleLogoff} user={currentUser}/>}
          />
        </Routes>

        {isHeaderFooterVisible() && (<Footer/>)}

        <NavigationMenu isOpened={menuVisible} onClose={handleMenuClose} />
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App