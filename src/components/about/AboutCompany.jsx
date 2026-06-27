import React from 'react';
import { Cog, ShieldCheck, Leaf, Truck } from 'lucide-react';

export default function AboutCompany() {
  const bullets = [
    { text: 'Advanced Manufacturing Technology', icon: <Cog size={18} color="var(--accent)" /> },
    { text: 'Premium Quality Raw Materials', icon: <ShieldCheck size={18} color="var(--accent)" /> },
    { text: 'Environment Friendly & Sustainable', icon: <Leaf size={18} color="var(--accent)" /> },
    { text: 'Timely Delivery Across India', icon: <Truck size={18} color="var(--accent)" /> }
  ];

  return (
    <section style={{
      background: '#ffffff',
      padding: '80px 0 60px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '50px',
          alignItems: 'center'
        }} className="about-company-grid">
          
          {/* Left Column: Text Content and Bullets */}
          <div>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              ABOUT OUR COMPANY
            </div>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              marginBottom: '24px'
            }}>
              Building Stronger Foundations Since 2008
            </h2>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '32px'
            }}>
              ACME Bricks is a leading manufacturer of high quality Fly Ash Bricks, Solid Blocks, Paver Blocks & Interlock Blocks. With state-of-the-art technology, skilled workforce and a commitment to excellence, we deliver sustainable and durable building solutions for modern construction needs.
            </p>

            {/* 2x2 Icon Bullets Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginBottom: '36px'
            }}>
              {bullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    background: 'rgba(124, 161, 58, 0.08)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {bullet.icon}
                  </div>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3
                  }}>
                    {bullet.text}
                  </span>
                </div>
              ))}
            </div>

            <button 
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '13px', fontWeight: 600, borderRadius: '6px' }}
            >
              KNOW MORE ABOUT US
            </button>
          </div>

          {/* Right Column: Factory Image with Floating Badge */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
            }}>
              <img 
                src="/images/about_office.png" 
                alt="ACME Bricks Factory" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Floating Green Badge (bottom right) */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '20px',
              background: 'var(--accent)',
              color: '#ffffff',
              borderRadius: '8px',
              padding: '16px 24px',
              boxShadow: '0 8px 24px rgba(124, 161, 58, 0.3)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2
            }}>
              <span style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1 }}>15+</span>
              <span style={{ fontSize: '11px', fontWeight: 600, opacity: 0.9, marginTop: '4px' }}>Years of Excellence</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
