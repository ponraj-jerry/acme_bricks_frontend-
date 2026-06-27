import React, { useState } from 'react';
import { Check, Truck } from 'lucide-react';

export default function ProductDetailsTabs({ productName = 'Fly Ash Brick', onContactClick }) {
  const [activeTab, setActiveTab] = useState('Description');

  const tabs = [
    'Description',
    'Specifications',
    'Features',
    'Applications',
    'Advantages',
    'Downloads'
  ];

  const bulletPoints = [
    `Manufactured using high-quality raw materials`,
    `Uniform shape and smooth surface finish`,
    `Excellent strength and durability`,
    `Environment friendly and sustainable`,
    `Suitable for all types of construction`
  ];

  return (
    <section style={{
      background: '#ffffff',
      padding: '50px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '220px 1.6fr 1fr',
          gap: '30px',
          alignItems: 'start'
        }} className="product-details-tabs-layout">
          
          {/* Left Column: Vertical Tabs Menu */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            overflow: 'hidden'
          }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 20px',
                    border: 'none',
                    outline: 'none',
                    background: isActive ? 'var(--accent-glow)' : 'transparent',
                    color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    borderLeft: isActive ? '4px solid var(--accent)' : '4px solid transparent'
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Middle Column: Tab Content */}
          <div style={{ padding: '0 10px' }}>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '24px'
            }}>
              ACME {productName}s are manufactured by mixing raw materials in precise proportions and pressing them under high pressure. These bricks are well-finished, dimensionally accurate and provide excellent strength for long lasting structures.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {bulletPoints.map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-primary)', fontWeight: 550 }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(124, 161, 58, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Check size={12} color="var(--accent)" strokeWidth={3} />
                  </div>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Need Bulk Order Card */}
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '30px 24px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.01)'
          }}>
            <div style={{
              background: 'rgba(124, 161, 58, 0.08)',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <Truck size={24} color="var(--accent)" />
            </div>

            <h3 style={{
              fontSize: '18px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '10px'
            }}>
              Need Bulk Order?
            </h3>
            
            <p style={{
              fontSize: '12px',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '24px'
            }}>
              We supply bricks in bulk for projects of all sizes.
            </p>

            <button 
              onClick={onContactClick}
              className="btn"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '12px',
                fontWeight: 700,
                borderRadius: '4px',
                background: 'transparent',
                color: 'var(--accent)',
                border: '1.5px solid var(--accent)'
              }}
            >
              CONTACT OUR TEAM
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
