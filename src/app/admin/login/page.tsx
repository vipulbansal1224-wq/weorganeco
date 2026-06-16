"use client";

import { login } from "./actions";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    try {
      await login(formData);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f4f6f8' }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '300px' }}>
        <h2 style={{ textAlign: 'center', color: '#e11b22' }}>Admin Login</h2>
        <form action={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter Password" 
            required 
            style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '0.25rem' }} 
          />
          {error && <p style={{ color: 'red', fontSize: '0.8rem', margin: 0 }}>{error}</p>}
          <button type="submit" style={{ background: '#e11b22', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
