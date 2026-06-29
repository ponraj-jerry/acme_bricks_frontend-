import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getImageUrl } from '../../utils/imageHelper.js';

export default function ProductCategories({ onCategorySelect }) {
  const categories = [
    {
      name: 'Fly Ash Bricks',
      desc: 'Durable, strong and eco-friendly bricks for construction.',
      image: '/images/fly_ash_brick.png'
    },
    {
      name: 'Solid Blocks',
      desc: 'High strength blocks for load bearing structures.',
      image: '/images/solid_block.png'
    },
    {
      name: 'Paver Blocks',
      desc: 'Stylish & durable paver blocks for beautiful spaces.',
      image: '/images/paver_block.png'
    },
    {
      name: 'Interlock Blocks',
      desc: 'Perfect interlocking blocks for walls & pavements.',
      image: '/images/interlock_block.png'
    },
    {
      name: 'Hollow Blocks',
      desc: 'Lightweight blocks for versatile applications.',
      image: '/images/hollow_block.png'
    },
    {
      name: 'Kerb Stones',
      desc: 'Strong and durable kerb stones for roads & pathways.',
      image: '/images/kerb_stone.png'
    }
  ];

  return (
    <section id="categories-section" style={{
      background: '#ffffff',
      padding: '90px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            OUR PRODUCT CATEGORIES
          </div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 800,
            color: 'var(--text-primary)'
          }}>
            High Quality Products for Every Need
          </h2>
        </div>

        {/* Categories Grid (2x3 or 3x2) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              onClick={() => onCategorySelect && onCategorySelect(cat.name)}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
                transition: 'var(--transition)',
                cursor: 'pointer',
                position: 'relative'
              }}
              className="category-card"
            >
              {/* Image Container */}
              <div style={{
                height: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                padding: '10px'
              }}>
                <img 
                  src={getImageUrl(cat.image)} 
                  alt={cat.name} 
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    transition: 'var(--transition)'
                  }}
                  className="product-img-hover"
                />
              </div>

              {/* Text content */}
              <div style={{ flex: 1, paddingBottom: '20px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '8px'
                }}>
                  {cat.name}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.5'
                }}>
                  {cat.desc}
                </p>
              </div>

              {/* Arrow Indicator Button */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                right: '24px',
                background: 'var(--accent)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(124, 161, 58, 0.25)',
                transition: 'var(--transition)'
              }} className="arrow-btn">
                <ArrowRight size={14} color="#fff" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
