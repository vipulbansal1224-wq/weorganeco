import Link from "next/link";
import "./admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <Link href="/admin">Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/menu">Website Menu</Link>
            </li>
            <li>
              <Link href="/admin/pages">Custom Pages</Link>
            </li>
            <li>
              <Link href="/admin/products">Products</Link>
            </li>
            <li>
              <Link href="/admin/news">News & Press</Link>
            </li>
            <li>
              <Link href="/admin/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/admin/settings">Global Settings</Link>
            </li>
            <li style={{ marginTop: 'auto' }}>
              <Link href="/" className="back-to-site">View Live Site</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
