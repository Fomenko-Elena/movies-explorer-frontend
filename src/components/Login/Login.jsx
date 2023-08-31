import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import DialogWithLogo from "../DialogWithLogo/DialogWithLogo"
import "./Login.css"

function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const location = useLocation()

  useEffect(() => {
    setEmail("")
    setPassword("")
  }, [])

  function handleSubmit(e) {
    e.preventDefault();

    props.onLogin({
      email: email,
      password: password
    })
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  return (
    <DialogWithLogo header="Рады видеть!" onSubmit={handleSubmit}>
      <div className="form__fields">
        <div className="form__input-field">
          <label for="email" className="form__input-label">E-mail</label>
          <input
            className="form__input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <span className="form__error email-error"></span>
        </div>

        <div className="form__input-field">
          <label for="password" className="form__input-label">Пароль</label>
          <input
            className="form__input"
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="form__error password-error">Что-то пошло не так</span>
        </div>
      </div>

      <div className="login__submit-section">
        <button className="form__submit" type="submit">Войти</button>
        <p className="form__text">
          Ещё не зарегистрированы?
          <Link className="form__link" to="/signup">Зарегистрироваться</Link>
        </p>
      </div>

    </DialogWithLogo>
  )
}

export default Login