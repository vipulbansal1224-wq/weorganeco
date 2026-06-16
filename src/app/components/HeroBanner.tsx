import Link from 'next/link';
import ImageSlider from './ImageSlider';
import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Pure <span className={styles.highlight}>Organic Foods</span> for a Healthy Life
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-100`}>
            Discover our exclusive collection of sustainably grown organic foods. Taste the purity in every bite.
          </p>
          <div className={`${styles.actions} animate-fade-in delay-200`}>
            <Link href="/shop" className={styles.primaryBtn}>
              Shop Now
            </Link>
            <Link href="/about" className={styles.secondaryBtn}>
              Our Story
            </Link>
          </div>
        </div>
        <div className={`${styles.imageWrapper} animate-fade-in delay-300`}>
          <ImageSlider />
          <div className={styles.floatingCard}>
            <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
            <p>"The freshest organic products I've ever bought!"</p>
          </div>
        </div>
      </div>
      
      {/* Decorative blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
    </div>
  );
}
