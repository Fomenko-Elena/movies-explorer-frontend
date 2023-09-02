import { useEffect, useState } from "react";
import Dialog from "../Dialog/Dialog"
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile(props) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
      setEmail(props.user.email);
      setName(props.user.name);
  }, [])

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <Dialog formClass="dialog__form_wide" onSubmit={props.onSubmit}>
      <h1 className="dialog__header dialog__header_wide">{`Привет, ${props.user.name}`}</h1>
      
      <div className="form__fields form__fields_wide">
        <label for="name" className="form__input-label form__input-label_wide">Имя</label>
        <input
          className="form__input form__input_wide"
          name="name"
          placeholder="Имя"
          value={name}
          onChange={handleNameChange}
        />
        <span className="form__error form-error_wide name-error"></span>

        <div className="profile__separator"></div>

        <label for="email" className="form__input-label form__input-label_wide">E-mail</label>
        <input
          className="form__input form__input_wide"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <span className="form__error form-error_wide email-error"></span>
      </div>

      <div className="profile__submit-section">
        <button className="form__submit form__submit_wide" type="submit">Редактировать</button>
        <Link className="profile__link" to="/signin">Выйти из аккаунта</Link>
      </div>
    </Dialog>
  )
}

export default Profile