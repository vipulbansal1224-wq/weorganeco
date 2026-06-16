"use client";

import React, { useState } from "react";
import { addFaq, deleteFaq, editFaq } from "./actions";

export default function FaqClient({ data }: { data: any[] }) {
  const [editItem, setEditItem] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    categoryTitle: "",
    question: "",
    answer: ""
  });

  const handleEditClick = (cIdx: number, fIdx: number, faq: any, categoryTitle: string) => {
    setEditItem({ cIdx, fIdx });
    setFormData({
      categoryTitle: categoryTitle,
      question: faq.question,
      answer: faq.answer.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<br\/>/g, '\n') // strip html for editing
    });
  };

  const handleCancel = () => {
    setEditItem(null);
    setFormData({ categoryTitle: "", question: "", answer: "" });
  };

  return (
    <div className="admin-page">
      <h1>Manage FAQ</h1>
      
      <div className="admin-form-container" style={{ background: '#fff', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h3>{editItem ? "Edit FAQ" : "Add New FAQ"}</h3>
        <form 
          action={editItem ? editFaq : addFaq} 
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}
        >
          {editItem && <input type="hidden" name="originalCatIdx" value={editItem.cIdx} />}
          {editItem && <input type="hidden" name="originalFaqIdx" value={editItem.fIdx} />}
          
          <input name="categoryTitle" placeholder="Category (e.g., WARRANTY/ GUARANTEE)" required style={{ padding: '0.5rem' }} value={formData.categoryTitle} onChange={e => setFormData({...formData, categoryTitle: e.target.value})} />
          <input name="question" placeholder="Question" required style={{ padding: '0.5rem' }} value={formData.question} onChange={e => setFormData({...formData, question: e.target.value})} />
          <textarea name="answer" placeholder="Answer" required style={{ padding: '0.5rem', minHeight: '100px' }} value={formData.answer} onChange={e => setFormData({...formData, answer: e.target.value})}></textarea>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="submit" style={{ flex: 1, padding: '0.75rem', background: '#e11b22', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '0.25rem' }}>
              {editItem ? "Save Changes" : "Add FAQ"}
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
              <th style={{ padding: '1rem', textAlign: 'left' }}>Category</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Question</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={3} style={{ padding: '1rem', textAlign: 'center' }}>No FAQs found.</td>
              </tr>
            ) : (
              data.map((catGroup, cIdx) => (
                catGroup.faqs.map((faq: any, fIdx: number) => (
                  <tr key={`${cIdx}-${fIdx}`} style={{ borderBottom: '1px solid #e2e8f0', background: editItem && editItem.cIdx === cIdx && editItem.fIdx === fIdx ? '#fef2f2' : 'transparent' }}>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>{catGroup.categoryTitle}</td>
                    <td style={{ padding: '1rem' }}>{faq.question}</td>
                    <td style={{ padding: '1rem', textAlign: 'right', display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <button onClick={() => handleEditClick(cIdx, fIdx, faq, catGroup.categoryTitle)} style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Edit</button>
                      <form action={deleteFaq.bind(null, cIdx, fIdx)}>
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
