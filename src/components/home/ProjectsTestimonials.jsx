import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getImageUrl } from '../../utils/imageHelper.js';

export default function ProjectsTestimonials() {
  const projects = [
    { name: 'Skyrise Apartments', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&auto=format&fit=crop&q=60' },
    { name: 'National Highway-45', image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?w=400&auto=format&fit=crop&q=60' },
    { name: 'ACME Tech Park', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=60' },
    { name: 'Greenwood Pathway', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&auto=format&fit=crop&q=60' }
  ];

  return (
    <section id="projects-section" style={{
      background: '#ffffff',
      padding: '90px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '50px',
          alignItems: 'start'
        }} className="split-projects-grid">
          {/* Left Column: Our Projects */}
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '30px'
            }}>
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '6px'
                }}>
                  OUR PROJECTS
                </div>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: 'var(--text-primary)'
                }}>
                  Building a Stronger Tomorrow
                </h2>
              </div>
              <a href="#" style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em'
              }}>
                VIEW ALL PROJECTS
              </a>
            </div>

            {/* Projects Grid (2x2) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }}>
              {projects.map((proj, idx) => (
                <div 
                  key={idx}
                  style={{
                    position: 'relative',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '160px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                  }}
                  className="project-card"
                >
                  <img 
                    src={proj.image} 
                    alt={proj.name} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'var(--transition)'
                    }}
                    className="project-img"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 75%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '16px'
                  }}>
                    <span style={{
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: 700
                    }}>
                      {proj.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Testimonials */}
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '30px'
            }}>
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '6px'
                }}>
                  WHAT OUR CLIENTS SAY
                </div>
              </div>
              <a href="#" style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em'
              }}>
                VIEW ALL TESTIMONIALS
              </a>
            </div>

            {/* Testimonial Card */}
            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '40px 30px',
              position: 'relative',
              boxShadow: '0 4px 20px rgba(0,0,0,0.015)'
            }}>
              {/* Giant Quote Icon */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                fontSize: '90px',
                fontWeight: 900,
                color: 'rgba(124, 161, 58, 0.08)',
                fontFamily: 'serif',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none'
              }}>
                “
              </div>

              <p style={{
                fontSize: '15px',
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                lineHeight: '1.7',
                marginBottom: '30px',
                position: 'relative',
                zIndex: 1
              }}>
                ACME Bricks provided us with the best quality materials and exceptional service. Their products are highly durable and consistent.
              </p>

              {/* User Block */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img 
                    src={getImageUrl('/images/ramesh_avatar.png')} 
                    alt="Ramesh Kumar" 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--accent)'
                    }}
                  />
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>
                      Ramesh Kumar
                    </h4>
                    <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                      Project Manager, L&T Construction
                    </p>
                  </div>
                </div>

                {/* Stars and Nav arrows */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
                  {/* Stars Row */}
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#eab308" color="#eab308" />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button style={{
                      background: '#ffffff',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}>
                      <ChevronLeft size={14} color="var(--text-primary)" />
                    </button>
                    <button style={{
                      background: '#ffffff',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}>
                      <ChevronRight size={14} color="var(--text-primary)" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
