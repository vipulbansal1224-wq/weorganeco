import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
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
  const featuredProducts = productsData.products.slice(0, 4);

  return (
    <main className={styles.main}>
      
      <HeroBanner />
      
      {/* WordPress Content Section */}
      <section className={styles.section} style={{ background: '#fdfbfb' }}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingBottom: '40px' }}>
            <h2 className={styles.sectionTitle}>Premium Quality Organic Foods</h2>
            <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.8', marginBottom: '24px' }}>
              Our product line includes different quality grades of organic pulses, rice, flours, and sugar. We also specialize in premium quality traditional spices and healthy eating choices.
            </p>
            <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.8' }}>
              We strongly believe in Organic Farming. We want to bring Organic to each and every table across the world and hence started this journey with exporting high quality organic foods to other countries from India.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginTop: '40px' }}>
            <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
              <img src="/wp-content/uploads/2022/05/rice-2.png" alt="Rice" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '16px' }}>Organic Rice</h3>
              <p style={{ color: '#4a5568' }}>Authentic organic rice, farmed locally. Boasting premium quality and pure taste.</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
              <img src="/wp-content/uploads/2022/05/pulses.png" alt="Pulses" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '16px' }}>Organic Pulses</h3>
              <p style={{ color: '#4a5568' }}>Rich, naturally grown pulses packed with nutrition for a healthy lifestyle.</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
              <img src="/wp-content/uploads/2022/05/flours.png" alt="Flours" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '16px' }}>Organic Flours</h3>
              <p style={{ color: '#4a5568' }}>Freshly milled, premium quality organic flours for your daily baking and cooking.</p>
            </div>
          </div>
        </div>
      </section>

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
