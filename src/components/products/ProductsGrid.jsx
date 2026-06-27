import React from 'react';
import { ArrowRight, Check, Grid as GridIcon, List } from 'lucide-react';

export default function ProductsGrid({
  products = [],
  onViewDetails,
  sortOption,
  onSortChange
}) {
  // Use mock products if list is empty
  const displayProducts = (products && products.length > 0) ? products : [
    {
      id: '1',
      name: 'Fly Ash Brick',
      image: '/images/fly_ash_brick.png',
      dimensions: { length: 190, width: 90, height: 90 },
      strength: '7.5 N/mm²',
      characteristics: ['High Durability', 'Eco Friendly']
    },
    {
      id: '2',
      name: 'Solid Block',
      image: '/images/solid_block.png',
      dimensions: { length: 390, width: 190, height: 190 },
      strength: '5 N/mm²',
      characteristics: ['High Strength', 'Low Maintenance']
    },
    {
      id: '3',
      name: 'Paver Block',
      image: '/images/paver_block.png',
      dimensions: { length: 200, width: 100, height: 60 },
      strength: '5 N/mm²',
      characteristics: ['Anti Skid', 'High Load Bearing']
    },
    {
      id: '4',
      name: 'Interlock Block',
      image: '/images/interlock_block.png',
      dimensions: { length: 225, width: 112.5, height: 80 },
      strength: '7.5 N/mm²',
      characteristics: ['Perfect Interlocking', 'Long Lasting']
    },
    {
      id: '5',
      name: 'Hollow Block',
      image: '/images/hollow_block.png',
      dimensions: { length: 390, width: 190, height: 190 },
      strength: '5 N/mm²',
      characteristics: ['Lightweight', 'Thermal Insulation']
    },
    {
      id: '6',
      name: 'Kerb Stone',
      image: '/images/kerb_stone.png',
      dimensions: { length: 600, width: 150, height: 300 },
      strength: '5 N/mm²',
      characteristics: ['High Strength', 'Weather Resistant']
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>
      
      {/* Grid Header options */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        background: '#ffffff',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '12px 20px'
      }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
          Showing 1-{displayProducts.length} of 62 products
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Sort By Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>Sort By:</span>
            <select
              value={sortOption}
              onChange={(e) => onSortChange(e.target.value)}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                padding: '6px 12px',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* View Toggles */}
          <div style={{ display: 'flex', gap: '4px' }}>
            <button style={{
              background: 'var(--accent)',
              border: 'none',
              borderRadius: '4px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <GridIcon size={14} color="#ffffff" />
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
              <List size={14} color="var(--text-primary)" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Product Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '24px'
      }}>
        {displayProducts.map((prod) => (
          <div
            key={prod.id}
            style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
              transition: 'var(--transition)',
              position: 'relative'
            }}
            className="products-catalog-card"
          >
            {/* Card Image */}
            <div style={{
              height: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
              background: '#f8fafc',
              borderRadius: '6px',
              padding: '10px'
            }}>
              <img
                src={prod.image || '/images/fly_ash_brick.png'}
                alt={prod.name}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Product Title */}
            <h3 style={{
              fontSize: '15px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '8px'
            }}>
              {prod.name}
            </h3>

            {/* Product Specs */}
            <div style={{
              fontSize: '11px',
              color: 'var(--text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              marginBottom: '12px'
            }}>
              <span>Size: {prod.dimensions ? `${prod.dimensions.length} x ${prod.dimensions.width} x ${prod.dimensions.height}` : '190 x 90 x 90'} mm</span>
              <span>Strength: {prod.strength || '7.5 N/mm²'}</span>
            </div>

            {/* Green Checks Highlights */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 12px',
              fontSize: '11px',
              color: '#16a34a',
              fontWeight: 600,
              marginBottom: '20px',
              flex: 1
            }}>
              {(prod.characteristics || ['High Durability', 'Eco Friendly']).slice(0, 2).map((char, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Check size={11} strokeWidth={3} />
                  <span>{char}</span>
                </div>
              ))}
            </div>

            {/* Details trigger button/link row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '12px',
              borderTop: '1px solid var(--border)'
            }}>
              <button
                onClick={() => onViewDetails(prod)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                VIEW DETAILS
              </button>
              
              <button
                onClick={() => onViewDetails(prod)}
                style={{
                  background: 'var(--accent)',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(124, 161, 58, 0.2)'
                }}
                className="grid-card-arrow"
              >
                <ArrowRight size={12} color="#ffffff" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Pagination Widget */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        marginTop: '20px'
      }}>
        <button style={{
          background: '#ffffff',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontWeight: 700
        }}>&lt;</button>

        <button style={{
          background: 'var(--accent)',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontWeight: 800
        }}>1</button>

        {[2, 3, 4, 5].map((page) => (
          <button
            key={page}
            style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontWeight: 700,
              color: 'var(--text-primary)'
            }}
          >
            {page}
          </button>
        ))}

        <span style={{ fontSize: '14px', color: 'var(--text-muted)', width: '20px', textAlign: 'center' }}>..</span>

        <button style={{
          background: '#ffffff',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontWeight: 700,
          color: 'var(--text-primary)'
        }}>6</button>

        <button style={{
          background: '#ffffff',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontWeight: 700
        }}>&gt;</button>
      </div>

    </div>
  );
}
