"use client";

import React, { useState } from "react";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export default function ImageUploader({ value, onChange, label = "Image" }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        onChange(result.url);
      } else {
        alert("Upload failed: " + result.message);
      }
    } catch (error) {
      alert("An error occurred during upload.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label>{label}</label>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => onChange(e.target.value)} 
          placeholder="Or paste URL here..." 
          style={{ flex: 1 }}
        />
        <div style={{ position: 'relative', overflow: 'hidden', display: 'inline-block' }}>
          <button 
            type="button" 
            disabled={uploading}
            style={{ padding: '0.875rem 1rem', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            {uploading ? "Uploading..." : "Upload File"}
          </button>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            disabled={uploading}
            style={{ position: 'absolute', left: 0, top: 0, opacity: 0, cursor: 'pointer', height: '100%' }} 
          />
        </div>
      </div>
      {value && <img src={value} alt="Preview" style={{ height: '60px', objectFit: 'contain', border: '1px solid #ddd', padding: '2px', borderRadius: '4px', alignSelf: 'flex-start' }} />}
    </div>
  );
}
