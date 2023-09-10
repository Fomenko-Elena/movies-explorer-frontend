import { LayoutHighlight } from "../../utils/constants"
import MainSection from "../MainSection/MainSection"
import './Techs.css'


function Techs() {
  return (
    <MainSection header="Технологии" highlight={LayoutHighlight.Gray}>
      <div className="techs__item">
        <h2 className="techs__item-header">7 технологий</h2>
        <p className="techs__item-info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>

      <ul class="techs__table">
        <li class="techs__table-block">
          <p class="techs__table-text">HTML</p>
        </li>
        <li class="techs__table-block">
          <p class="techs__table-text">CSS</p>
        </li>
        <li class="techs__table-block">
          <p class="techs__table-text">JS</p>
        </li>
        <li class="techs__table-block">
          <p class="techs__table-text">React</p>
        </li>
        <li class="techs__table-block">
          <p class="techs__table-text">Git</p>
        </li>
        <li class="techs__table-block">
          <p class="techs__table-text">Express.js</p>
        </li>
        <li class="techs__table-block">
          <p class="techs__table-text">mongoDB</p>
        </li>
      </ul>
    </MainSection>
  )
}

export default Techs