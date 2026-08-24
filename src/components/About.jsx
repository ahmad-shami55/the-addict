import { motion } from 'framer-motion';
import { LuFlame } from 'react-icons/lu';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about__mark"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <LuFlame />
      </motion.div>

      <motion.span
        className="eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Story
      </motion.span>

      <motion.h2
        className="about__title gradient-text"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        Built on an obsession with flavor
      </motion.h2>

      <motion.p
        className="about__text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        The Addict started with one simple rule: if it doesn't make you crave the
        next bite, it doesn't leave the kitchen. Every burger is stacked by hand,
        every wing is tossed to order, and every sauce is built from scratch —
        no shortcuts, no compromises. What began as a small grill with a big
        appetite for flavor has grown into a name people crave by. This isn't
        just food. It's the reason you keep coming back.
      </motion.p>

      <motion.div
        className="about__stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="about__stat">
          <span className="about__stat-num">100%</span>
          <span className="about__stat-label">Made Fresh Daily</span>
        </div>
        <div className="about__stat">
          <span className="about__stat-num">0</span>
          <span className="about__stat-label">Shortcuts Taken</span>
        </div>
        <div className="about__stat">
          <span className="about__stat-num">∞</span>
          <span className="about__stat-label">Cravings Satisfied</span>
        </div>
      </motion.div>
    </section>
  );
}
