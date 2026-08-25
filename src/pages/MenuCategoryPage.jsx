import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuFlame } from 'react-icons/lu';
import { getCategoryBySlug } from '../data/menuData';
import PhotoSlot from '../components/PhotoSlot';
import CategoryFilterScroll from '../components/CategoryFilterScroll';
import './MenuCategoryPage.css';

export default function MenuCategoryPage() {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return <Navigate to="/menu" replace />;
  }

  return (
    <div className="category-page">
      <div className="category-page__header">
        <span className="eyebrow">Menu</span>
        <h1 className="category-page__title">{category.name}</h1>
      </div>

      <CategoryFilterScroll activeSlug={category.slug} />

      <div className="category-page__grid">
        {category.products.map((product, i) => (
          <motion.div
            key={product.slug}
            className="product-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="product-card__img">
              <PhotoSlot
                src={product.image}
                alt={product.name}
                label={`${category.slug}/${product.slug}.jpg`}
              />
            </div>

            <div className="product-card__body">
              <h3 className="product-card__name">{product.name}</h3>
              <span className="product-card__price">${product.price.toFixed(2)}</span>
              <p className="product-card__desc">{product.description}</p>
              {product.spicy && (
                <span className="product-card__spicy">
                  <LuFlame /> Spicy
                </span>
              )}
              <button type="button" className="product-card__addon">
                Add-ons
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}