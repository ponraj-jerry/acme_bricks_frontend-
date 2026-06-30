import React from 'react';
import { Layers, Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Send } from 'lucide-react';
import { getImageUrl } from '../../utils/imageHelper.js';

export default function Footer({ onNavigate }) {
  const quickLinks = [
    { label: 'Home', url: '#' },
    { label: 'About Us', url: '#' },
    { label: 'Products', url: '#' },
    { label: 'Projects', url: '#' },
    { label: 'Gallery', url: '#' },
    { label: 'Contact Us', url: '#' }
  ];

  const productsLinks = [
    { label: 'Fly Ash Bricks', url: '#' },
    { label: 'Solid Blocks', url: '#' },
    { label: 'Paver Blocks', url: '#' },
    { label: 'Interlock Blocks', url: '#' },
    { label: 'Hollow Blocks', url: '#' },
    { label: 'Kerb Stones', url: '#' }
  ];

  const resourcesLinks = [
    { label: 'Manufacturing Process', url: '#' },
    { label: 'Quality Assurance', url: '#' },
    { label: 'FAQs', url: '#' },
    { label: 'Downloads', url: '#' },
    { label: 'Careers', url: '#' },
    { label: 'Privacy Policy', url: '#' }
  ];

  return (
    <footer style={{
      background: 'var(--bg-dark)',
      color: '#cbd5e1',
      padding: '80px 0 20px 0',
      fontSize: '13px'
    }}>
      <div className="container">
        {/* Main Columns Grid (1.2fr 0.8fr 0.8fr 0.8fr 1fr 1.2fr) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 0.8fr 0.8fr 1fr 1.2fr',
          gap: '30px',
          marginBottom: '50px',
          flexWrap: 'wrap'
        }} className="footer-columns-grid">
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', cursor: 'pointer' }}>
              <img 
                src={getImageUrl('logo.png')} 
                alt="ACME Bricks Logo" 
                style={{ height: '36px', display: 'block' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const textLogo = e.target.nextSibling;
                  if (textLogo) textLogo.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  background: 'var(--accent)',
                  padding: '6px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Layers size={18} color="#fff" />
                </div>
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                  ACME<span style={{ color: 'var(--accent)' }}>BRICKS</span>
                </span>
              </div>
            </div>
            <p style={{
              lineHeight: 1.6,
              marginBottom: '20px',
              fontSize: '13px',
              color: '#94a3b8'
            }}>
              ACME Bricks is committed to delivering high quality construction materials for a stronger and sustainable future.
            </p>
            {/* Social handles */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="#" aria-label="Facebook" style={{
                background: 'rgba(255,255,255,0.06)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)'
              }} className="footer-social-link"><Facebook size={14} /></a>
              <a href="#" aria-label="Instagram" style={{
                background: 'rgba(255,255,255,0.06)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)'
              }} className="footer-social-link"><Instagram size={14} /></a>
              <a href="#" aria-label="LinkedIn" style={{
                background: 'rgba(255,255,255,0.06)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)'
              }} className="footer-social-link"><Linkedin size={14} /></a>
              <a href="#" aria-label="YouTube" style={{
                background: 'rgba(255,255,255,0.06)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)'
              }} className="footer-social-link"><Youtube size={14} /></a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              QUICK LINKS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link) => {
                const handleClick = (e) => {
                  e.preventDefault();
                  if (!onNavigate) return;
                  if (link.label === 'Home') onNavigate('home');
                  else if (link.label === 'About Us') onNavigate('about');
                  else if (link.label === 'Products') onNavigate('products');
                  else if (link.label === 'Projects') onNavigate('home', 'projects-section');
                  else if (link.label === 'Gallery') onNavigate('home', 'projects-section');
                  else if (link.label === 'Contact Us') onNavigate('contact');
                };
                return (
                  <a 
                    key={link.label} 
                    href="#" 
                    onClick={handleClick} 
                    style={{ color: '#94a3b8', cursor: 'pointer' }} 
                    className="footer-nav-link"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              OUR PRODUCTS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {productsLinks.map((link) => {
                const handleClick = (e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('products', null, link.label);
                  }
                };
                return (
                  <a 
                    key={link.label} 
                    href="#" 
                    onClick={handleClick} 
                    style={{ color: '#94a3b8', cursor: 'pointer' }} 
                    className="footer-nav-link"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              RESOURCES
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {resourcesLinks.map((link) => {
                const handleClick = (e) => {
                  e.preventDefault();
                  if (!onNavigate) return;
                  if (link.label === 'Manufacturing Process') onNavigate('home', 'process-section');
                  else if (link.label === 'Quality Assurance') onNavigate('home', 'why-choose-us');
                  else if (link.label === 'FAQs') onNavigate('home', 'why-choose-us');
                  else if (link.label === 'Privacy Policy') onNavigate('home');
                  else onNavigate('home');
                };
                return (
                  <a 
                    key={link.label} 
                    href="#" 
                    onClick={handleClick} 
                    style={{ color: '#94a3b8', cursor: 'pointer' }} 
                    className="footer-nav-link"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 5: Contact Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <h4 style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              CONTACT INFO
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <MapPin size={14} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#94a3b8', lineHeight: 1.4 }}>
                  ACME Bricks,<br />
                  123 Industrial Area,<br />
                  Coimbatore - 641 021, Tamil Nadu
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <a href="tel:+911234567890" style={{ color: '#94a3b8' }}>+91 12345 67890</a>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <a href="mailto:info@acmebricks.in" style={{ color: '#94a3b8' }}>info@acmebricks.in</a>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Layers size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <a href="https://www.acmebricks.in" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}>www.acmebricks.in</a>
              </div>
            </div>
          </div>

          {/* Col 6: Newsletter */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              NEWSLETTER
            </h4>
            <p style={{
              color: '#94a3b8',
              lineHeight: 1.5,
              marginBottom: '16px'
            }}>
              Subscribe to our newsletter for latest updates.
            </p>
            {/* Input box */}
            <form onSubmit={(e) => e.preventDefault()} style={{
              display: 'flex',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.12)'
            }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: 'none',
                  outline: 'none',
                  padding: '10px 12px',
                  color: '#ffffff',
                  fontSize: '13px',
                  flex: 1
                }}
              />
              <button 
                type="submit"
                style={{
                  background: 'var(--accent)',
                  border: 'none',
                  outline: 'none',
                  padding: '0 12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition)'
                }}
                className="newsletter-submit-btn"
              >
                <Send size={14} color="#fff" />
              </button>
            </form>
          </div>
        </div>

        {/* Sub-footer copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '11px',
          color: '#64748b'
        }}>
          <span>© 2026 ACME Bricks. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); }} style={{ color: '#64748b' }}>Sitemap</a>
            <a href="#" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); }} style={{ color: '#64748b' }}>Terms & Conditions</a>
            <a href="#" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); }} style={{ color: '#64748b' }}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
