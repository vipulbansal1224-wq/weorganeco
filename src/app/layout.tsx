import "./globals.css";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import Footer from "./components/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuPath = path.join(process.cwd(), "src/data/menu.json");
  const settingsPath = path.join(process.cwd(), "src/data/settings.json");
  let menuData: any = [];
  let settings: any = {};
  try {
    const file = await fs.readFile(menuPath, "utf-8");
    menuData = JSON.parse(file);
    const sFile = await fs.readFile(settingsPath, "utf-8");
    settings = JSON.parse(sFile);
  } catch(e) {}

  return (
    <html lang="en">
      <body>
        <header className="site-header">
          {/* Top Bar */}
          <div className="top-bar">
            <div className="container top-bar-content">
              <div className="top-left">100% Organic & Eco-Friendly</div>
              <div className="top-right">
                <span>Call Us: {settings.headerPhone || "+91 99999 99999"}</span>
                <span>{settings.headerEmail || "info@weorganeco.com"}</span>
              </div>
            </div>
          </div>

          {/* Middle Bar */}
          <div className="middle-bar container">
            <div className="logo-container">
              <Link href="/">
                <img src={settings.logoUrl || "/placeholder-logo.png"} alt="WeOrganeco" className="header-logo" />
              </Link>
            </div>
            
            <div className="main-nav-container">
              <nav className="main-nav">
                <ul>
                  {menuData.map((menu: any) => (
                    <li key={menu.id} className={menu.submenus && menu.submenus.length > 0 ? "has-submenu" : ""}>
                      <Link href={menu.link}>{menu.title}</Link>
                      {menu.submenus && menu.submenus.length > 0 && (
                        <ul className="submenu">
                          {menu.submenus.map((sub: any) => (
                            <li key={sub.id}>
                              <Link href={sub.link}>{sub.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </header>

        {children}

        <Footer settings={settings} menuData={menuData} />
      </body>
    </html>
  );
}
