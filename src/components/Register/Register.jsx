import { useEffect, useState } from "react"
import DialogWithLogo from "../DialogWithLogo/DialogWithLogo";
import "./Register.css"
import Input from "../Input/Input";
import Inputs from "../Inputs/Inputs";
import DialogSubmitSection from "../DialogSubmitSection/DialogSubmitSection";
import { useFormWithValidation } from "../../hooks/formHooks";
import { HTTP_ERR_CONFLICT, nameValidationSettiings } from "../../utils/constants";
import { validationSchemas } from "../../utils/validation";

function Register({
  onRegister,
}) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    initialState: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: {
      email: validationSchemas.email
    }
  })
  const [error, setError] = useState("")

  useEffect(() => setError(""), [values, errors, isValid])

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(values)
      .catch(error => {
        if (error.status === HTTP_ERR_CONFLICT) 
          setError(error.message); 
        else
          setError("При регистрации пользоввателя произошла ошибка")
      })
  }

  return (
    <DialogWithLogo header="Добро пожаловать!" onSubmit={handleSubmit}>
      <Inputs>
        <Input
          name="name"
          type="text"
          label="Имя"
          placeholder="Имя"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
          { ...nameValidationSettiings } />
        <Input
          name="email"
          type="email"
          label="E-mail"
          placeholder="E-mail"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          required={true} />

        <Input
          name="password"
          type="password"
          label="Пароль"
          placeholder="Пароль"
          value={values.password}
          error={errors.password}
          onChange={handleChange}
          required={true} />
      </Inputs>
      <DialogSubmitSection
        isValid={isValid}
        className="register__submit-section"
        submitText="Зарегистрироваться"
        notes="Уже зарегистрированы?"
        linkText="Войти"
        link="/signin"
        error={error}
      />
    </DialogWithLogo>
  )
}

export default Register