import classNames from 'classnames';
import { LayoutHighlight } from '../../utils/constants'
import './Layout.css'

function Layout({
  highlight,
  children,
}) {
  return (
    <div className={classNames('layout', {
      'layout_blue': highlight === LayoutHighlight.Blue,
      'layout_gray': highlight === LayoutHighlight.Gray,
    })}>
      <div className='layout-inner'>
        {children}
      </div>
    </div>
  )
}

export default Layout