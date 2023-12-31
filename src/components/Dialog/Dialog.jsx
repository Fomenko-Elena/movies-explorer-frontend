import classNames from "classnames"
import Layout from "../Layout/Layout"
import "./Dialog.css"

function Dialog({
  formClass,
  onSubmit,
  children
}) {
  return (
    <Layout>
      <section className="dialog">
        <form className={classNames('dialog__form', formClass)} name="dialog_form" onSubmit={onSubmit}>
          {children}
        </form>
      </section>
    </Layout>
  )
}

export default Dialog