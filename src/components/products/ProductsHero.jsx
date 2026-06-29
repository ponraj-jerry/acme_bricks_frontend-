import React from 'react';
import { getImageUrl } from '../../utils/imageHelper.js';

export default function ProductsHero({ onHomeClick }) {
  return (
    <div style={{
      position: 'relative',
      backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.75), rgba(17, 24, 39, 0.8)), url('${getImageUrl('/images/products_hero_bg.png')}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '50px 0',
      color: '#ffffff'
    }}>
      <div className="container" style={{ textAlign: 'left' }}>
        <h1 style={{
          fontSize: '38px',
          fontWeight: 800,
          marginBottom: '8px',
          letterSpacing: '-0.02em'
        }}>
          Our Products
        </h1>
        <div style={{
          fontSize: '13px',
          fontWeight: 500,
          color: '#cbd5e1',
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>
          <button 
            onClick={onHomeClick}
            style={{
              background: 'none',
              border: 'none',
              color: '#cbd5e1',
              cursor: 'pointer',
              padding: 0,
              fontSize: 'inherit',
              fontWeight: 'inherit',
              textDecoration: 'none'
            }}
            className="breadcrumb-home-link"
          >
            Home
          </button>
          <span>&gt;</span>
          <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Products</span>
        </div>
      </div>
    </div>
  );
}
