import { LuFlame, LuInstagram, LuMapPin, LuPhone } from 'react-icons/lu';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo-mark">
            <LuFlame />
          </span>
          <span className="navbar__logo-text">
            THE <span>ADDICT</span>
          </span>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#menu">Menu</a>
          <a href="#location">Location</a>
          <a href="#top">Back to top</a>
        </nav>

        <div className="footer__contact">
          <span>
            <LuMapPin /> Location coming soon
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
