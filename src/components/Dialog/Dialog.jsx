import Layout from "../Layout/Layout"
import "./Dialog.css"

function Dialog(props) {
  return (
    <Layout>
      <section className="dialog">
        <form className={`dialog__form ${props.formClass}`} name="dialog_form" onSubmit={props.onSubmit}>
          {props.children}
        </form>
      </section>
    </Layout>
  )
}

export default Dialog