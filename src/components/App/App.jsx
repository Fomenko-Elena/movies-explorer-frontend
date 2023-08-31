import React, { useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { noUser } from '../../utils/constants'
import './App.css'
import Profile from '../Profile/Profile'

function App() {
  const [currentUser, setCurrentUser] = useState(noUser)

  const navigate = useNavigate()
  const location = useLocation()
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile']

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

  function isHeaderFooterVisible() {
    return headerPaths.includes(location.pathname);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {isHeaderFooterVisible() && <Header onSignOut={handleSignOut}/>}

        <Routes>
          <Route
            path="/"
            element={<Main/>}
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
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App