import React from 'react';

export default function ProductDetailsBreadcrumb({ productName, categoryName = 'Bricks & Blocks', onHomeClick, onProductsClick }) {
  return (
    <div style={{
      background: 'var(--bg-dark)',
      color: '#cbd5e1',
      fontSize: '12px',
      padding: '12px 0',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontWeight: 500
      }}>
        <button 
          onClick={onHomeClick}
          style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0 }}
        >
          Home
        </button>
        <span>&gt;</span>
        <button 
          onClick={onProductsClick}
          style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0 }}
        >
          Products
        </button>
        <span>&gt;</span>
        <span style={{ opacity: 0.8 }}>{categoryName}</span>
        <span>&gt;</span>
        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{productName}</span>
      </div>
    </div>
  );
}
