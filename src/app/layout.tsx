import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: 'WeOrganeco - Organic Food Products',
  description: 'Premium quality organic foods, rice, pulses, flours, and sugar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
