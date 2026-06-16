"use client";

import React, { useState } from "react";
import { addNews, deleteNews, editNews } from "./actions";
import ImageUploader from "../../components/ImageUploader";

export default function NewsClient({ data }: { data: any[] }) {
  const [editItem, setEditItem] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    year: "",
    title: "",
    date: "",
    imgUrl: "",
    link: ""
  });

  const handleEditClick = (yearIdx: number, itemIdx: number, item: any, year: string) => {
    setEditItem({ yearIdx, itemIdx });
    setFormData({
      year: year,
      title: item.title,
      date: item.date || "",
      imgUrl: item.img || "",
      link: item.link || ""
    });
  };

  const handleCancel = () => {
    setEditItem(null);
    setFormData({ year: "", title: "", date: "", imgUrl: "", link: "" });
  };

  return (
    <div className="admin-page">
      <h1>Manage News & Press</h1>
      
      <div className="admin-form-container" style={{ background: '#fff', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h3>{editItem ? "Edit Press Release" : "Add New Press Release"}</h3>
        <form 
          action={editItem ? editNews : addNews} 
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}
        >
          {editItem && <input type="hidden" name="originalYearIdx" value={editItem.yearIdx} />}
          {editItem && <input type="hidden" name="originalItemIdx" value={editItem.itemIdx} />}
          
          <input name="year" placeholder="Year (e.g., 2026)" required style={{ padding: '0.5rem' }} value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} />
          <input name="title" placeholder="News Title" required style={{ padding: '0.5rem' }} value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          <input name="date" placeholder="Date (e.g., 15/06/2026)" style={{ padding: '0.5rem' }} value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
          <input name="link" placeholder="Article Link URL" style={{ padding: '0.5rem' }} value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} />

          {/* We use ImageUploader instead of raw input */}
          <input type="hidden" name="imgUrl" value={formData.imgUrl} />
          <ImageUploader 
            label="News Image" 
            value={formData.imgUrl} 
            onChange={(url) => setFormData({...formData, imgUrl: url})} 
          />
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="submit" style={{ flex: 1, padding: '0.75rem', background: '#e11b22', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '0.25rem' }}>
              {editItem ? "Save Changes" : "Add News"}
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
              <th style={{ padding: '1rem', textAlign: 'left' }}>Year</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Image</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '1rem', textAlign: 'center' }}>No news found.</td>
              </tr>
            ) : (
              data.map((yearGroup, yIdx) => (
                yearGroup.items.map((item: any, iIdx: number) => (
                  <tr key={`${yIdx}-${iIdx}`} style={{ borderBottom: '1px solid #e2e8f0', background: editItem && editItem.yearIdx === yIdx && editItem.itemIdx === iIdx ? '#fef2f2' : 'transparent' }}>
                    <td style={{ padding: '1rem' }}>{yearGroup.year}</td>
                    <td style={{ padding: '1rem' }}>
                      <img src={item.img} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                    </td>
                    <td style={{ padding: '1rem' }}>{item.title}</td>
                    <td style={{ padding: '1rem', textAlign: 'right', display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <button onClick={() => handleEditClick(yIdx, iIdx, item, yearGroup.year)} style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Edit</button>
                      <form action={deleteNews.bind(null, yIdx, iIdx)}>
                        <button type="submit" style={{ padding: '0.5rem 1rem', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Delete</button>
                      </form>
                    </td>
                  </tr>
                ))
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
