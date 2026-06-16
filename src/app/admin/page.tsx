export default function AdminDashboard() {
  return (
    <div className="admin-page">
      <h1>Dashboard</h1>
      <p>Welcome to the WeOrganeco Control Panel.</p>
      <p style={{ marginTop: '1rem', color: '#555', lineHeight: '1.6' }}>
        Here you can manage the content for your website easily. Use the sidebar to navigate to:
      </p>
      <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', color: '#555', lineHeight: '1.8' }}>
        <li><strong>Website Menu:</strong> Add or remove links in the top navigation.</li>
        <li><strong>Custom Pages:</strong> Create custom pages with text and images.</li>
        <li><strong>Products:</strong> Add or remove products from various categories.</li>
        <li><strong>Global Settings:</strong> Change the logo, footer info, and social links.</li>
      </ul>
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#e9f2eb', borderRadius: '0.5rem', borderLeft: '4px solid #2c5e3b' }}>
        <h4 style={{ color: '#1e4028', margin: '0 0 0.5rem 0' }}>How to publish changes?</h4>
        <p style={{ margin: 0, color: '#1e4028' }}>
          Any changes you make here are instantly saved locally. To make them live on the main Vercel website, 
          you need to push the code to your GitHub repository.
        </p>
      </div>
    </div>
  );
}
