import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LuFlame, LuUtensils, LuMapPin, LuMenu, LuX } from 'react-icons/lu';
import './Navbar.css';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Menu', href: '#menu', icon: <LuUtensils /> },
    { label: 'Location', href: '#location', icon: <LuMapPin /> },
  ];

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner">
        <a className="navbar__logo" href="#top" aria-label="The Addict, home">
          <span className="navbar__logo-mark">
            <LuFlame />
          </span>
          <span className="navbar__logo-text">
            THE <span>ADDICT</span>
          </span>
        </a>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.icon}
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <LuX /> : <LuMenu />}
        </button>
      </div>

      {open && (
        <motion.nav
          className="navbar__links navbar__links--mobile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          aria-label="Primary mobile"
        >
          {links.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link" onClick={() => setOpen(false)}>
              {link.icon}
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
