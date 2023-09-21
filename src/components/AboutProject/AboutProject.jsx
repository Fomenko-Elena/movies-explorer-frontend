import MainSection from "../MainSection/MainSection"
import './AboutProject.css'

function AboutProject({
  forwardedRef,
}) {
  return (
    <MainSection forwardedRef={forwardedRef} header="О проекте">
      <div className="about-project__table">
        <div className="about-project__column">
          <h2 className="about-project__column-header">Дипломный проект включал 5 этапов</h2>
          <p className="about-project__column-info">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>

        <div className="about-project__column">
          <h2 className="about-project__column-header">На выполнение диплома ушло 5 недель</h2>
          <p className="about-project__column-info">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>

      <div className="about-project__table-two">
        <div className="about-project__block-left">
          <p className="about-project__block-one">1 неделя</p>
          <p className="about-project__block-info">Back-end</p>
        </div>

        <div className="about-project__block-right">
          <p className="about-project__block-two">4 недели</p>
          <p className="about-project__block-info">Front-end</p>
        </div>
      </div>
    </MainSection>
  )
}

export default AboutProject


