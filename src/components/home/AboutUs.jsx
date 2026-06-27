import React from 'react';
import { Play, Award, Building, Heart, Users } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { value: '15+', label: 'Years of Excellence', icon: <Award size={24} color="var(--accent)" /> },
    { value: '2500+', label: 'Projects Completed', icon: <Building size={24} color="var(--accent)" /> },
    { value: '500+', label: 'Happy Clients', icon: <Heart size={24} color="var(--accent)" /> },
    { value: '100+', label: 'Team Members', icon: <Users size={24} color="var(--accent)" /> }
  ];

  return (
    <section id="about-section" style={{
      background: 'var(--bg-secondary)',
      padding: '90px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Column 1: Image with Play Video Button */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              position: 'relative',
              cursor: 'pointer'
            }} className="image-hover-zoom">
              <img 
                src="/images/about_office.png" 
                alt="ACME Bricks Office" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              {/* Play Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(5px)',
                borderRadius: '999px',
                padding: '10px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  background: 'var(--accent)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Play size={14} color="#fff" style={{ marginLeft: '2px' }} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>Watch Video</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-secondary)', lineHeight: 1.2 }}>About Our Company</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Corporate Details */}
          <div>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>
              | ABOUT ACME BRICKS
            </div>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '20px'
            }}>
              Quality Bricks. Stronger Structures. Trusted by Generations.
            </h2>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '30px'
            }}>
              ACME Bricks is a leading manufacturer of high quality construction materials with state-of-the-art technology and stringent quality control. We are committed to providing sustainable and durable building solutions.
            </p>
            <button 
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '13px', fontWeight: 600, borderRadius: '6px' }}
            >
              KNOW MORE ABOUT US
            </button>
          </div>

          {/* Column 3: Metrics Grid (2x2) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px'
          }}>
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '24px 16px',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.015)',
                  transition: 'var(--transition)'
                }}
                className="stat-card"
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '4px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.2
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
