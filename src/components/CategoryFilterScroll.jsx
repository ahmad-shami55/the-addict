import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { categories } from '../data/menuData';
import './CategoryFilterScroll.css';

export default function CategoryFilterScroll({ activeSlug }) {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 220, behavior: 'smooth' });
  };

  return (
    <div className="cat-filter">
      <button className="cat-filter__arrow" onClick={() => scrollBy(-1)} aria-label="Scroll categories left">
        <LuChevronLeft />
      </button>

      <div className="cat-filter__track" ref={trackRef}>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/menu/${cat.slug}`}
            className={`cat-filter__pill ${cat.slug === activeSlug ? 'cat-filter__pill--active' : ''}`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <button className="cat-filter__arrow" onClick={() => scrollBy(1)} aria-label="Scroll categories right">
        <LuChevronRight />
      </button>
    </div>
  );
}