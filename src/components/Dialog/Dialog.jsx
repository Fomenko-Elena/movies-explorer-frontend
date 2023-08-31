import Layout from "../Layout/Layout"

function Dialog(props) {
  return (
    <Layout>
      <section className="dialog">
        <form className="dialog__form" name="dialog_form" noValidate onSubmit={props.onSubmit}>
          <h1 className="dialog__header">{props.header}</h1>
          {props.children}
        </form>
      </section>
    </Layout>
  )
}

export default Dialog