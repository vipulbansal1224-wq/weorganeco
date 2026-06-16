import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1a202c', color: '#f7fafc', padding: '60px 24px 20px', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          
          <div>
            <img src="/wp-content/uploads/2022/04/weorganeco_logo-1.png" alt="WeOrganeco" style={{ height: '60px', marginBottom: '20px', filter: 'brightness(0) invert(1)' }} />
            <p style={{ color: '#a0aec0', lineHeight: '1.6', marginBottom: '20px' }}>
              We strongly believe in Organic Farming. We want to bring Organic to each and every table across the world and hence started this journey with exporting high quality organic foods to other countries from India.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: '#8CC63F' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/" style={{ color: '#cbd5e0', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link></li>
              <li><Link href="/products" style={{ color: '#cbd5e0', textDecoration: 'none', transition: 'color 0.2s' }}>Products</Link></li>
              <li><Link href="/page/contact" style={{ color: '#cbd5e0', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: '#8CC63F' }}>Policies</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/page/privacy-policy" style={{ color: '#cbd5e0', textDecoration: 'none', transition: 'color 0.2s' }}>Privacy Policy</Link></li>
              <li><Link href="/page/refund-policy" style={{ color: '#cbd5e0', textDecoration: 'none', transition: 'color 0.2s' }}>Refund Policy</Link></li>
              <li><Link href="/page/shipping-delivery" style={{ color: '#cbd5e0', textDecoration: 'none', transition: 'color 0.2s' }}>Shipping & Delivery</Link></li>
              <li><Link href="/page/terms-conditions" style={{ color: '#cbd5e0', textDecoration: 'none', transition: 'color 0.2s' }}>Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: '#8CC63F' }}>Contact Us</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: '#cbd5e0' }}>
              <li>📍 Shed No.7, Mega Food Park, Ludhiana</li>
              <li>📧 info@weorganeco.com</li>
              <li>📞 +91 (123) 456-7890</li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #2d3748', paddingTop: '20px', textAlign: 'center', color: '#718096', fontSize: '14px' }}>
          <p>&copy; {new Date().getFullYear()} WeOrganeco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
