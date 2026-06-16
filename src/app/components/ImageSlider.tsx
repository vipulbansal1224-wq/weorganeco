'use client';
import { useState, useEffect } from 'react';
import styles from './ImageSlider.module.css';

const sliderImages = [
  '/wp-content/uploads/2022/05/all-product.-2.jpg',
  '/wp-content/uploads/2022/05/IMG_4100.jpg',
  '/wp-content/uploads/2022/06/2.png',
  '/wp-content/uploads/2022/05/IMG_2528.jpg'
];

export default function ImageSlider({ images }: { images?: string[] }) {
  const finalImages = images && images.length > 0 ? images : sliderImages;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % finalImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {finalImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        />
      ))}
      <div className={styles.dots}>
        {finalImages.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
