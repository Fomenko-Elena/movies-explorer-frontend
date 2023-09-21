import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { ComponentStatus, LayoutHighlight, noUser, predefinedMovies } from '../../utils/constants'
import './App.css'
import Profile from '../Profile/Profile'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import NavigationMenu from '../NavigationMenu/NavigationMenu'
import PageNotFound from '../PageNotFound/PageNotFound'
import { WindowSizeContext } from '../../contexts/WindowSizeContext'
import { mainApi } from '../../utils/MainApi'

function App() {
  const [currentUser, setCurrentUser] = useState(noUser)
  const [menuVisible, setMenuVisible] = useState(false)
  const [moviesStatus, setMoviesStatus] = useState(ComponentStatus.Loading)
  const [filteredMovies, setFilteredMovies] = useState([])

  const navigate = useNavigate()
  const location = useLocation()
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile']
  const footerPaths = ['/', '/movies', '/saved-movies']
  const windowSizeContext = useContext(WindowSizeContext)

  function isMobile() {
    return windowSizeContext.width <= 768
  }

  useEffect(() => {
    if (!isMobile() && menuVisible) setMenuVisible(false)
  }, [windowSizeContext])

  function handleSignOut() {
    setCurrentUser(noUser);
    navigate('/signin', { replace: true });
  }

  function handleRegister(registrationData) {
    return mainApi
      .signUp(registrationData)
      .then((userData) => {
        return mainApi
            .signIn({ 
              email: registrationData.email,
              password: registrationData.password 
            })
            .then(() => userData)
      })
      .then((userData) => {
          setCurrentUser(userData);
          navigate('/movies', { replace: true })
      })
  }

  function handleLogin(loginData) {
    return mainApi
      .signIn(loginData)
      .then((userData) => {
        setCurrentUser(userData);
        navigate('/movies', { replace: true })
    })
  }

  function handleOpenMenu() {
    setMenuVisible(true)
  }

  function handleMenuClose() {
    setMenuVisible(false)
  }

  function handleFilterMovies() {
    if (filteredMovies.length) return;

    setMoviesStatus(ComponentStatus.Loading)
    setTimeout(() => {
      setMoviesStatus(ComponentStatus.Successed);
      setFilteredMovies(predefinedMovies);
    }, 500)
  }

  function handleSaveProfile(profile) {
    return Promise.reject({message: 'Test message'})
  }

  function isHeaderVisible() {
    return headerPaths.includes(location.pathname);
  }

  function isFooterVisible() {
    return footerPaths.includes(location.pathname);
  }

  function getHeaderHighlight() {
    if (location.pathname === "/") return LayoutHighlight.Blue;
    return LayoutHighlight.Default
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {isHeaderVisible() && <Header highlight={getHeaderHighlight()} onOpenMenu={handleOpenMenu}/>}

        <Routes>
          <Route
            path="/" 
            element={<Main/>} 
          />
          <Route
            path="/movies" 
            element={<Movies OnFilter={handleFilterMovies} componentStatus={moviesStatus} cards={filteredMovies}/>} 
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
            element={<Profile OnSignOut={handleSignOut} OnSave={handleSaveProfile} user={currentUser}/>}
          />
          <Route
            path="*"
            element={<PageNotFound />} 
          />
        </Routes>

        {isFooterVisible() && (<Footer/>)}

        <NavigationMenu isOpened={menuVisible} onClose={handleMenuClose} />
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App