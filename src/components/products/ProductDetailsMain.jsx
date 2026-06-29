import React, { useState } from 'react';
import { Star, MessageSquare, Download, Share2, Shield, Leaf, Droplet, BadgeDollarSign, Maximize } from 'lucide-react';
import { getImageUrl } from '../../utils/imageHelper.js';

export default function ProductDetailsMain({ product, onQuoteClick }) {
  const [activeThumb, setActiveThumb] = useState(0);

  // Fallback specs in case they are missing from object
  const name = product.name || 'Fly Ash Brick';
  const image = getImageUrl(product.image);
  const sizeStr = product.dimensions ? `${product.dimensions.length} x ${product.dimensions.width} x ${product.dimensions.height} mm` : '190 x 90 x 90 mm';
  const strengthStr = product.strength || '7.5 N/mm²';
  
  const thumbs = [image, image, image, image, image];

  const highlights = [
    { text: 'High Durability', icon: <Shield size={14} color="var(--accent)" /> },
    { text: 'Eco Friendly', icon: <Leaf size={14} color="var(--accent)" /> },
    { text: 'Low Water Absorption', icon: <Droplet size={14} color="var(--accent)" /> },
    { text: 'Cost Effective', icon: <BadgeDollarSign size={14} color="var(--accent)" /> }
  ];

  return (
    <section style={{
      background: '#ffffff',
      padding: '60px 0 40px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '50px',
          alignItems: 'start'
        }} className="product-details-main-grid">
          
          {/* Left Column: Image Gallery Slider */}
          <div>
            {/* Main Image View */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              height: '380px'
            }}>
              {/* Best Seller badge */}
              <span style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: '#15a34a',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Best Seller
              </span>

              {/* Maximize Icon */}
              <button style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <Maximize size={14} color="var(--text-primary)" />
              </button>

              <img 
                src={thumbs[activeThumb]} 
                alt={name} 
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>

            {/* Thumbnail Selectors Slider */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '16px'
            }}>
              <button style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: 'var(--text-secondary)' }}>&lsaquo;</button>
              {thumbs.map((thumb, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveThumb(idx)}
                  style={{
                    width: '64px',
                    height: '64px',
                    background: '#f8fafc',
                    border: activeThumb === idx ? '2px solid var(--accent)' : '1px solid var(--border)',
                    borderRadius: '4px',
                    padding: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img src={thumb} alt="thumbnail" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
              ))}
              <button style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: 'var(--text-secondary)' }}>&rsaquo;</button>
            </div>
          </div>

          {/* Right Column: Title, Ratings, Specs and CTA buttons */}
          <div>
            {/* Title & Subtitle */}
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              {name}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '16px' }}>
              High Quality, Strong & Durable Bricks for Modern Construction
            </p>

            {/* Ratings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#eab308" color="#eab308" />
                ))}
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>4.8</span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>(120 Reviews)</span>
              <span style={{ fontSize: '12px', color: 'var(--border)' }}>|</span>
              <button style={{ background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 700, fontSize: '12px', cursor: 'pointer', padding: 0 }}>Add Your Review</button>
            </div>

            {/* Paragraph description */}
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              ACME {name}s are manufactured using high-quality raw materials and advanced technology to ensure superior strength, durability and consistency. Ideal for all types of construction.
            </p>

            {/* Highlight tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px 20px',
              padding: '16px 0',
              borderTop: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
              marginBottom: '24px'
            }}>
              {highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {h.icon}
                  </div>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>

            {/* Technical specs list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              {[
                { label: 'Size', val: sizeStr },
                { label: 'Strength', val: strengthStr },
                { label: 'Water Absorption', val: '< 12%' },
                { label: 'Compressive Strength', val: `>= ${strengthStr}` },
                { label: 'Color', val: 'Grey' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', fontSize: '13px', lineHeight: 1.4 }}>
                  <span style={{ width: '180px', color: 'var(--text-secondary)', fontWeight: 600 }}>{item.label}</span>
                  <span style={{ width: '20px', color: 'var(--text-muted)' }}>:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{item.val}</span>
                </div>
              ))}
            </div>

            {/* Action buttons grid (2x2) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }} className="actions-button-grid">
              
              <button 
                onClick={onQuoteClick}
                className="btn btn-primary"
                style={{ padding: '12px', fontSize: '13px', fontWeight: 700, borderRadius: '6px' }}
              >
                GET A QUOTE
              </button>

              <a 
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  padding: '12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  borderRadius: '6px',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '1.5px solid var(--border)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <MessageSquare size={14} style={{ color: '#25D366' }} />
                <span>ENQUIRE ON WHATSAPP</span>
              </a>

              <button 
                className="btn"
                style={{
                  padding: '12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  borderRadius: '6px',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '1.5px solid var(--border)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Download size={14} color="var(--accent)" />
                <span>DOWNLOAD BROCHURE</span>
              </button>

              <button 
                className="btn"
                style={{
                  padding: '12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  borderRadius: '6px',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '1.5px solid var(--border)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Share2 size={14} color="var(--text-muted)" />
                <span>SHARE PRODUCT</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
