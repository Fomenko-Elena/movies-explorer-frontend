import './Layout.css'

function Layout(props) {
  return (
    <div className={props.isHighlighted ? "layout layout_highlighted" : "layout"}>
      <div className='layout-inner'>
        {props.children}
      </div>
    </div>
  )
}

export default Layout