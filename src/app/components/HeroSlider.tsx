"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/wp-content/uploads/2022/05/all-product.-2.jpg",
    title: "Pure Nature, Delivered to You",
    subtitle: "Experience the true taste of organic farming.",
  },
  {
    src: "/wp-content/uploads/2022/05/IMG_4100.jpg",
    title: "Sustainably Grown",
    subtitle: "We believe in agriculture that respects nature.",
  },
  {
    src: "/wp-content/uploads/2022/06/2.png",
    title: "Healthy Lifestyle",
    subtitle: "Wholesome foods for you and your family.",
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: '80vh' }}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img 
            src={img.src} 
            alt={img.title} 
            className="absolute inset-0 w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center h-[80vh]">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg transform translate-y-[-20px] animate-fade-in-down" style={{ fontFamily: "'Playfair Display', serif" }}>
              {img.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-light drop-shadow-md">
              {img.subtitle}
            </p>
            <button className="px-8 py-4 bg-[#2c5e3b] text-white font-bold uppercase tracking-widest hover:bg-[#1a3d25] hover:scale-105 transition-all shadow-xl rounded-full">
              Shop Now
            </button>
          </div>
        </div>
      ))}
      
      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-all"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-all"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
