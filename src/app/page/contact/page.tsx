'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fdfbfb', paddingTop: '160px', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '60px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#1a202c', marginBottom: '16px' }}>
            Get In Touch
          </h1>
          <p style={{ fontSize: '18px', color: '#718096', maxWidth: '600px', margin: '0 auto' }}>
            Have questions about our organic products, bulk orders, or shipping? 
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {/* Contact Information & Map */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1a202c', marginBottom: '24px' }}>Our Office</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '20px' }}>📍</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#2d3748', marginBottom: '4px' }}>Address</h3>
                  <p style={{ fontSize: '15px', color: '#718096', lineHeight: '1.6' }}>Shed No.7, Mega Food Park, Ludhiana</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '20px' }}>📧</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#2d3748', marginBottom: '4px' }}>Email</h3>
                  <p style={{ fontSize: '15px', color: '#718096', lineHeight: '1.6' }}>info@weorganeco.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '20px' }}>📞</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#2d3748', marginBottom: '4px' }}>Phone</h3>
                  <p style={{ fontSize: '15px', color: '#718096', lineHeight: '1.6' }}>+91 (123) 456-7890</p>
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109635.81734293961!2d75.76453965939229!3d30.900269666014493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1718049281234!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1a202c', marginBottom: '24px' }}>Send a Message</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '600', color: '#4a5568' }}>Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={(e) => e.target.style.borderColor = '#8CC63F'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="John Doe"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '600', color: '#4a5568' }}>Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={(e) => e.target.style.borderColor = '#8CC63F'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="john@example.com"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '600', color: '#4a5568' }}>Subject</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', transition: 'border-color 0.2s' }}
                  onFocus={(e) => e.target.style.borderColor = '#8CC63F'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="How can we help you?"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '600', color: '#4a5568' }}>Message</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', transition: 'border-color 0.2s', minHeight: '150px', resize: 'vertical' }}
                  onFocus={(e) => e.target.style.borderColor = '#8CC63F'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                style={{
                  background: '#8CC63F',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '16px',
                  padding: '14px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '10px',
                  transition: 'background-color 0.2s, transform 0.1s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7ab332'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8CC63F'}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
