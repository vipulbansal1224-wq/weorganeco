import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import HeroSlider from "./components/HeroSlider";
import FadeIn from "./components/FadeIn";

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
    <main className="overflow-hidden bg-[#faf9f8]">
      {/* HD Hero Slider */}
      <HeroSlider />

      {/* Movement Section - 3 Images */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#faf9f8] opacity-50 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-[#2c5e3b] mb-6 drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>Join The Organeco Movement!</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                We must make organic the conventional choice and not the exception available only to the rich and educated.
              </p>
              <div className="w-24 h-1 bg-[#8a6c51] mx-auto mt-8 rounded-full opacity-70"></div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <FadeIn delay={100}>
              <div className="overflow-hidden rounded-2xl shadow-xl group cursor-pointer relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 duration-500" />
                <img src="/wp-content/uploads/2022/05/300x300-96-dpi-1.jpg" alt="Organic farming 1" className="w-full h-auto group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="overflow-hidden rounded-2xl shadow-xl group cursor-pointer relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 duration-500" />
                <img src="/wp-content/uploads/2022/05/300x300-96-dpi-2.jpg" alt="Organic farming 2" className="w-full h-auto group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
            </FadeIn>
            <FadeIn delay={500}>
              <div className="overflow-hidden rounded-2xl shadow-xl group cursor-pointer relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 duration-500" />
                <img src="/wp-content/uploads/2022/05/300x300-96-dpi-3.jpg" alt="Organic farming 3" className="w-full h-auto group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Category Icons */}
      <section className="py-24 bg-[#2c5e3b] text-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
              {categories.map((cat, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-36 h-36 mb-8 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group-hover:-translate-y-2 cursor-pointer transition-all duration-500 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:animate-ping"></div>
                    <img src={cat.img} alt={cat.title} className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <Link href={cat.link} className="inline-block px-10 py-3 border border-white/40 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-[#2c5e3b] transition-all shadow-lg">
                    {cat.title}
                  </Link>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Block */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="md:w-1/2 relative">
              <FadeIn>
                <div className="absolute -inset-4 bg-[#8a6c51]/10 rounded-[3rem] -rotate-3 z-0"></div>
                <img src="/wp-content/uploads/2022/06/2.png" alt="About WeOrganeco" className="w-full max-w-md mx-auto relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
              </FadeIn>
            </div>
            <div className="md:w-1/2">
              <FadeIn delay={200}>
                <h2 className="text-5xl font-bold text-[#2c5e3b] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  WE ARE <span className="text-[#8a6c51] relative">ORGANECO<svg className="absolute w-full h-3 -bottom-2 left-0 text-[#8a6c51]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span>
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-loose font-light">
                  Organeco is formed by a group of individuals who strongly believe in Organic Farming. We want to bring Organic to each and every table across the world and hence started this journey with exporting high quality organic foods to other countries from India.
                </p>
                <Link href="/about-us" className="inline-flex px-10 py-4 bg-[#2c5e3b] text-white font-bold uppercase tracking-wider rounded shadow-xl hover:bg-[#1a3d25] hover:-translate-y-1 transition-all">
                  Discover Our Story
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-24 bg-[#faf9f8]">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="flex flex-col items-center justify-between mb-16 gap-6">
              <div className="text-center">
                <h2 className="text-5xl font-bold text-[#2c5e3b] mb-4 drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>Premium Selection</h2>
                <p className="text-gray-500 font-light text-lg">Handpicked organic goodness for your daily life.</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {productsData.products.slice(0, 8).map((p: any, i: number) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group bg-white overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-2xl flex flex-col text-center border border-gray-100">
                  <div className="relative h-[280px] overflow-hidden flex items-center justify-center p-6 bg-white">
                    {/* Discount badge simulation */}
                    {i % 3 === 0 && <span className="absolute top-4 right-4 bg-[#8a6c51] text-white text-xs font-bold px-3 py-1 rounded-full z-10">Sale</span>}
                    <img src={p.img ? p.img.replace('http://localhost/wordpress', '') : "/placeholder.png"} alt={p.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col items-center bg-white z-10">
                    <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map(star => (
                        <span key={star} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h4>
                    <div className="text-[#2c5e3b] font-extrabold text-xl mb-6">
                      {p.price ? `₹${p.price}` : 'Read more'}
                    </div>
                    <Link href={`/products/${p.slug}`} className="mt-auto px-8 py-3 w-full border-2 border-gray-200 text-gray-700 font-bold uppercase text-xs tracking-widest hover:bg-[#2c5e3b] hover:text-white hover:border-[#2c5e3b] transition-all rounded-full">
                      Select Options
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
