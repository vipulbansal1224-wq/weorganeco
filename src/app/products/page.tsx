import fs from "fs/promises";
import path from "path";
import ProductCard from "../components/ProductCard";
import styles from "../page.module.css";

export default async function ProductsPage() {
  const productsPath = path.join(process.cwd(), "src/data/products.json");
  let productsData: any = { products: [], categories: [] };
  try {
    const file = await fs.readFile(productsPath, "utf-8");
    productsData = JSON.parse(file);
  } catch(e) {}

  return (
    <main style={{ background: '#FAFAF9', minHeight: '100vh', paddingTop: '140px' }}>
      <div className={styles.container}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '800', color: 'var(--foreground)' }}>Our Organic Shop</h1>
          <p style={{ fontSize: '18px', color: '#4a5568', marginTop: '10px' }}>Browse our complete selection of premium, hand-picked organic products.</p>
        </div>

        {(Array.from(new Set((productsData.products || []).map((p: any) => p.categoryTitle))) as string[]).map((cat: any) => {
          const categoryProducts = productsData.products.filter((p: any) => p.categoryTitle === cat);
          
          if (categoryProducts.length === 0) return null;

          return (
            <div key={cat} style={{ marginBottom: "60px" }}>
              <h2 style={{ fontSize: "28px", fontWeight: '700', marginBottom: "24px", color: 'var(--secondary)' }}>{cat}</h2>
              <div className={styles.grid}>
                {categoryProducts.map((p: any, i: number) => (
                  <ProductCard key={i} product={p} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
