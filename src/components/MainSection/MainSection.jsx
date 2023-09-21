import classNames from "classnames"
import Layout from "../Layout/Layout"
import "./MainSection.css"

function MainSection({
  forwardedRef,
  header,
  children,
  highlight,
  className
}) {
  return (
    <Layout highlight={highlight}>
      <section ref={forwardedRef} className={classNames('main-section', className)}>
        <h1 className="main-section__header">{header}</h1>
        {children}
      </section>
    </Layout>
  )
}

export default MainSection