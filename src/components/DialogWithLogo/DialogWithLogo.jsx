import Dialog from "../Dialog/Dialog";
import logoPath from '../../images/logo.svg';
import "./DialogWithLogo.css"
import DialogHeader from "../DialogHeader/DialogHeader";

function DialogWithLogo(props) {
  return (
    <Dialog formClass="dialog__form_normal" onSubmit={props.onSubmit}>
      <img className="dialog__logo" alt="Логотип" src={logoPath}/>
      <DialogHeader header={props.header}/>

      {props.children}
    </Dialog>
  )
}

export default DialogWithLogo