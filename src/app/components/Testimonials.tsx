'use client';
import React from 'react';

const reviews = [
  {
    name: 'Tushar',
    avatar: '/wp-content/uploads/2022/04/60x60-1.png',
    text: 'Organic food is food and drinks produced by methods complying with the standards of organic farming. Standards vary worldwide, but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity',
    rating: 5
  },
  {
    name: 'Kshitij',
    avatar: '/wp-content/uploads/2022/05/60x60-2.png',
    text: 'About 30-40 years ago, people used to consume only organically grown food products, then came the trend of faster growing harvest and crops and for business growth the whole world follow the trend, which took a major toll our health but we always need to remember health can never be taken for granted. Prevention is better than cure so rather than paying card bills and insurance lets make sure our body and health is ready to take down everything healthy. I today, with a thousand more stand with a new trend of healthy and all organic diet for a stronger and immune tomorrow of our country and the world.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section style={{ padding: '80px 24px', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a202c', marginBottom: '16px', letterSpacing: '-1px' }}>
            What People Say
          </h2>
          <p style={{ fontSize: '18px', color: '#718096' }}>
            Real reviews from our healthy community
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {reviews.map((review, index) => (
            <div key={index} style={{ 
              background: '#fdfbfb', 
              padding: '40px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease',
            }}>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#FBBF24', fontSize: '20px' }}>★</span>
                  ))}
                </div>
                <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '30px' }}>
                  "{review.text}"
                </p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #8CC63F' }} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/wp-content/uploads/2022/04/weorganeco_logo-1.png';
                  }}
                />
                <div>
                  <h4 style={{ fontWeight: '700', color: '#1a202c', fontSize: '16px' }}>{review.name}</h4>
                  <span style={{ color: '#a0aec0', fontSize: '14px' }}>Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
