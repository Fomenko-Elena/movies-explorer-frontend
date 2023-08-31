import Dialog from "../Dialog/Dialog";
import logoPath from '../../images/logo.svg';
import "./DialogWithLogo.css"

function DialogWithLogo(props) {
  return (
    <Dialog formClass="dialog__form_normal" onSubmit={props.onSubmit}>
      <img className="dialog__logo" alt="Логотип" src={logoPath}/>
      <h1 className="dialog__header">{props.header}</h1>
      {props.children}
    </Dialog>
  )
}

export default DialogWithLogo