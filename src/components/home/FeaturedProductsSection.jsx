import React from 'react';
import { getImageUrl } from '../../utils/imageHelper.js';
import ScrollReveal from '../ScrollReveal.jsx';

export default function FeaturedProductsSection({ products, onQuoteClick, onViewDetails }) {
  // Use first 4 products from backend if loaded, otherwise fall back to matching image specs
  const displayProducts = (products && products.length >= 4) ? products.slice(0, 4) : [
    {
      id: '1',
      name: 'Fly Ash Brick',
      image: '/images/fly_ash_brick.png',
      dimensions: { length: 230, width: 110, height: 75 },
      strength: '>= 7.5 N/mm²'
    },
    {
      id: '2',
      name: 'Solid Block',
      image: '/images/solid_block.png',
      dimensions: { length: 290, width: 190, height: 190 },
      strength: '>= 5 N/mm²'
    },
    {
      id: '3',
      name: 'Paver Block',
      image: '/images/paver_block.png',
      dimensions: { length: 200, width: 100, height: 60 },
      strength: '>= 35 N/mm²'
    },
    {
      id: '4',
      name: 'Interlock Block',
      image: '/images/interlock_block.png',
      dimensions: { length: 225, width: 112.5, height: 80 },
      strength: '>= 7.5 N/mm²'
    }
  ];

  return (
    <section style={{
      background: 'var(--bg-secondary)',
      padding: '90px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        {/* Section Header */}
        <ScrollReveal animation="slide-up" delay={100}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              FEATURED PRODUCTS
            </div>
          </div>
        </ScrollReveal>

        {/* Products Grid (1x4) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {displayProducts.map((prod, idx) => {
            // Standardize specs in case data is from backend
            const sizeStr = prod.dimensions 
              ? `Size: ${prod.dimensions.length} x ${prod.dimensions.width} x ${prod.dimensions.height} mm` 
              : 'Size: Custom dimensions';
            const strengthStr = prod.strength || (prod.characteristics && prod.characteristics[0]) || 'Compressive Strength: High';

            return (
              <ScrollReveal 
                key={prod.id}
                animation="zoom-in" 
                delay={150 + idx * 100}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div 
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
                    transition: 'var(--transition)',
                    alignItems: 'stretch',
                    height: '100%',
                    overflow: 'hidden'
                  }}
                  className="featured-product-card"
                >
                  {/* Product Image */}
                  <div style={{
                    height: '160px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    background: '#f8fafc'
                  }}>
                    <img 
                      src={getImageUrl(prod.image)} 
                      alt={prod.name} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      className="product-img-hover"
                    />
                  </div>

                  {/* Info Wrapper with Padding */}
                  <div style={{
                    padding: '20px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      {/* Product Name */}
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '10px'
                      }}>
                        {prod.name}
                      </h3>

                      {/* Specs Column */}
                      <div style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        marginBottom: '24px'
                      }}>
                        <span>{sizeStr}</span>
                        <span>{strengthStr}</span>
                      </div>
                    </div>

                    {/* Buttons Row */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1.2fr 1fr',
                      gap: '8px'
                    }}>
                      <button 
                        onClick={() => onViewDetails && onViewDetails(prod)}
                        className="btn btn-secondary"
                        style={{
                          padding: '8px 12px',
                          fontSize: '11px',
                          fontWeight: 700,
                          borderRadius: '4px',
                          textAlign: 'center'
                        }}
                      >
                        VIEW DETAILS
                      </button>
                      <button 
                        onClick={() => onQuoteClick(prod)}
                        className="btn btn-primary"
                        style={{
                          padding: '8px 12px',
                          fontSize: '11px',
                          fontWeight: 700,
                          borderRadius: '4px',
                          textAlign: 'center'
                        }}
                      >
                        GET QUOTE
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
