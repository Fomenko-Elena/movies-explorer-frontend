import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import DialogWithLogo from "../DialogWithLogo/DialogWithLogo";
import "./Register.css"

function Register(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    setEmail("");
    setPassword("123");
    setName("");
  }, [])

  function handleSubmit(e) {
    e.preventDefault();

    props.onRegister({
      email: email,
      password: password
    })
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  return (
    <DialogWithLogo header="Добро пожаловать!" onSubmit={handleSubmit}>
      <div className="form__fields">
        <div className="form__input-field">
          <label for="name" className="form__input-label">Имя</label>
          <input
            className="form__input"
            name="name"
            placeholder="Имя"
            value={name}
            onChange={handleNameChange}
          />
          <span className="form__error name-error"></span>
        </div>

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
            className="form__input form__input_error"
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="form__error password-error">Что-то пошло не так</span>
        </div>
      </div>

      <div className="register__submit-section">
        <button className="form__submit" type="submit">Зарегистрироваться</button>
        <p className="form__text">
          Уже зарегистрированы?
          <Link className="form__link" to="/signin">Войти</Link>
        </p>
      </div>

    </DialogWithLogo>
  )
}

export default Register