import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import CategoryIcons from './components/CategoryIcons';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import styles from './page.module.css';
import fs from "fs/promises";
import path from "path";

export default async function Home() {
  const productsPath = path.join(process.cwd(), "src/data/products.json");
  let productsData: any = { products: [] };
  try {
    const file = await fs.readFile(productsPath, "utf-8");
    productsData = JSON.parse(file);
  } catch(e) {}

  // Only show the first 4 products on the home page as requested
  const featuredProducts = productsData.products.slice(0, 8);

  return (
    <main className={styles.main}>
      
      <HeroBanner />
      
      <CategoryIcons />
      <Certifications />
      <Testimonials />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Products</h2>
            <p className={styles.sectionSubtitle}>Handpicked premium quality organic foods</p>
          </div>
          
          <div className={styles.grid}>
            {featuredProducts.map((product: any, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
             <a href="/products" style={{ display: 'inline-block', padding: '12px 32px', background: 'var(--primary)', color: 'white', borderRadius: '99px', fontWeight: 'bold' }}>View All Products</a>
          </div>
        </div>
      </section>

    </main>
  );
}
