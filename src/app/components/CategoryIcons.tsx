'use client';
import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'RICE', icon: '/wp-content/uploads/2022/05/rice-2.png', link: '/products' },
  { name: 'PULSES', icon: '/wp-content/uploads/2022/05/pulses.png', link: '/products' },
  { name: 'FLOURS', icon: '/wp-content/uploads/2022/05/flours.png', link: '/products' },
  { name: 'SUGAR & JAGGERY', icon: '/wp-content/uploads/2022/05/sugar.png', link: '/products' },
  { name: 'SPICES', icon: '/wp-content/uploads/2022/04/basil-leaf.png', link: '/products' },
];

export default function CategoryIcons() {
  return (
    <section style={{ padding: '80px 24px', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a202c', marginBottom: '16px', letterSpacing: '-1px' }}>
          Explore Our Categories
        </h2>
        <p style={{ fontSize: '18px', color: '#718096', marginBottom: '60px' }}>
          Pure, organic, and traditionally farmed for your healthy lifestyle.
        </p>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '40px',
          alignItems: 'center'
        }}>
          {categories.map((cat, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', minWidth: '150px' }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img 
                  src={cat.icon} 
                  alt={cat.name} 
                  style={{ width: '80px', height: '80px', objectFit: 'contain', filter: 'brightness(0) saturate(100%) invert(43%) sepia(30%) saturate(718%) hue-rotate(58deg) brightness(93%) contrast(89%)' }} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/wp-content/uploads/2022/05/rice-2.png';
                  }}
                />
              </div>
              <Link 
                href={cat.link}
                style={{
                  background: '#8CC63F', /* Beautiful organic green from reference */
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '14px',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 6px -1px rgba(140, 198, 63, 0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#7ab332';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 12px -2px rgba(140, 198, 63, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#8CC63F';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(140, 198, 63, 0.4)';
                }}
              >
                {cat.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
