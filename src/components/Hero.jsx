import { motion } from 'framer-motion';
import { LuUtensils, LuArrowRight } from 'react-icons/lu';
import PhotoSlot from './PhotoSlot';
import './Hero.css';
import wingImg from '../assets/wing.png';
import burgerImg from '../assets/burger.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__ember-glow" aria-hidden="true" />

      <motion.div
        className="hero__wing hero__wing--left"
        initial={{ opacity: 0, y: 30, rotate: -8 }}
        animate={{
          opacity: 1,
          y: [0, -18, 0],
          rotate: [-8, -4, -8],
        }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <PhotoSlot src={wingImg} alt="Crispy wing" label="wing-left.png" />
      </motion.div>

      <motion.div
        className="hero__wing hero__wing--right"
        initial={{ opacity: 0, y: 30, rotate: 10 }}
        animate={{
          opacity: 1,
          y: [0, -14, 0],
          rotate: [10, 5, 10],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.15 },
          y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
          rotate: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
        }}
      >
        <PhotoSlot src={wingImg} alt="Saucy wing" label="wing-right.png" />
      </motion.div>

      <div className="hero__content">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Restaurant · Grill · Burgers
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Your food addiction
          <br />
          <span className="hero__title-accent">starts here.</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Flame-grilled burgers, hand-tossed wings, and sauces we're a little too
          proud of. Made fresh, served bold, built to be devoured.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link to="/menu" className="btn btn--primary">
            <LuUtensils />
            Explore Our Menu
            <LuArrowRight className="btn__arrow" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="hero__scroll-line" />
        Scroll
      </motion.div>
    </section>
  );
}
