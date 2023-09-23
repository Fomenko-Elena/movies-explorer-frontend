import Layout from '../Layout/Layout'
import landingLogoPath from '../../images/landing-logo.svg'
import './Promo.css'
import { LayoutHighlight } from '../../utils/constants'

function Promo({
  OnFindMore,
}) {
  function handleFindMoreClick() {
    OnFindMore();
  }

  return (
    <Layout highlight={LayoutHighlight.Blue} component='section'>
      <div className="promo">
        <div className='promo__main'>
          <div className="promo__left-pane">
            <h1 className="promo__header">Учебный проект студента факультета <span className="promo__header_nowrap">Веб-разработки</span>.</h1>
            <p className="promo__info">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
          <div className="promo__right-pane">
            <img className="promo__landing-logo" src={landingLogoPath} alt="Логотип проекта"></img>
          </div>
        </div>
        <button className="promo__about" onClick={handleFindMoreClick}>Узнать больше</button>
      </div>
    </Layout>
  )
}

export default Promo