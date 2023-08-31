import { useEffect, useState } from "react";
import Dialog from "../Dialog/Dialog"
import { Link } from "react-router-dom";

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
    <Dialog header={`Привет, ${props.user.name}`}>
      <input
          className="form__input"
          name="name" 
          value={name} 
          onChange={handleNameChange}
      />
      <span className="form__error password-error"></span>
      <input 
          className="form__input"
          type="email" 
          name="email" 
          placeholder="Email" 
          value={email} 
          onChange={handleEmailChange}
      />
      <span className="form__error email-error"></span>
      
      <button className="form__submit" type="submit">Редактировать</button>
      <Link className="form__link" to="/sign-in">Выйти из аккаунта</Link>
    </Dialog>
  )
}

export default Profile