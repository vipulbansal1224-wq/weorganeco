"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/wp-content/uploads/2022/04/weorganeco_logo-1.png" alt="WeOrganeco Logo" style={{ height: '130px', width: 'auto' }} />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/products" className={styles.link}>Products</Link>
          <Link href="/page/contact" className={styles.link}>Contact</Link>
          
          <div 
            className={styles.dropdown} 
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className={styles.link} style={{ cursor: 'pointer' }}>Policies ▼</span>
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <Link href="/page/privacy-policy">Privacy Policy</Link>
                <Link href="/page/refund-policy">Refund Policy</Link>
                <Link href="/page/shipping-delivery">Shipping & Delivery</Link>
                <Link href="/page/terms-conditions">Terms & Conditions</Link>
              </div>
            )}
          </div>
        </div>
        <div className={styles.actions}>
          <Link href="/cart" className={styles.cartBtn}>
            🛒 Cart (0)
          </Link>
        </div>
      </div>
    </nav>
  );
}
