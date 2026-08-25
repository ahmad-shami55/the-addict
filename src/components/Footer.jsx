import { Link } from 'react-router-dom';
import { LuInstagram, LuMapPin, LuPhone } from 'react-icons/lu';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/" className="footer__brand">
          <img src={logo} alt="The Addict" className="navbar__logo-img" />
          <span className="navbar__logo-text">
            THE <span>ADDICT</span>
          </span>
        </Link>

        <nav className="footer__links" aria-label="Footer">
          <Link to="/menu">Menu</Link>
          <Link to="/">Back to top</Link>
        </nav>

        <div className="footer__contact">
          <span>
            <LuMapPin /> Nabatieh, Lebanon
          </span>
          <span>
            <LuPhone /> +961 00 000 000
          </span>
          <a href="#" aria-label="Instagram">
            <LuInstagram />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} The Addict. All rights reserved.</span>
      </div>
    </footer>
  );
}