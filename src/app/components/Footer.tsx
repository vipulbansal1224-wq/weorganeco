import Link from "next/link";

export default function Footer({ settings, menuData }: { settings: any, menuData: any }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <h3>About WeOrganeco</h3>
            <p dangerouslySetInnerHTML={{ __html: settings.footerAddress }} />
            <p>Email: <a href={`mailto:${settings.footerEmail}`}>{settings.footerEmail}</a></p>
            <p>Phone: {settings.footerPhone}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              {menuData.slice(0, 5).map((menu: any) => (
                <li key={menu.id}><Link href={menu.path}>{menu.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="footer-column">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href={settings.socialFacebook} target="_blank" rel="noreferrer">Facebook</a>
              <a href={settings.socialInstagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={settings.socialLinkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={settings.socialYoutube} target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p>&copy; {new Date().getFullYear()} {settings.copyrightText}. All rights reserved.</p>
          {settings.footerLogoUrl && <img src={settings.footerLogoUrl} alt="Logo" height="40" />}
        </div>
      </div>
    </footer>
  );
}
