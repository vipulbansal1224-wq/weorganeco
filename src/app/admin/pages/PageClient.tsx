"use client";

import React, { useState } from "react";
import { savePages } from "./actions";
import ImageUploader from "../../components/ImageUploader";

export default function PageClient({ initialPages }: { initialPages: any[] }) {
  const [pages, setPages] = useState<any[]>(initialPages);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    bannerImage: "",
    content: ""
  });

  const handleEditClick = (idx: number, page: any) => {
    setEditIndex(idx);
    setFormData({
      slug: page.slug,
      title: page.title,
      bannerImage: page.bannerImage || "",
      content: page.content || ""
    });
  };

  const handleCancel = () => {
    setEditIndex(null);
    setFormData({ slug: "", title: "", bannerImage: "", content: "" });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    let newPages = [...pages];
    
    if (editIndex !== null) {
      newPages[editIndex] = formData;
    } else {
      if (newPages.find(p => p.slug === formData.slug)) {
        alert("A page with this URL Slug already exists!");
        return;
      }
      newPages.push(formData);
    }
    
    setPages(newPages);
    await savePages(newPages);
    alert("Page saved successfully!");
    handleCancel();
  };

  const handleDelete = async (idx: number) => {
    if (!confirm("Are you sure you want to delete this page?")) return;
    const newPages = [...pages];
    newPages.splice(idx, 1);
    setPages(newPages);
    await savePages(newPages);
  };

  return (
    <div className="admin-page">
      <h1>Manage Custom Pages</h1>
      
      <div className="admin-form-container" style={{ background: '#fff', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h3>{editIndex !== null ? "Edit Custom Page" : "Create New Custom Page"}</h3>
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label>Page URL Slug (e.g., our-history)</label>
              <input 
                required 
                value={formData.slug} 
                onChange={(e) => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-')})} 
                placeholder="our-history"
              />
              <small style={{ color: '#6b7280', display: 'block', marginTop: '0.25rem' }}>This will be the URL: /page/our-history</small>
            </div>
            <div>
              <label>Page Title</label>
              <input required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder="Page Title" />
            </div>
          </div>
          
          <ImageUploader 
            label="Banner Image" 
            value={formData.bannerImage} 
            onChange={(url) => setFormData({...formData, bannerImage: url})} 
          />

          <div>
            <label>Page Content (HTML allowed)</label>
            <textarea 
              required 
              rows={10}
              value={formData.content} 
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              placeholder="<h2>Heading</h2><p>Your content here...</p>"
              style={{ fontFamily: 'monospace' }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', maxWidth: '400px' }}>
            <button type="submit" style={{ flex: 1 }}>
              {editIndex !== null ? "Save Changes" : "Publish Page"}
            </button>
            {editIndex !== null && (
              <button type="button" onClick={handleCancel} style={{ flex: 1, background: '#9ca3af' }}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="admin-table-container" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: '#1e293b', color: '#fff' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>URL Slug</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pages.length === 0 ? (
              <tr>
                <td colSpan={3} style={{ padding: '1rem', textAlign: 'center' }}>No custom pages created yet.</td>
              </tr>
            ) : (
              pages.map((p, idx) => (
                <tr key={p.slug} style={{ borderBottom: '1px solid #e2e8f0', background: editIndex === idx ? '#fef2f2' : 'transparent' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>/page/{p.slug}</td>
                  <td style={{ padding: '1rem' }}>{p.title}</td>
                  <td style={{ padding: '1rem', textAlign: 'right', display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    <button onClick={() => handleEditClick(idx, p)} style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Edit</button>
                    <button onClick={() => handleDelete(idx)} style={{ padding: '0.5rem 1rem', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
