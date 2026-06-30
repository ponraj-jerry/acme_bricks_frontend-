import React from 'react';
import { Sparkles, Compass, Hammer, Droplets, SearchCheck, Truck, ChevronRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal.jsx';

export default function ManufacturingProcess() {
  const steps = [
    { label: 'Raw Material Selection', icon: <Compass size={24} /> },
    { label: 'Batching & Mixing', icon: <Sparkles size={24} /> },
    { label: 'Pressing & Molding', icon: <Hammer size={24} /> },
    { label: 'Curing for Strength', icon: <Droplets size={24} /> },
    { label: 'Quality Inspection', icon: <SearchCheck size={24} /> },
    { label: 'Packing & Delivery', icon: <Truck size={24} /> }
  ];

  return (
    <section id="process-section" style={{
      background: '#ffffff',
      padding: '90px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        {/* Section Header */}
        <ScrollReveal animation="slide-up" delay={100}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              OUR MANUFACTURING PROCESS
            </div>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 800,
              color: 'var(--text-primary)'
            }}>
              Step by Step Towards Perfection
            </h2>
          </div>
        </ScrollReveal>

        {/* Process Flow Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* Step Node */}
              <ScrollReveal 
                animation="zoom-in" 
                delay={150 + idx * 100}
                style={{
                  flex: '1 1 120px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                {/* Outer Circle */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '2px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(124, 161, 58, 0.1)',
                  marginBottom: '16px',
                  transition: 'var(--transition)'
                }} className="process-circle">
                  {step.icon}
                </div>
                
                {/* Step Label */}
                <span style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  maxWidth: '120px',
                  lineHeight: 1.3
                }}>
                  {step.label}
                </span>
              </ScrollReveal>

              {/* Connecting Chevron (except last item) */}
              {idx !== steps.length - 1 && (
                <ScrollReveal 
                  animation="fade-in" 
                  delay={150 + idx * 100 + 50}
                  className="process-chevron" 
                  style={{
                    color: 'var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ChevronRight size={20} style={{ color: 'var(--text-muted)', opacity: 0.5 }} />
                </ScrollReveal>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
