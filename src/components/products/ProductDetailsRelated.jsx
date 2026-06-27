import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetailsRelated({ onProductClick, currentProductId }) {
  const relatedList = [
    {
      id: '2',
      name: 'Solid Block',
      image: '/images/solid_block.png',
      dimensions: { length: 190, width: 190, height: 190 },
      strength: '5 N/mm²'
    },
    {
      id: '3',
      name: 'Paver Block',
      image: '/images/paver_block.png',
      dimensions: { length: 200, width: 100, height: 60 },
      strength: '5 N/mm²'
    },
    {
      id: '4',
      name: 'Interlock Block',
      image: '/images/interlock_block.png',
      dimensions: { length: 225, width: 112.5, height: 80 },
      strength: '7.5 N/mm²'
    },
    {
      id: '5',
      name: 'Hollow Block',
      image: '/images/hollow_block.png',
      dimensions: { length: 390, width: 190, height: 190 },
      strength: '5 N/mm²'
    },
    {
      id: '6',
      name: 'Kerb Stone',
      image: '/images/kerb_stone.png',
      dimensions: { length: 600, width: 150, height: 300 },
      strength: '5 N/mm²'
    }
  ].filter(p => p.id !== currentProductId);

  return (
    <section style={{
      background: '#ffffff',
      padding: '70px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '36px'
        }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: 800,
            color: 'var(--text-primary)'
          }}>
            You May Also Like
          </h3>
          
          {/* Slide navigation buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <ChevronLeft size={16} color="var(--text-primary)" />
            </button>
            <button style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <ChevronRight size={16} color="var(--text-primary)" />
            </button>
          </div>
        </div>

        {/* Product Cards Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '24px'
        }} className="related-products-slider">
          {relatedList.map((prod) => (
            <div 
              key={prod.id}
              onClick={() => onProductClick(prod)}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '16px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 15px rgba(0,0,0,0.005)',
                transition: 'var(--transition)'
              }}
              className="related-product-card"
            >
              {/* Product Image */}
              <div style={{
                height: '110px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
                background: '#f8fafc',
                borderRadius: '6px',
                padding: '8px'
              }}>
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>

              {/* Product Title */}
              <h4 style={{
                fontSize: '14px',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '6px'
              }}>
                {prod.name}
              </h4>

              {/* Specs */}
              <div style={{
                fontSize: '10px',
                color: 'var(--text-secondary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                marginBottom: '16px',
                flex: 1
              }}>
                <span>Size: {prod.dimensions.length} x {prod.dimensions.width} x {prod.dimensions.height} mm</span>
                <span>Strength: {prod.strength}</span>
              </div>

              {/* View Details Link */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '10px',
                borderTop: '1px solid var(--border)'
              }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-primary)' }}>VIEW DETAILS</span>
                <ArrowRight size={12} color="var(--accent)" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
