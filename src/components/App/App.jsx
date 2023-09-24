import React, { useContext, useEffect, useState } from 'react'
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
import PageNotFound from '../PageNotFound/PageNotFound'
import { WindowSizeContext } from '../../contexts/WindowSizeContext'
import { mainApi } from '../../utils/MainApi'
import { moviesData } from '../../utils/MoviesData'
import { logErrorHandler } from '../../utils/errors'
import { useMount } from '../../hooks/componentHook'
import { savedMoviesData } from '../../utils/SavedMoviesData'
import ProtectedRoute from '../ProptectedRoute/ProtectedRoute'

function App() {
  const [currentUser, setCurrentUser] = useState(noUser)
  const [menuVisible, setMenuVisible] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile']
  const footerPaths = ['/', '/movies', '/saved-movies']
  const windowSizeContext = useContext(WindowSizeContext)
  const didMount = useMount()

  function isMobile() {
    return windowSizeContext.width <= 768
  }

  useEffect(() => {
    if (!isMobile() && menuVisible) setMenuVisible(false)
  }, [windowSizeContext])

  useEffect(() => {
    mainApi
      .getUser()
      .then(setCurrentUser)
      .catch((error) => {
        logErrorHandler(error);
        clearData();
      })
  }, [])

  useEffect(() => {
    if (!didMount || currentUser === noUser) return;

    savedMoviesData
      .load()
      .then(() => navigate('/movies', { replace: true }))
      .catch(logErrorHandler)
  }, [currentUser])

  function clearData() {
    moviesData.clear();
    savedMoviesData.clear();
  }

  function handleSignOut() {
    return mainApi
      .signOut()
      .then(() => {
        clearData();
        setCurrentUser(noUser);
        navigate('/', { replace: true });
      })  
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
      .then(() => mainApi.getUser())
      .then((userData) => {
        setCurrentUser(userData);
        navigate('/movies', { replace: true });
    })
  }

  function handleSaveProfile(profile) {
    return mainApi
      .updateUser(profile)
      .then((userData) => {
        currentUser.email = userData.email;
        currentUser.name = userData.name;
      })
  }

  function handleOpenMenu() {
    setMenuVisible(true)
  }

  function handleMenuClose() {
    setMenuVisible(false);
  }

  function handleFilterMovies(filter) {
    return moviesData.filterAsync(filter);
  }

  function handleAddSelection(cardData) {
    return moviesData.select(cardData);
  }

  function handleRemoveSelection(cardData) {
    return moviesData.unselect(cardData);
  }

  function handleRemoveSavedMovie(cardData) {
    return savedMoviesData.unselect(cardData)
  }

  function handleSavedMoviesFilter(filter) {
    return savedMoviesData.filterAsync(filter)
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
            element={
              <ProtectedRoute
              accessible={currentUser !== noUser}
                component={Movies}
                onFilter={handleFilterMovies}
                onSelect={handleAddSelection}
                onRemove={handleRemoveSelection}
              />
            }
          />
          <Route
            path="/saved-movies" 
            element={
              <ProtectedRoute
                accessible={currentUser !== noUser}
                component={SavedMovies}
                onFilter={handleSavedMoviesFilter}
                onRemove={handleRemoveSavedMovie}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute
                accessible={currentUser === noUser}
                component={Register}
                onRegister={handleRegister}
                navigateTo="/movies"
              />
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRoute
                accessible={currentUser === noUser}
                component={Login}
                onLogin={handleLogin}
                navigateTo="/movies"
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                accessible={currentUser !== noUser}
                component={Profile}
                onSignOut={handleSignOut} 
                onSave={handleSaveProfile} 
              />
            }
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