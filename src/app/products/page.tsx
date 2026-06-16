import fs from "fs/promises";
import path from "path";

export default async function ProductsPage() {
  const productsPath = path.join(process.cwd(), "src/data/products.json");
  let productsData: any = { products: [], categories: [] };
  try {
    const file = await fs.readFile(productsPath, "utf-8");
    productsData = JSON.parse(file);
  } catch(e) {}

  return (
    <main>
      <div className="page-banner">
        <h1>Our Organic Products</h1>
      </div>

      <div className="container" style={{ padding: "4rem 2rem", minHeight: "50vh" }}>
        
        {productsData.categories.map((cat: any) => {
          const categoryProducts = productsData.products.filter((p: any) => p.categorySlug === cat.slug);
          
          if (categoryProducts.length === 0) return null;

          return (
            <div key={cat.slug} style={{ marginBottom: "4rem" }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "2rem", borderBottom: "2px solid #e9f2eb", paddingBottom: "1rem" }}>{cat.title}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2rem" }}>
                {categoryProducts.map((p: any, i: number) => (
                  <div key={i} style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.05)", border: "1px solid #f0f0f0" }}>
                    <div style={{ height: "250px", overflow: "hidden", background: "#f9f9f9", display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                      <img src={p.img || "/placeholder.png"} alt={p.title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </div>
                    <div style={{ padding: "1.5rem", textAlign: "center" }}>
                      <h4 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{p.title}</h4>
                      <p style={{ color: "#666", fontSize: "0.9rem" }}>{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </main>
  );
}
