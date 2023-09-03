import { LayoutHighlight } from '../../utils/constants'
import './Layout.css'

function Layout(props) {
  function getHighlightClassName() {
    switch(props.highlight) {
      case LayoutHighlight.Blue: return "layout layout_blue";
      default: return "layout";
    }
  }

  return (
    <div className={getHighlightClassName()}>
      <div className='layout-inner'>
        {props.children}
      </div>
    </div>
  )
}

export default Layout