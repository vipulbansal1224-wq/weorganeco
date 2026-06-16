"use client";

import React, { useState } from "react";
import { saveSettings } from "./actions";
import ImageUploader from "../../components/ImageUploader";

export default function SettingsClient({ initialSettings }: { initialSettings: any }) {
  const [settings, setSettings] = useState(initialSettings);
  const [saving, setSaving] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await saveSettings(settings);
    setSaving(false);
    alert("Settings saved successfully!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleImageChange = (name: string, url: string) => {
    setSettings({ ...settings, [name]: url });
  };

  return (
    <div className="admin-page">
      <h1>Global Website Settings</h1>
      <form onSubmit={handleSave} className="admin-form-container" style={{ maxWidth: '800px' }}>
        
        <h3 style={{ marginTop: '2rem' }}>Logos</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <ImageUploader label="Header Logo" value={settings.logoUrl || ""} onChange={(url) => handleImageChange("logoUrl", url)} />
          <ImageUploader label="Footer Logo" value={settings.footerLogoUrl || ""} onChange={(url) => handleImageChange("footerLogoUrl", url)} />
        </div>

        <h3 style={{ marginTop: '2rem' }}>Header Contact Info</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label>Header Phone</label>
            <input name="headerPhone" value={settings.headerPhone || ""} onChange={handleChange} />
          </div>
          <div>
            <label>Header Email</label>
            <input name="headerEmail" value={settings.headerEmail || ""} onChange={handleChange} />
          </div>
        </div>

        <h3 style={{ marginTop: '2rem' }}>Footer Contact Info</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label>Footer Address (HTML allowed)</label>
            <textarea name="footerAddress" value={settings.footerAddress || ""} onChange={handleChange} rows={3} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label>Footer Phone</label>
              <input name="footerPhone" value={settings.footerPhone || ""} onChange={handleChange} />
            </div>
            <div>
              <label>Footer Email</label>
              <input name="footerEmail" value={settings.footerEmail || ""} onChange={handleChange} />
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: '2rem' }}>Social Media Links</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label>Facebook</label>
            <input name="socialFacebook" value={settings.socialFacebook || ""} onChange={handleChange} />
          </div>
          <div>
            <label>LinkedIn</label>
            <input name="socialLinkedin" value={settings.socialLinkedin || ""} onChange={handleChange} />
          </div>
          <div>
            <label>Instagram</label>
            <input name="socialInstagram" value={settings.socialInstagram || ""} onChange={handleChange} />
          </div>
          <div>
            <label>YouTube</label>
            <input name="socialYoutube" value={settings.socialYoutube || ""} onChange={handleChange} />
          </div>
        </div>

        <h3 style={{ marginTop: '2rem' }}>Other</h3>
        <div>
          <label>Copyright Text</label>
          <input name="copyrightText" value={settings.copyrightText || ""} onChange={handleChange} />
        </div>

        <button type="submit" disabled={saving} style={{ marginTop: '2rem', width: '100%' }}>
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </form>
    </div>
  );
}
