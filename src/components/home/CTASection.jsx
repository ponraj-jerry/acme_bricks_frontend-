import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import ScrollReveal from '../ScrollReveal.jsx';

export default function CTASection({ onQuoteClick }) {
  return (
    <div style={{
      background: 'var(--bg-dark)',
      color: '#ffffff',
      padding: '50px 0',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '30px'
      }}>
        {/* Left Side: Call to action Text */}
        <ScrollReveal animation="slide-right" delay={100} style={{ flex: '1 1 400px' }}>
          <div>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '8px'
            }}>
              Need Quality Bricks for Your Next Project?
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#94a3b8'
            }}>
              Get in touch with us today for the best quotes and solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Right Side: Quick Action buttons */}
        <ScrollReveal animation="slide-left" delay={250}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={onQuoteClick}
              className="btn btn-primary"
              style={{
                padding: '12px 24px',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '9999px'
              }}
            >
              GET A QUOTE
            </button>
            
            <a 
              href="tel:+911234567890"
              className="btn"
              style={{
                padding: '12px 24px',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '9999px',
                background: 'transparent',
                color: '#ffffff',
                border: '1.5px solid rgba(255, 255, 255, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Phone size={14} color="var(--accent)" />
              <span>CALL NOW</span>
            </a>

            <a 
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                padding: '12px 24px',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '9999px',
                background: 'transparent',
                color: '#ffffff',
                border: '1.5px solid rgba(255, 255, 255, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MessageSquare size={14} style={{ color: '#25D366' }} />
              <span>WHATSAPP</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
