import React from 'react';
import { Star, Navigation } from 'lucide-react';

export default function ContactMap() {
  return (
    <section style={{ padding: '60px 0', background: '#ffffff' }}>
      <div className="container">
        <div className="contact-map-section">
          {/* Map Overlay Card */}
          <div className="contact-map-card animate-fade-in">
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1e293b', marginBottom: '8px' }}>
              ACME Bricks
            </h3>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>
              123 Industrial Area, Coimbatore - 641 021,<br />
              Tamil Nadu, India
            </p>
            
            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>4.8</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>(120 Reviews)</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
              <a 
                href="https://maps.google.com/?q=123+Industrial+Area,+Coimbatore+-+641021,+Tamil+Nadu,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent)', transition: 'var(--transition)' }}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                View larger map
              </a>
              
              <a 
                href="https://maps.google.com/?daddr=123+Industrial+Area,+Coimbatore+-+641021,+Tamil+Nadu,+India"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  padding: '6px 12px',
                  fontSize: '11px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Navigation size={10} fill="#ffffff" />
                Directions
              </a>
            </div>
          </div>

          {/* Interactive Map Iframe */}
          <iframe 
            src="https://maps.google.com/maps?q=123%20Industrial%20Area%2C%20Coimbatore%20-%20641%20021%2C%20Tamil%20Nadu%2C%20India&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="ACME Bricks Location Map"
            className="contact-map-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
