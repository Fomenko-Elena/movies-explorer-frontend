import { useEffect } from "react"
import DialogWithLogo from "../DialogWithLogo/DialogWithLogo";
import "./Register.css"
import Input from "../Input/Input";
import Inputs from "../Inputs/Inputs";
import DialogSubmitSection from "../DialogSubmitSection/DialogSubmitSection";
import { useForm } from "../../hooks/formHooks";
import { nameValidationSettiings } from "../../utils/constants";

function Register(props) {
  const [values, handleChange, setValues] = useForm()

  useEffect(() => {
    setValues({
      name: "",
      email: "",
      password: "123",
    })
  }, [])

  function handleSubmit(e) {
    e.preventDefault();

    props.onRegister(values)
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
          label="Email"
          placeholder="Email"
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
      />
    </DialogWithLogo>
  )
}

export default Register