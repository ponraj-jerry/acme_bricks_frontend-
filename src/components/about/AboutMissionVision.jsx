import React from 'react';
import { Target, Eye } from 'lucide-react';

export default function AboutMissionVision() {
  return (
    <section style={{
      background: '#ffffff',
      padding: '80px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        {/* Section Title */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: 800,
          color: 'var(--text-primary)',
          textAlign: 'left',
          marginBottom: '50px',
          borderBottom: '2px solid var(--accent)',
          display: 'inline-block',
          paddingBottom: '8px'
        }}>
          Our Mission & Vision
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }} className="about-mission-grid">
          
          {/* Left Column: Stacked Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Mission Card */}
            <div style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '28px 24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.01)'
            }}>
              <div style={{
                background: 'rgba(124, 161, 58, 0.08)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Target size={22} color="var(--accent)" />
              </div>
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '8px'
                }}>
                  Our Mission
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  To provide high quality & sustainable building materials that ensure strength, durability and customer satisfaction through continuous innovation and best practices.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '28px 24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.01)'
            }}>
              <div style={{
                background: 'rgba(124, 161, 58, 0.08)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Eye size={22} color="var(--accent)" />
              </div>
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '8px'
                }}>
                  Our Vision
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  To be India's most trusted and preferred manufacturer of construction materials, building stronger structures and a stronger tomorrow.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Warehouse Stockyard Image */}
          <div>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.05)'
            }}>
              <img 
                src="/images/about_warehouse.png" 
                alt="ACME Bricks Stacking Warehouse" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
