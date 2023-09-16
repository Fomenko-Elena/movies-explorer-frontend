import { useContext } from "react"
import { WindowSizeContext } from "../../contexts/WindowSizeContext"
import { LayoutHighlight } from "../../utils/constants"
import MainSection from "../MainSection/MainSection"
import './Techs.css'


function Techs() {
  const windowSizeContext = useContext(WindowSizeContext)

  function isTight() {
    return windowSizeContext.width <= 630;
  }

  return (
    <MainSection header="Технологии" highlight={isTight() ? LayoutHighlight.Default : LayoutHighlight.Gray} className="techs">
      <div className="techs__item">
        <h2 className="techs__item-header">7 технологий</h2>
        <p className="techs__item-info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>

      <ul className="techs__table">
        <li className="techs__table-block">
          <p className="techs__table-text">HTML</p>
        </li>
        <li className="techs__table-block">
          <p className="techs__table-text">CSS</p>
        </li>
        <li className="techs__table-block">
          <p className="techs__table-text">JS</p>
        </li>
        <li className="techs__table-block">
          <p className="techs__table-text">React</p>
        </li>
        <li className="techs__table-block">
          <p className="techs__table-text">Git</p>
        </li>
        <li className="techs__table-block">
          <p className="techs__table-text">Express.js</p>
        </li>
        <li className="techs__table-block">
          <p className="techs__table-text">mongoDB</p>
        </li>
      </ul>
    </MainSection>
  )
}

export default Techs