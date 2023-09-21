import { useState } from "react"
import DialogWithLogo from "../DialogWithLogo/DialogWithLogo"
import "./Login.css"
import Input from "../Input/Input"
import Inputs from "../Inputs/Inputs"
import DialogSubmitSection from "../DialogSubmitSection/DialogSubmitSection"
import { useForm } from "../../hooks/formHooks"
import { HTTP_ERR_UNAUTHORIZED } from "../../utils/constants"

function Login({
  onLogin,
}) {
  const [values, handleChange] = useForm({ email: "", password: "" })
  const [error, setError] = useState(null)

  function handleSubmit(e) {
    e.preventDefault();

    onLogin(values)
      .catch(error => {
        if (error.status === HTTP_ERR_UNAUTHORIZED) 
          setError('Вы ввели неправильный логин или пароль');
        else
          setError('При авторизации произошла ошибка');
      });
  }

  return (
    <DialogWithLogo header="Рады видеть!" onSubmit={handleSubmit}>
      <Inputs>
        <Input
          name="email"
          type="email"
          label="E-mail"
          placeholder="E-mail"
          value={values.email}
          onChange={handleChange}
          wide={false}
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
        className="login__submit-section"
        submitText="Войти"
        notes="Ещё не зарегистрированы?"
        linkText="Регистрация"
        link="/signup"
        error={error}
      />
    </DialogWithLogo>
  )
}

export default Login