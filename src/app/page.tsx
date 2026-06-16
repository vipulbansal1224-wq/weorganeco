import Link from "next/link";
import fs from "fs/promises";
import path from "path";

export default async function Home() {
  const productsPath = path.join(process.cwd(), "src/data/products.json");
  let productsData: any = { products: [] };
  try {
    const file = await fs.readFile(productsPath, "utf-8");
    productsData = JSON.parse(file);
  } catch(e) {}

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(rgba(44, 94, 59, 0.8), rgba(44, 94, 59, 0.8)), url('/uploads/2022/05/IMG_4100.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "8rem 0",
        color: "#fff",
        textAlign: "center"
      }}>
        <div className="container">
          <h1 style={{ fontSize: "4rem", color: "#fff", marginBottom: "1.5rem" }}>Pure & Organic</h1>
          <p style={{ fontSize: "1.25rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            Experience the true essence of nature with our premium range of organic products, cultivated with care for you and the environment.
          </p>
          <Link href="/products" style={{
            display: "inline-block",
            background: "#8a6c51",
            color: "#fff",
            padding: "1rem 2.5rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            borderRadius: "4px",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}>
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "5rem 0", background: "#fcfbfa" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", textAlign: "center" }}>
          <div style={{ padding: "2rem", background: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>100% Organic</h3>
            <p>Certified organic products grown without harmful chemicals or synthetic pesticides.</p>
          </div>
          <div style={{ padding: "2rem", background: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Eco-Friendly</h3>
            <p>Sustainable farming practices that protect our soil and water for future generations.</p>
          </div>
          <div style={{ padding: "2rem", background: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Premium Quality</h3>
            <p>Carefully selected and processed to ensure the highest nutritional value and taste.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: "5rem 0", background: "#e9f2eb" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "3rem" }}>Featured Products</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {productsData.products.slice(0, 4).map((p: any, i: number) => (
              <div key={i} style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.05)", transition: "transform 0.3s" }}>
                <div style={{ height: "250px", overflow: "hidden", background: "#f4f4f4" }}>
                  <img src={p.img || "/placeholder.png"} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.5rem", textAlign: "center" }}>
                  <h4 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{p.title}</h4>
                  <p style={{ color: "#666", marginBottom: "1.5rem", fontSize: "0.9rem" }}>{p.description}</p>
                  <Link href="/products" style={{ color: "#2c5e3b", fontWeight: "bold", borderBottom: "2px solid #8a6c51", paddingBottom: "0.25rem" }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
