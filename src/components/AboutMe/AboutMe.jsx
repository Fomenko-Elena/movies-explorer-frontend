import './AboutMe.css'
import photoPath from "../../images/IMG_3928.jpg"
import MainSection from "../MainSection/MainSection"

function AboutMe() {
  return (
    <MainSection header="Студент">
      <div className="about__user">
        <div class="about__text">
          <h2 className="about__user-name">Елена</h2>
          <h3 className="about__user-job">Фронтенд-разработчик, 36 лет.</h3>
          <p className="about__user-info">Я родилсась и живу в Санкт-Петербурге, закончила факультет экономики СГУ. У меня есть муж и двое детей. Я всегда была увлечена новыми технологиями и быстрыми темпами развития сферы IT. Прошла курс по веб-разработке, чтобы быть в курсе последних тенденций и технологий.</p>

          <a className="about__github-item" href="https://github.com/Fomenko-Elena">Github</a>

        </div>

        <div class="about__avatar">
          <img class="about__avatar-foto" src={photoPath} alt="Фото">
          </img>
        </div>
      </div>
    </MainSection>
  )
}

export default AboutMe