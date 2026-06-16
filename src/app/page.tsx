import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { ArrowRight, Leaf, ShieldCheck, Sprout } from "lucide-react";

export default async function Home() {
  const productsPath = path.join(process.cwd(), "src/data/products.json");
  let productsData: any = { products: [] };
  try {
    const file = await fs.readFile(productsPath, "utf-8");
    productsData = JSON.parse(file);
  } catch(e) {}

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20" style={{
        background: "linear-gradient(to right, rgba(20, 40, 25, 0.9) 0%, rgba(44, 94, 59, 0.7) 100%), url('/uploads/2022/05/IMG_4100.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 px-6 mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-green-100 uppercase rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            100% Certified Organic
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Pure Nature,<br/>
            <span className="text-green-300 italic">Delivered to You.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Experience the true essence of nature with our premium range of organic products, cultivated with care for you and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-[#8a6c51] rounded-full hover:bg-[#7a5c41] hover:shadow-xl hover:shadow-[#8a6c51]/30 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
                Shop Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/page/about-us" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/20 hover:shadow-xl uppercase tracking-wider">
              Our Story
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,114.62,189.92,106.74A322.28,322.28,0,0,0,321.39,56.44Z" className="fill-[#fcfbfa]"></path>
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#fcfbfa]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c5e3b] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Why Choose WeOrganeco?</h2>
            <div className="w-24 h-1 bg-[#8a6c51] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="group p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="text-[#2c5e3b]" size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>100% Organic</h3>
              <p className="text-gray-500 leading-relaxed">Certified organic products grown without harmful chemicals or synthetic pesticides.</p>
            </div>
            <div className="group p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sprout className="text-[#2c5e3b]" size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Eco-Friendly</h3>
              <p className="text-gray-500 leading-relaxed">Sustainable farming practices that protect our soil and water for future generations.</p>
            </div>
            <div className="group p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="text-[#2c5e3b]" size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Premium Quality</h3>
              <p className="text-gray-500 leading-relaxed">Carefully selected and processed to ensure the highest nutritional value and taste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-green-50 blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-orange-50 blur-3xl opacity-60 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c5e3b] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Bestsellers</h2>
              <div className="w-24 h-1 bg-[#8a6c51] rounded-full"></div>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-[#8a6c51] font-semibold hover:text-[#7a5c41] transition-colors group">
              View All Products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.products.slice(0, 4).map((p: any, i: number) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="relative h-[280px] overflow-hidden bg-gray-50 flex items-center justify-center p-6">
                  <img src={p.img || "/placeholder.png"} alt={p.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <Link href="/products" className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      Quick View
                    </Link>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col items-center text-center">
                  <div className="text-xs font-bold text-[#8a6c51] tracking-widest uppercase mb-2">{p.categoryTitle || 'Organic'}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h4>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{p.description}</p>
                  <div className="mt-auto">
                    <Link href="/products" className="text-[#2c5e3b] font-semibold border-b-2 border-transparent hover:border-[#8a6c51] pb-1 transition-colors">
                      Discover
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
