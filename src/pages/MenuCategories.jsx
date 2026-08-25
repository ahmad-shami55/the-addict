import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/menuData';
import PhotoSlot from '../components/PhotoSlot';
import './MenuCategories.css';

export default function MenuCategories() {
  return (
    <div className="menu-categories">
      <div className="menu-categories__header">
        <span className="eyebrow">The Full Lineup</span>
        <h1 className="menu-categories__title">
          Dine-In <span className="hero__title-accent">Categories</span>
        </h1>
      </div>

      <div className="menu-categories__grid">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <Link to={`/menu/${cat.slug}`} className="menu-cat-card">
              <div className="menu-cat-card__img">
                <PhotoSlot src={cat.image} alt={cat.name} label={`${cat.slug}.jpg`} />
              </div>
              <span className="menu-cat-card__label">{cat.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}