import Layout from "../Layout/Layout";
import './Footer.css'



function Footer() {
  return (
    <Layout>
      <footer className="footer">

        <div className="footer__item">
          <p className="footer__item-info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        </div>

        <ul className="footer__links">
          <li className="footer__column footer__column_copyright">
            <p className="footer__copyright-text">© 2023</p>
          </li>
          <li className="footer__column">
            <a className="footer__column-links" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
          </li>
          <li className="footer__column">
            <a className="footer__column-links" href="https://github.com">Github</a>
          </li>
        </ul>
      </footer>
    </Layout>
  );
}

export default Footer;