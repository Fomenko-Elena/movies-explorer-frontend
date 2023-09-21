import classNames from 'classnames';
import { LayoutHighlight, LayoutWidthStyle } from '../../utils/constants'
import './Layout.css'

function Layout({
  highlight,
  children,
  widthStyle,
}) {
  return (
    <div className={classNames('layout', {
      'layout_blue': highlight === LayoutHighlight.Blue,
      'layout_gray': highlight === LayoutHighlight.Gray,
      'layout_wider': widthStyle === LayoutWidthStyle.Wider
    })}>
      <div className={classNames('layout__inner', {'layout__inner_wider': widthStyle === LayoutWidthStyle.Wider})}>
        {children}
      </div>
    </div>
  )
}

export default Layout