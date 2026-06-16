"use client";

import React, { useState } from "react";
import { addProduct, deleteProduct, editProduct } from "./actions";
import ImageUploader from "../../components/ImageUploader";

export default function ProductClient({ allProducts, categories }: { allProducts: any[], categories: any[] }) {
  const [editItem, setEditItem] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    categorySlug: "",
    title: "",
    imgUrl: ""
  });

  const handleEditClick = (p: any) => {
    setEditItem(p);
    setFormData({
      categorySlug: p.categorySlug,
      title: p.title,
      imgUrl: p.img
    });
  };

  const handleCancel = () => {
    setEditItem(null);
    setFormData({ categorySlug: "", title: "", imgUrl: "" });
  };

  return (
    <div className="admin-page">
      <h1>Manage Products</h1>
      
      <div className="admin-form-container" style={{ background: '#fff', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h3>{editItem ? "Edit Product" : "Add New Product"}</h3>
        <form 
          action={editItem ? editProduct : addProduct} 
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}
        >
          {editItem && <input type="hidden" name="originalIndex" value={editItem.index} />}
          {editItem && <input type="hidden" name="originalCat" value={editItem.categorySlug} />}
          
          <select 
            name="categorySlug" 
            required 
            style={{ padding: '0.5rem' }}
            value={formData.categorySlug}
            onChange={(e) => setFormData({...formData, categorySlug: e.target.value})}
          >
            <option value="">Select Category...</option>
            {categories.map(c => (
              <option key={c.slug} value={c.slug}>{c.title}</option>
            ))}
          </select>
          <input 
            name="title" 
            placeholder="Product Title" 
            required 
            style={{ padding: '0.5rem' }} 
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
          
          {/* We use ImageUploader instead of raw input */}
          <input type="hidden" name="imgUrl" value={formData.imgUrl} />
          <ImageUploader 
            label="Product Image" 
            value={formData.imgUrl} 
            onChange={(url) => setFormData({...formData, imgUrl: url})} 
          />
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="submit" style={{ flex: 1, padding: '0.75rem', background: '#e11b22', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '0.25rem' }}>
              {editItem ? "Save Changes" : "Add Product"}
            </button>
            {editItem && (
              <button type="button" onClick={handleCancel} style={{ flex: 1, padding: '0.75rem', background: '#9ca3af', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '0.25rem' }}>
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
              <th style={{ padding: '1rem', textAlign: 'left' }}>Image</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Category</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '1rem', textAlign: 'center' }}>No products found.</td>
              </tr>
            ) : (
              allProducts.map((p, idx) => (
                <tr key={`${p.categorySlug}-${p.index}-${idx}`} style={{ borderBottom: '1px solid #e2e8f0', background: editItem && editItem.categorySlug === p.categorySlug && editItem.index === p.index ? '#fef2f2' : 'transparent' }}>
                  <td style={{ padding: '1rem' }}>
                    <img src={p.img} alt={p.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                  </td>
                  <td style={{ padding: '1rem' }}>{p.title}</td>
                  <td style={{ padding: '1rem' }}>{p.categoryTitle}</td>
                  <td style={{ padding: '1rem', textAlign: 'right', display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    <button onClick={() => handleEditClick(p)} style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Edit</button>
                    <form action={deleteProduct.bind(null, p.categorySlug, p.index)}>
                      <button type="submit" style={{ padding: '0.5rem 1rem', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Delete</button>
                    </form>
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
