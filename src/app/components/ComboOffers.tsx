'use client';
import React from 'react';
import styles from './ComboOffers.module.css';

const offers = [
  {
    id: 1,
    title: 'Immunity Booster Combo',
    subtitle: 'Pure Honey & Moringa Noodles',
    discount: 'Flat 20% OFF',
    img: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&q=80',
    color: '#E6F4EA'
  },
  {
    id: 2,
    title: 'Traditional Grains Pack',
    subtitle: 'Millet Noodles & Black Rice',
    discount: 'Buy 2 Get 1 Free',
    img: 'https://images.unsplash.com/photo-1590137785360-0322247fbdb3?w=800&q=80',
    color: '#FEF3C7'
  }
];

export default function ComboOffers() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Exclusive Combos</h2>
          <p className={styles.subtitle}>Curated specifically for your health and taste</p>
        </div>
        
        <div className={styles.grid}>
          {offers.map((offer) => (
            <div key={offer.id} className={styles.card} style={{ backgroundColor: offer.color }}>
              <div className={styles.content}>
                <span className={styles.badge}>{offer.discount}</span>
                <h3 className={styles.offerTitle}>{offer.title}</h3>
                <p className={styles.offerSubtitle}>{offer.subtitle}</p>
                <button className={styles.shopBtn}>Shop Now</button>
              </div>
              <div className={styles.imageWrapper}>
                <img 
                  src={offer.img} 
                  alt={offer.title} 
                  className={styles.image}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

