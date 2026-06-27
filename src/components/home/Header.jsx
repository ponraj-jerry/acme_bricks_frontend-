import React, { useState } from 'react';
import { Layers, Menu, X } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateToSection = (tab, sectionId) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', action: () => navigateToSection('home'), highlight: activeTab === 'home' },
    { label: 'About Us', action: () => navigateToSection('about'), highlight: activeTab === 'about' },
    { label: 'Products', action: () => navigateToSection('products'), highlight: activeTab === 'products' },
    // { label: 'Calculator', action: () => navigateToSection('calculator'), highlight: activeTab === 'calculator' },
    // { label: 'Projects', action: () => navigateToSection('home', 'projects-section') },
    // { label: 'Admin', action: () => navigateToSection('admin'), highlight: activeTab === 'admin' },
    { label: 'Contact Us', action: () => navigateToSection('contact'), highlight: activeTab === 'contact' }
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
      transition: 'var(--transition)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => navigateToSection('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
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
          <span style={{ fontSize: '20px', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em' }}>
            ACME<span style={{ color: 'var(--accent)' }}>BRICKS</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                fontWeight: link.highlight ? '700' : '500',
                color: link.highlight ? 'var(--accent)' : 'var(--text-primary)',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'var(--transition)',
                borderBottom: link.highlight ? '2px solid var(--accent)' : '2px solid transparent'
              }}
              className="nav-link-btn"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Get a Quote Button */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={() => navigateToSection('contact')}
            className="btn btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '13px',
              borderRadius: '9999px',
              fontWeight: 600
            }}
          >
            GET A QUOTE
          </button>
        </div>

        {/* Mobile Hamburger menu */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            display: 'none',
            color: 'var(--text-primary)'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.05)'
        }}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '8px 0',
                fontSize: '15px',
                fontWeight: link.highlight ? '700' : '500',
                color: link.highlight ? 'var(--accent)' : 'var(--text-primary)',
                cursor: 'pointer',
                borderBottom: '1px solid #f1f5f9'
              }}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => navigateToSection('contact')}
            className="btn btn-primary"
            style={{ width: '100%', padding: '12px', marginTop: '8px' }}
          >
            GET A QUOTE
          </button>
        </div>
      )}
    </nav>
  );
}
