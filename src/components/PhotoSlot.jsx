import { useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';
import './PhotoSlot.css';

export default function PhotoSlot({ src, alt, label, className = '' }) {
  const [errored, setErrored] = useState(false);

  if (src && !errored) {
    return (
      <img
        src={src}
        alt={alt}
        className={`photo-slot__img ${className}`}
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    <div className={`photo-slot__placeholder ${className}`} role="img" aria-label={alt}>
      <LuImagePlus />
      <span>{label}</span>
    </div>
  );
}