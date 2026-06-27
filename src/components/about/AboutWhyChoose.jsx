import React from 'react';
import { ShieldCheck, Cpu, Leaf, BadgeDollarSign, Grid, Heart } from 'lucide-react';

export default function AboutWhyChoose() {
  const qualities = [
    { title: 'Superior Quality', desc: 'Tested & Certified products', icon: <ShieldCheck size={22} color="var(--accent)" /> },
    { title: 'Advanced Technology', desc: 'State-of-the-art manufacturing plants', icon: <Cpu size={22} color="var(--accent)" /> },
    { title: 'Eco Friendly', desc: 'Sustainable & green building solutions', icon: <Leaf size={22} color="var(--accent)" /> },
    { title: 'Cost Effective', desc: 'Best quality at competitive prices', icon: <BadgeDollarSign size={22} color="var(--accent)" /> },
    { title: 'Wide Range', desc: 'Complete range of bricks & blocks', icon: <Grid size={22} color="var(--accent)" /> },
    { title: 'Customer Satisfaction', desc: 'Our top most priority', icon: <Heart size={22} color="var(--accent)" /> }
  ];

  return (
    <section style={{
      background: 'var(--bg-secondary)',
      padding: '80px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 800,
            color: 'var(--text-primary)'
          }}>
            Why Choose ACME Bricks?
          </h2>
        </div>

        {/* Qualities Grid (3x2) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }} className="why-choose-grid">
          {qualities.map((item, idx) => (
            <div 
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
                transition: 'var(--transition)'
              }}
              className="quality-card"
            >
              <div style={{
                background: 'rgba(124, 161, 58, 0.08)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '6px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.4'
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
