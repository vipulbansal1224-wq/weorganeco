"use client";

import React, { useState } from "react";
import { saveMenu } from "./actions";

export default function MenuClient({ initialData }: { initialData: any[] }) {
  const [menu, setMenu] = useState(initialData);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await saveMenu(menu);
    setSaving(false);
    alert("Menu saved successfully!");
  };

  const addMenuItem = () => {
    setMenu([...menu, { id: Date.now().toString(), title: "New Item", href: "/" }]);
  };

  const removeMenuItem = (index: number) => {
    const newMenu = [...menu];
    newMenu.splice(index, 1);
    setMenu(newMenu);
  };

  const updateMenuItem = (index: number, field: string, value: string) => {
    const newMenu = [...menu];
    newMenu[index][field] = value;
    setMenu(newMenu);
  };

  const addSubItem = (index: number) => {
    const newMenu = [...menu];
    if (!newMenu[index].subItems) newMenu[index].subItems = [];
    newMenu[index].subItems.push({ id: Date.now().toString(), title: "New Sub Item", href: "/" });
    setMenu(newMenu);
  };

  const updateSubItem = (pIndex: number, sIndex: number, field: string, value: string) => {
    const newMenu = [...menu];
    newMenu[pIndex].subItems[sIndex][field] = value;
    setMenu(newMenu);
  };

  const removeSubItem = (pIndex: number, sIndex: number) => {
    const newMenu = [...menu];
    newMenu[pIndex].subItems.splice(sIndex, 1);
    setMenu(newMenu);
  };

  return (
    <div className="admin-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Menu Editor</h1>
        <button onClick={handleSave} disabled={saving} style={{ padding: '0.75rem 1.5rem', background: '#e11b22', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          {saving ? "Saving..." : "Save All Changes"}
        </button>
      </div>

      <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        {menu.map((item, i) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <strong style={{ minWidth: '80px' }}>Menu Item:</strong>
              <input value={item.title} onChange={(e) => updateMenuItem(i, 'title', e.target.value)} style={{ flex: 1, padding: '0.5rem' }} placeholder="Title" />
              <input value={item.href} onChange={(e) => updateMenuItem(i, 'href', e.target.value)} style={{ flex: 1, padding: '0.5rem' }} placeholder="Link URL" />
              <button onClick={() => addSubItem(i)} style={{ padding: '0.5rem', background: '#10b981', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>+ Sub Menu</button>
              <button onClick={() => removeMenuItem(i)} style={{ padding: '0.5rem', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
            </div>

            {item.subItems && item.subItems.length > 0 && (
              <div style={{ marginLeft: '100px', marginTop: '1rem', borderLeft: '2px solid #e11b22', paddingLeft: '1rem' }}>
                {item.subItems.map((sub: any, sIdx: number) => (
                  <div key={sub.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span>↳ Sub:</span>
                    <input value={sub.title} onChange={(e) => updateSubItem(i, sIdx, 'title', e.target.value)} style={{ flex: 1, padding: '0.5rem' }} placeholder="Sub Title" />
                    <input value={sub.href} onChange={(e) => updateSubItem(i, sIdx, 'href', e.target.value)} style={{ flex: 1, padding: '0.5rem' }} placeholder="Sub URL" />
                    <button onClick={() => removeSubItem(i, sIdx)} style={{ padding: '0.5rem', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>X</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <button onClick={addMenuItem} style={{ padding: '0.75rem', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%', marginTop: '1rem' }}>
          + Add New Menu Item
        </button>
      </div>
    </div>
  );
}
