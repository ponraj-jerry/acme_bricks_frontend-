import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getImageUrl } from '../../utils/imageHelper.js';
import ScrollReveal from '../ScrollReveal.jsx';

export default function ProjectsTestimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [animate, setAnimate] = useState(true);

  const projects = [
    { name: 'Skyrise Apartments', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&auto=format&fit=crop&q=60' },
    { name: 'National Highway-45', image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?w=400&auto=format&fit=crop&q=60' },
    { name: 'ACME Tech Park', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=60' },
    { name: 'Greenwood Pathway', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&auto=format&fit=crop&q=60' }
  ];

  const testimonials = [
    {
      name: 'Ramesh Kumar',
      role: 'Project Manager, L&T Construction',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60',
      rating: 5,
      text: 'ACME Bricks provided us with the best quality materials and exceptional service. Their products are highly durable and consistent.'
    },
    {
      name: 'Suresh Raina',
      role: 'Procurement Specialist, Tata Projects',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60',
      rating: 5,
      text: 'Extremely satisfied with the compressive strength of the Fly Ash Bricks. Delivered on-time directly to our highway construction site.'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Architect, Greenwood Designs',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60',
      rating: 5,
      text: 'Their Paver Blocks and Interlock blocks are visually stunning and highly robust. They added premium aesthetic value to our residential township project.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2000); // Autoplay every 2 seconds

    return () => clearInterval(timer);
  }, [currentIdx]);

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
      setAnimate(true);
    }, 200);
  };

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimate(true);
    }, 200);
  };

  const activeTestimonial = testimonials[currentIdx];

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
            <ScrollReveal animation="slide-right" delay={100}>
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
            </ScrollReveal>

            {/* Projects Grid (2x2) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }}>
              {projects.map((proj, idx) => (
                <ScrollReveal 
                  key={idx}
                  animation="zoom-in" 
                  delay={150 + idx * 100}
                >
                  <div 
                    style={{
                      position: 'relative',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      height: '160px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                      width: '100%'
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
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Testimonials */}
          <div>
            <ScrollReveal animation="slide-left" delay={100}>
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
            </ScrollReveal>

            {/* Testimonial Card */}
            <ScrollReveal animation="slide-left" delay={250}>
              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '40px 30px',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0,0,0,0.015)',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
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

                <div style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? 'translateY(0)' : 'translateY(5px)',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  position: 'relative',
                  zIndex: 1,
                  flex: 1
                }}>
                  <p style={{
                    fontSize: '15px',
                    color: 'var(--text-primary)',
                    fontStyle: 'italic',
                    lineHeight: '1.7',
                    marginBottom: '30px'
                  }}>
                    {activeTestimonial.text}
                  </p>
                </div>

                {/* User Block */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  opacity: animate ? 1 : 0,
                  transition: 'opacity 0.2s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img 
                      src={activeTestimonial.avatar} 
                      alt={activeTestimonial.name} 
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
                        {activeTestimonial.name}
                      </h4>
                      <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                        {activeTestimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Stars and Nav arrows */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
                    {/* Stars Row */}
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} size={12} fill="#eab308" color="#eab308" />
                      ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button 
                        onClick={handlePrev}
                        style={{
                          background: '#ffffff',
                          border: '1px solid var(--border)',
                          borderRadius: '4px',
                          width: '28px',
                          height: '28px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                        className="carousel-nav-btn"
                      >
                        <ChevronLeft size={14} color="var(--text-primary)" />
                      </button>
                      <button 
                        onClick={handleNext}
                        style={{
                          background: '#ffffff',
                          border: '1px solid var(--border)',
                          borderRadius: '4px',
                          width: '28px',
                          height: '28px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                        className="carousel-nav-btn"
                      >
                        <ChevronRight size={14} color="var(--text-primary)" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
