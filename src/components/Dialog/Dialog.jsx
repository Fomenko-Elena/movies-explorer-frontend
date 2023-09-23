import classNames from "classnames"
import Layout from "../Layout/Layout"
import "./Dialog.css"

function Dialog({
  formClass,
  onSubmit,
  children
}) {
  return (
    <Layout component="secion">
      <div className="dialog">
        <form className={classNames('dialog__form', formClass)} name="dialog_form" onSubmit={onSubmit} noValidate>
          {children}
        </form>
      </div>
    </Layout>
  )
}

export default Dialog