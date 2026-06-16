import styles from './ProductCard.module.css';
import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className={styles.card}>
      <Link href={`/product/${product.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <img 
            src={product.img || '/placeholder.png'} 
            alt={product.title} 
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.overlay}>
            <span className={styles.quickView}>Quick View</span>
          </div>
        </div>
      </Link>
      
      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>
        <Link href={`/product/${product.slug}`}>
          <h3 className={styles.title}>{product.title}</h3>
        </Link>
        <div className={styles.bottomRow}>
          <span className={styles.price}>₹{product.price}</span>
          <button className={styles.addToCart} aria-label="Add to Cart">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
