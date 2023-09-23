import classNames from 'classnames';
import { LayoutHighlight, LayoutWidthStyle } from '../../utils/constants'
import './Layout.css'

function Layout({
  component: Component = 'div',
  highlight,
  children,
  widthStyle,
  className,
}) {
  return (
    <Component className={classNames('layout',
    {
      'layout_blue': highlight === LayoutHighlight.Blue,
      'layout_gray': highlight === LayoutHighlight.Gray,
      'layout_wider': widthStyle === LayoutWidthStyle.Wider,
      [`layout_${className}`]: className,
    })}>
      <div className={classNames('layout__inner', 
        {
          'layout__inner_wider': widthStyle === LayoutWidthStyle.Wider,
          [`layout__inner_${className}`]: className,
        })}>
        {children}
      </div>
    </Component>
  )
}

export default Layout