import { useEffect, useState } from "react"
import DialogWithLogo from "../DialogWithLogo/DialogWithLogo";
import "./Register.css"
import Input from "../Input/Input";
import Inputs from "../Inputs/Inputs";
import DialogSubmitSection from "../DialogSubmitSection/DialogSubmitSection";
import { useForm } from "../../hooks/formHooks";
import { nameValidationSettiings } from "../../utils/constants";

function Register({
  onRegister,
}) {
  const [values, handleChange, setValues] = useForm()
  const [error, setError] = useState(null)

  useEffect(() => {
    setValues({
      name: "",
      email: "",
      password: "123",
    })
  }, [])

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(values)
      .catch(error => setError(error.message))
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
          onChange={handleChange}
          { ...nameValidationSettiings } />
        <Input
          name="email"
          type="email"
          label="E-mail"
          placeholder="E-mail"
          value={values.email}
          onChange={handleChange}
          required={true} />

        <Input
          name="password"
          type="password"
          label="Пароль"
          placeholder="Пароль"
          value={values.password}
          onChange={handleChange}
          required={true} />
      </Inputs>
      <DialogSubmitSection 
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