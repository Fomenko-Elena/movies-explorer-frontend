import { useEffect } from "react";
import Dialog from "../Dialog/Dialog"
import "./Profile.css";
import Input from "../Input/Input";
import Inputs from "../Inputs/Inputs";
import DialogHeader from "../DialogHeader/DialogHeader";
import DialogSubmitSection from "../DialogSubmitSection/DialogSubmitSection";
import { useForm } from "../../hooks/formHooks";
import { nameValidationSettiings } from "../../utils/constants";

function Profile(props) {
  const [values, handleChange, setValues] = useForm()

  useEffect(() => {
    setValues({
      email: props.user.email,
      name: props.user.name,
    })
  }, [])

  return (
    <Dialog formClass="dialog__form_wide" onSubmit={props.onSubmit}>
      <DialogHeader header={`Привет, ${props.user.name}`} wide={true}/>
      <Inputs wide={true}>
        <Input
          name="name"
          type="text"
          label="Имя"
          placeholder="Имя"
          value={values.name}
          onChange={handleChange}
          wide={true}
          { ...nameValidationSettiings } />
        <div className="profile__separator"></div>
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          wide={true}
          required={true} />
      </Inputs>
      <DialogSubmitSection
        className="profile__submit-section"
        wide={true}
        submitText="Редактировать"
        linkText="Выйти из аккаунта"
        link="/signin"
      />
    </Dialog>
  )
}

export default Profile