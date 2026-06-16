"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    bg: "/images/Banners-Pocket-Tapes-1.webp",
    title: "FREEMANS THE SUPERBRAND",
    desc: "We are proud to share that FREEMANS has been recognised as a Superbrand for the terms 2023-24 & 2025–26— an accolade that reflects our enduring commitment to quality, precision, and innovation.",
    circleImg: "/images/super-brand-25-26.png",
    navImg: "",
    navText: "Superbrand Status",
    link: ""
  },
  {
    bg: "/images/Banners-Pocket-Tapes-1.webp",
    title: "Pocket Measuring Tapes",
    desc: "We manufacture an extensive range of Pocket Steel Measuring Tapes, ideally suited to both the DIY and the professional markets.",
    circleImg: "/images/Banner-19-05-20-1.jpg",
    navImg: "/images/Pocket-Tape.png",
    navText: "Pocket Measuring Tapes",
    link: "/products/pocket-tapes"
  },
  {
    bg: "/images/Banners-Fibreglass-1.webp",
    title: "Fibreglass Measuring Tapes",
    desc: "We are one of the largest manufacturers of Fibreglass Measuring Tapes globally; our production capacity exceeds 15,000 pieces per day.",
    circleImg: "/images/FIBREGLASS-MEASURING-TAPE-1.jpg",
    navImg: "/images/Fibreglass-2.png",
    navText: "Fibreglass Measuring Tapes",
    link: "/products/fibreglass-tapes"
  },
  {
    bg: "/images/Banner-Long-steel-1.jpg",
    title: "Long Steel Measuring Tapes",
    desc: "We manufacture both closed reel and open reel Long Steel Measuring Tapes, ranging in size from 5m to 100m.",
    circleImg: "/images/Steel-tape-1.jpg",
    navImg: "/images/Steel-Long-tape-1.png",
    navText: "Long Steel Measuring Tapes",
    link: "/products/steel-long-tapes"
  },
  {
    bg: "/images/Banner-Spirit-Levels-1.webp",
    title: "Spirit Levels",
    desc: "In 2009, we established India's first and only Spirit Levels manufacturing facility in Gurgaon, India.",
    circleImg: "/images/banner-pic-1.png",
    navImg: "/images/spirit-levels-2.png",
    navText: "Spirit Levels",
    link: "/products/spirit-levels"
  },
  {
    bg: "/images/Banners-Measuring-Wheel-1.webp",
    title: "Measuring Wheels",
    desc: "Our product portfolio boasts a wide range of high quality, robust Measuring Wheels, including Digital Measuring Wheels.",
    circleImg: "/images/Measuring-Wheel-MW01-1.jpg",
    navImg: "/images/Measuring-Wheels-3.png",
    navText: "Measuring Wheels",
    link: "/products/measuring-wheels"
  }
];

export default function BannerSlider() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="banner-section">
      <Swiper
        modules={[Autoplay, EffectFade, Controller]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        className="main-banner-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="banner-slide" style={{ backgroundImage: `url(${slide.bg})` }}>
              <div className="container banner-content">
                <div className="banner-left">
                  <div className="banner-left-inner">
                    <h2>{slide.title}</h2>
                    <p>{slide.desc}</p>
                    {slide.link && (
                      <div className="banner-btn">
                        <a className="btn" href={slide.link}>View Products</a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="banner-right">
                  <div className="banner-circle-image">
                    <img src={slide.circleImg} alt={slide.title} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Banner Navigation */}
      <div className="banner-nav">
        <div className="container">
          <div className="banner-nav-items-wrap">
            {slides.map((slide, idx) => (
              <div 
                key={idx} 
                className={`banner-nav-item ${activeIndex === idx ? "active" : ""}`}
                onClick={() => swiper?.slideToLoop(idx)}
              >
                {slide.navImg && (
                  <span className="bni-icon">
                    <img src={slide.navImg} alt={slide.navText} />
                  </span>
                )}
                <span className="bni-text">{slide.navText}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
