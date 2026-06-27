import React from 'react';
import { Home, Mail, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{
      background: 'var(--bg-dark)',
      color: '#e2e8f0',
      fontSize: '13px',
      padding: '8px 0',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        {/* Welcome message */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Home size={14} style={{ color: 'var(--accent)' }} />
          <span>Welcome to ACME Bricks</span>
        </div>

        {/* Contact info and Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a href="mailto:info@acmebricks.in" style={{ display: 'flex', alignItems: 'center', gap: '6px', hover: { color: 'var(--accent)' } }}>
            <Mail size={14} style={{ color: 'var(--accent)' }} />
            <span>info@acmebricks.in</span>
          </a>
          <a href="tel:+911234567890" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Phone size={14} style={{ color: 'var(--accent)' }} />
            <span>+91 12345 67890</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '15px' }}>
            <a href="#" aria-label="Facebook" style={{ opacity: 0.8 }}><Facebook size={14} /></a>
            <a href="#" aria-label="Instagram" style={{ opacity: 0.8 }}><Instagram size={14} /></a>
            <a href="#" aria-label="LinkedIn" style={{ opacity: 0.8 }}><Linkedin size={14} /></a>
            <a href="#" aria-label="YouTube" style={{ opacity: 0.8 }}><Youtube size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
