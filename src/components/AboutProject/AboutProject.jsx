import Layout from "../Layout/Layout"
import './AboutProject.css'

function AboutProject(props) {
  return (
    <Layout>
      <section className='about-project'>
        
        <div className="about-project__header">
          <h1 className="about-project__header-item">О проекте</h1>
        </div>

        <div className="about-project__table">
          <div className="about-project__columns">
            <h2 className="about-project__columns-header">Дипломный проект включал 5 этапов</h2>
            <p className="about-project__columns-info">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>

          <div className="about-project__columns">
            <h3 className="about-project__columns-header">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__columns-info">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>

        <div className="about-project__table-two">
          <div className="about-project__block-right">
            <p className="about-project__block-one">1 неделя</p>
            <p className="about-project__block-info">Back-end</p>
          </div>

          <div className="about-project__block-left">
            <p className="about-project__block-two">4 недели</p>
            <p className="about-project__block-info">Front-end</p>
          </div>
        </div>

      </section>
    </Layout>
  )
}

export default AboutProject


