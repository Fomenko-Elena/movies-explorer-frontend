import Dialog from "../Dialog/Dialog";
import "./DialogWithLogo.css"
import DialogHeader from "../DialogHeader/DialogHeader";
import Logo from "../Logo/Logo";

function DialogWithLogo(props) {
  return (
    <Dialog formClass="dialog__form_normal" onSubmit={props.onSubmit}>
      <Logo/>
      <DialogHeader header={props.header}/>

      {props.children}
    </Dialog>
  )
}

export default DialogWithLogo