import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  const productsPath = path.join(process.cwd(), "src/data/products.json");
  let productsData: any = { products: [] };
  try {
    const file = await fs.readFile(productsPath, "utf-8");
    productsData = JSON.parse(file);
  } catch(e) {}

  const categories = [
    { title: "Rice", img: "/wp-content/uploads/2022/05/rice-2.png", link: "/products/rice" },
    { title: "Pulses", img: "/wp-content/uploads/2022/05/pulses.png", link: "/products/pulses" },
    { title: "Flours", img: "/wp-content/uploads/2022/05/flours.png", link: "/products/flours" },
    { title: "Sugar", img: "/wp-content/uploads/2022/05/sugar.png", link: "/products/sugar" },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '80vh' }}>
        <img 
          src="/wp-content/uploads/2022/05/IMG_4100.jpg" 
          alt="WeOrganeco" 
          className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center h-[80vh]">
          {/* Using custom fonts or basic tailwind classes for the aesthetic */}
        </div>
      </section>

      {/* Movement Section - 3 Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2c5e3b] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Join The Organeco Movement!</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              We must make organic the conventional choice and not the exception available only to the rich and educated.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img src="/wp-content/uploads/2022/05/300x300-96-dpi-1.jpg" alt="Organic farming 1" className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img src="/wp-content/uploads/2022/05/300x300-96-dpi-2.jpg" alt="Organic farming 2" className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <img src="/wp-content/uploads/2022/05/300x300-96-dpi-3.jpg" alt="Organic farming 3" className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Icons */}
      <section className="py-16 bg-[#fcfbfa]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {categories.map((cat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse cursor-pointer transition-all duration-300">
                  <img src={cat.img} alt={cat.title} className="w-16 h-16 object-contain" />
                </div>
                <Link href={cat.link} className="inline-block px-8 py-2 border-2 border-[#2c5e3b] text-[#2c5e3b] font-bold uppercase tracking-wider rounded-full hover:bg-[#2c5e3b] hover:text-white transition-colors">
                  {cat.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Block */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="/wp-content/uploads/2022/06/2.png" alt="About WeOrganeco" className="w-full max-w-md mx-auto" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-[#2c5e3b] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>WE ARE <span className="text-[#8a6c51]">ORGANECO</span></h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Organeco is formed by a group of individuals who strongly believe in Organic Farming. We want to bring Organic to each and every table across the world and hence started this journey with exporting high quality organic foods to other countries from India.
              </p>
              <Link href="/about-us" className="inline-flex px-8 py-3 bg-[#2c5e3b] text-white font-bold uppercase rounded hover:bg-[#1a3d25] transition-colors">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2c5e3b] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Products</h2>
            <div className="w-24 h-1 bg-[#8a6c51] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.products.slice(0, 8).map((p: any, i: number) => (
              <div key={i} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col text-center">
                <div className="relative h-[300px] overflow-hidden flex items-center justify-center p-4">
                  <img src={p.img ? p.img.replace('http://localhost/wordpress', '') : "/placeholder.png"} alt={p.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col items-center">
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(star => (
                      <span key={star} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h4>
                  <div className="text-[#2c5e3b] font-bold text-lg mb-4">
                    {p.price ? `₹${p.price}` : 'Read more'}
                  </div>
                  <Link href={`/products/${p.slug}`} className="mt-auto px-6 py-2 border border-gray-300 text-gray-700 font-semibold uppercase text-xs tracking-wider hover:bg-[#2c5e3b] hover:text-white hover:border-[#2c5e3b] transition-all">
                    Select Options
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
