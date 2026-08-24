import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhotoSlot from './PhotoSlot';
import './ScrollBurger.css';
import burgerImg from '../assets/burger.png';

export default function ScrollBurger() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Burger rises + scales in during the first half of the scroll range,
  // holds, then fades out as the About section is about to take over.
  const y = useTransform(scrollYProgress, [0, 0.35], ['55vh', '0vh']);
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.72, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.35, 0.7], [10, -3, -3]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.62, 0.85],
    [0, 1, 1, 0]
  );

  const captionOpacity = useTransform(scrollYProgress, [0.15, 0.3, 0.6, 0.8], [0, 1, 1, 0]);
  const captionY = useTransform(scrollYProgress, [0.15, 0.3], [24, 0]);

  return (
    <section className="scroll-burger" ref={targetRef}>
      <div className="scroll-burger__sticky">
        <motion.p className="scroll-burger__caption eyebrow" style={{ opacity: captionOpacity, y: captionY }}>
          The Signature Stack
        </motion.p>

        <motion.div
          className="scroll-burger__image"
          style={{ y, scale, rotate, opacity }}
        >
          <PhotoSlot src={burgerImg} alt="The Addict signature burger" label="signature-burger.png" />
        </motion.div>

        <motion.h2
          className="scroll-burger__title"
          style={{ opacity: captionOpacity, y: captionY }}
        >
          Stacked. Sauced. <span className="hero__title-accent">Sinful.</span>
        </motion.h2>
      </div>
    </section>
  );
}
