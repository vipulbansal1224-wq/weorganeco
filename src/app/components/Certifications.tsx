'use client';
import React from 'react';

export default function Certifications() {
  return (
    <section style={{ padding: '60px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1a202c', marginBottom: '40px', position: 'relative', display: 'inline-block' }}>
          Our Certifications
          <span style={{ content: '""', position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', background: '#8CC63F', borderRadius: '2px' }}></span>
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          <div style={{ 
            background: 'white', 
            padding: '30px 40px', 
            borderRadius: '16px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            maxWidth: '300px'
          }}>
            <div style={{ width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/wp-content/uploads/2019/06/organic-badge-freeimg.png" 
                alt="Certified Organic Badge" 
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/wp-content/uploads/2022/04/weorganeco_logo-1.png';
                }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#2d3748', marginBottom: '8px' }}>Certified Organic</h3>
              <p style={{ color: '#8CC63F', fontWeight: '600', fontSize: '16px' }}>100% Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
