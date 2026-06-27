import React from 'react';
import { Phone } from 'lucide-react';

export default function ContactHero({ onHomeClick }) {
  return (
    <section className="contact-hero">
      <div className="container">
        <div className="contact-hero-container">
          <div className="contact-hero-left">
            {/* Tagline */}
            <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Contact Us
            </div>
            
            {/* Heading */}
            <h1 style={{
              fontSize: '44px',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '20px'
            }}>
              We're Here to Help You<br />Build Stronger
            </h1>
            
            {/* Breadcrumb */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: '#cbd5e1'
            }}>
              <span 
                onClick={onHomeClick} 
                style={{ cursor: 'pointer', transition: 'var(--transition)' }}
                className="hover-opacity"
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
              >
                Home
              </span>
              <span>&gt;</span>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Contact Us</span>
            </div>
          </div>
          
          <div className="contact-hero-right">
            <div className="contact-question-card">
              <div style={{
                background: 'rgba(124, 161, 58, 0.15)',
                color: 'var(--accent)',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={24} />
              </div>
              <div>
                <span style={{ fontSize: '13px', color: '#cbd5e1', display: 'block', marginBottom: '4px' }}>
                  Have Any Questions?
                </span>
                <a 
                  href="tel:+911234567890" 
                  style={{ 
                    fontSize: '24px', 
                    fontWeight: 700, 
                    color: '#ffffff', 
                    display: 'block',
                    marginBottom: '4px',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                >
                  +91 12345 67890
                </a>
                <span style={{ fontSize: '12px', color: '#94a3b8', display: 'block' }}>
                  Mon - Sat: 8:30 AM - 6:30 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
