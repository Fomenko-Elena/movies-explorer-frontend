import Layout from '../Layout/Layout'
import landingLogoPath from '../../images/landing-logo.svg'
import './Promo.css'

function Promo(props) {
  return (
    <Layout isHighlighted={true}>
      <section className="promo">
        <div className="promo__left-pane">
          <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__info">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <div className="promo__right-pane">
          <img className="promo__landing-logo" src={landingLogoPath} alt="Логотип проекта"></img>
        </div>
      </section>
    </Layout>
  )
}

export default Promo