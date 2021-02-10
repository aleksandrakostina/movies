import './Footer.css';
import { ReactComponent as Github } from './../../assets/images/github.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer__wrapper">
        <h3 className="footer__copyright">© Alex, 2021</h3>
        <div className="footer__links">
          <a className="footer__link" href="https://github.com/aleksandrakostina">
            <Github className="github"/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;