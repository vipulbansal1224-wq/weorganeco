"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "We are pleased to work with such a professional company as FMI, where the quality of the products you supply and service, exceed our expectations which help us to offer to our clients the best solution for their requirements.",
    author: "Anwar Ortiz, Imports Manager, TRUPER",
  },
  {
    quote: "After working with FMI Limited for more than 10 years, we are very happy with their quality and lead time and are sure that the relationship will continue for many years to come! When we started working with FMI Limited, sourcing just a small part of our product ranges from them. The fact that the portfolio of products sourced from them has grown steadily year on year is a testament to their cost competitiveness and quality controls.",
    author: "Sandie Gröbner, Purchase Manager, FRIEDRICH RICHTER",
  },
  {
    quote: "Our relationship and agency agreement with FMI Limited goes back to 1996 as well as before this date, we have sold the many measuring devices that are produced by FREEMANS including their levels. All products produced are of highest international standards and calibration tests have been proven to be perfect. May your company grow from strength to strength for the future.",
    author: "Omri Gelgor, CEO, SALESCOPE SOUTH AFRICA (PTY) LTD",
  },
  {
    quote: "Our first business with FMI was more than 30 years ago. We feel very proud about the strong, stable, fruitful and friendly cooperation developed along all those years. And we are sure it will be continued even more closely.",
    author: "Carlos Pascual, Managing Director, General de Medición, S.L.",
  },
  {
    quote: "FMI has been a part of our supplier pool for a really long time. Their commitment to servicing us has been important to our success. They have a great product range and quality workmanship.",
    author: "Yogesh Nilknath, Sourcing Manager, BELLOTA",
  },
  {
    quote: "It has been our pleasure to be associated with FMI – India for over 40 Years. During these years we have found them to be Very Professional both in terms of Quality and Service. We have noticed a constant endeavor to improving Quality and Packaging of their products.",
    author: "Sudhir Bhasin, Managing Director, ROCKFORT Trading L.L.C",
  }
];

export default function TestimonialsSlider() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h3 className="sec-title">CUSTOMER TESTIMONIALS</h3>
        <div className="review-slider-wrap">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="reviewsSwiper"
          >
            {testimonials.map((test, index) => (
              <SwiperSlide key={index}>
                <div className="review-card">
                  <div className="review-body">
                    <p>"{test.quote}"</p>
                  </div>
                  <div className="review-footer">
                    <div className="review-author">{test.author}</div>
                    <img src="/images/star-1.png" alt="5 Stars" className="review-stars" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
