import classNames from "classnames"
import "./Inputs.css"

function Inputs({ wide, children }) {
  return (
    <div className={classNames('inputs', { 'inputs_wide': wide })}>
      {children}
    </div>
  )
}

export default Inputs