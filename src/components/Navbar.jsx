import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LuUtensils, LuMapPin, LuMenu, LuX } from 'react-icons/lu';
import logo from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const locationRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (locationRef.current && !locationRef.current.contains(e.target)) {
        setLocationOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner">
        <Link className="navbar__logo" to="/" aria-label="The Addict, home">
          <img src={logo} alt="The Addict" className="navbar__logo-img" />
          <span className="navbar__logo-text">
            THE <span>ADDICT</span>
          </span>
        </Link>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          <Link to="/menu" className="navbar__link">
            <LuUtensils />
            Menu
          </Link>

          <div className="navbar__location" ref={locationRef}>
            <button
              type="button"
              className="navbar__link navbar__link--btn"
              onClick={() => setLocationOpen((v) => !v)}
              aria-expanded={locationOpen}
            >
              <LuMapPin />
              Location
            </button>

            <AnimatePresence>
              {locationOpen && (
                <motion.div
                  className="navbar__location-pop"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  <LuMapPin className="navbar__location-icon" />
                  <span>Nabatieh, Lebanon</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
          <Link to="/menu" className="navbar__link" onClick={() => setOpen(false)}>
            <LuUtensils />
            Menu
          </Link>

          <button
            type="button"
            className="navbar__link navbar__link--btn"
            onClick={() => setLocationOpen((v) => !v)}
            aria-expanded={locationOpen}
          >
            <LuMapPin />
            Location
          </button>

          {locationOpen && (
            <div className="navbar__location-pop navbar__location-pop--inline">
              <LuMapPin className="navbar__location-icon" />
              <span>Nabatieh, Lebanon</span>
            </div>
          )}
        </motion.nav>
      )}
    </motion.header>
  );
}