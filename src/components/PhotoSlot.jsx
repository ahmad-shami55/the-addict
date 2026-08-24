import { LuImagePlus } from 'react-icons/lu';
import './PhotoSlot.css';

/**
 * PhotoSlot renders a real photo if `src` is provided (and loads correctly),
 * otherwise it falls back to a styled placeholder so the layout still looks
 * intentional before real photography is dropped in.
 *
 * To use your own photo: put a transparent-background PNG/WEBP cutout in
 * src/assets (e.g. src/assets/wing.png) and pass it in as `src`.
 */
export default function PhotoSlot({ src, alt, label, className = '' }) {
  if (src) {
    return <img src={src} alt={alt} className={`photo-slot__img ${className}`} />;
  }

  return (
    <div className={`photo-slot__placeholder ${className}`} role="img" aria-label={alt}>
      <LuImagePlus />
      <span>{label}</span>
    </div>
  );
}
