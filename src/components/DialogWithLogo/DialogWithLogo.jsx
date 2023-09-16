import Dialog from "../Dialog/Dialog";
import "./DialogWithLogo.css"
import DialogHeader from "../DialogHeader/DialogHeader";
import Logo from "../Logo/Logo";

function DialogWithLogo({
  onSubmit,
  header,
  children,
}) {
  return (
    <Dialog formClass="dialog__form_normal" onSubmit={onSubmit}>
      <Logo className="dialog__logo"/>
      <DialogHeader header={header}/>
      {children}
    </Dialog>
  )
}

export default DialogWithLogo