import { useState } from "react";
import Dialog from "../Dialog/Dialog"
import "./Profile.css";
import Input from "../Input/Input";
import Inputs from "../Inputs/Inputs";
import DialogHeader from "../DialogHeader/DialogHeader";
import DialogSubmitSection from "../DialogSubmitSection/DialogSubmitSection";
import { useFormWithValidation } from "../../hooks/formHooks";
import { nameValidationSettiings } from "../../utils/constants";
import { Link } from "react-router-dom"
import { validationSchemas } from "../../utils/validation";

function Profile({
  user,
  onSave,
  onSignOut,
}) {
  const [isReadOnly, setReadOnly] = useState(true)
  const [error, setError] = useState(null)
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    initialState: {
      name: user.name,
      email: user.email,
    },
    validationSchema: {
      email: validationSchemas.email
    }
  })

  function handleSubmit(e) {
    e.preventDefault();
    onSave(values)
      .then((profile) => setReadOnly(true))
      .catch(error => setError(error.message));
  }

  function handleEditClick(e) {
    e.preventDefault();
    setReadOnly(false)
  }

  function handleSignoutClick(e) {
    e.preventDefault();
    onSignOut()
      .catch(() => {
        setError('Ошибка при выходе из аккаунта');
      })
  }


  return (
    <Dialog formClass="dialog__form_wide" onSubmit={handleSubmit}>
      <DialogHeader header={`Привет, ${user.name}!`} wide={true}/>
      <Inputs wide={true}>
        <Input
          name="name"
          type="text"
          label="Имя"
          placeholder="Имя"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
          wide={true}
          isReadOnly={isReadOnly}
          { ...nameValidationSettiings } />
        <div className="profile__separator"/>
        <Input
          name="email"
          type="email"
          label="E-mail"
          placeholder="E-mail"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          wide={true}
          isReadOnly={isReadOnly}
          required={true} />
      </Inputs>
      {isReadOnly && (
        <div className="profile__submit-section">
          <Link className="profile__link" onClick={handleEditClick}>Редактировать</Link>
          <Link className="profile__signout-link" onClick={handleSignoutClick}>Выйти из аккаунта</Link>
        </div>
      )}
      {!isReadOnly && <DialogSubmitSection
        className="profile__submit-section"
        submitText="Сохранить"
        error={error}
        isValid={isValid && (user.email !== values.email || user.name !== values.name)}
      />}
    </Dialog>
  )
}

export default Profile