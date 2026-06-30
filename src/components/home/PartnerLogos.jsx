import React from 'react';
import ScrollReveal from '../ScrollReveal.jsx';

export default function PartnerLogos() {
  const partners = [
    { name: 'TATA PROJECTS', style: { fontWeight: 800, letterSpacing: '2px' } },
    { name: 'LARSEN & TOUBRO', style: { fontWeight: 700, fontStyle: 'italic' } },
    { name: 'adani', style: { fontWeight: 800, fontStyle: 'normal', color: '#4b5563' } },
    { name: 'NCC', style: { fontWeight: 900, fontSize: '24px', letterSpacing: '1px' } },
    { name: 'SHAPOORJI PALLONJI', style: { fontWeight: 600, letterSpacing: '0.5px' } },
    { name: 'JINDAL STEEL & POWER', style: { fontWeight: 700, letterSpacing: '1px', textDecoration: 'overline' } }
  ];

  return (
    <div style={{
      background: '#ffffff',
      padding: '40px 0',
      borderBottom: '1px solid #f1f5f9'
    }}>
      <div className="container">
        <ScrollReveal animation="fade-in" delay={100}>
          <p style={{
            textAlign: 'center',
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--text-muted)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '24px'
          }}>
            TRUSTED BY LEADING COMPANIES
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={200}>
          <div className="logo-ticker-container">
            <div className="logo-ticker-track">
              {[...partners, ...partners].map((partner, idx) => (
                <div 
                  key={idx}
                  style={{
                    fontSize: '16px',
                    color: '#374151',
                    textAlign: 'center',
                    userSelect: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '200px',
                    marginRight: '60px',
                    flexShrink: 0,
                    ...partner.style
                  }}
                >
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
