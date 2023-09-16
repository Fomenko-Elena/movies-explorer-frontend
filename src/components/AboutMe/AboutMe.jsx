import photoPath from "../../images/IMG_3928.jpg"
import MainSection from "../MainSection/MainSection"
import './AboutMe.css'

function AboutMe() {
  return (
    <MainSection header="Студент" className="about">
      <div className="about__user">
        <div className="about__text">
          <h2 className="about__user-name">Елена</h2>
          <h3 className="about__user-job">Фронтенд-разработчик, 36 лет.</h3>
          <p className="about__user-info">Я родилсась и живу в Санкт-Петербурге, закончила факультет экономики СГУ. У меня есть муж и двое детей. Я всегда была увлечена новыми технологиями и быстрыми темпами развития сферы IT. Прошла курс по веб-разработке, чтобы быть в курсе последних тенденций и технологий.</p>
          <a className="about__github-item" href="https://github.com/Fomenko-Elena" target="_blank" rel="noreferrer">Github</a>
        </div>

        <div className="about__avatar">
          <img className="about__avatar-foto" src={photoPath} alt="Фото" />
        </div>
      </div>
    </MainSection>
  )
}

export default AboutMe