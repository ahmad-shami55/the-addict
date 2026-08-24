import { motion } from 'framer-motion';
import './PlaceholderSection.css';

/**
 * Empty-state section used for Menu and Location until real content is ready.
 */
export default function PlaceholderSection({ id, title, note }) {
  return (
    <section className="placeholder-section" id={id}>
      <motion.div
        className="placeholder-section__inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Coming Soon</span>
        <h2 className="placeholder-section__title gradient-text">{title}</h2>
        <p className="placeholder-section__note">{note}</p>
      </motion.div>
    </section>
  );
}
