import React from 'react';
import { Building, Settings, Layers, Trophy, Landmark, Flame } from 'lucide-react';

export default function AboutJourney() {
  const milestones = [
    { year: '2008', title: 'Company Established', icon: <Building size={20} color="var(--accent)" /> },
    { year: '2010', title: 'Installed First Fully Automatic Plant', icon: <Settings size={20} color="var(--accent)" /> },
    { year: '2014', title: 'Expanded Product Range', icon: <Layers size={20} color="var(--accent)" /> },
    { year: '2018', title: 'ISO Certification Achieved', icon: <Trophy size={20} color="var(--accent)" /> },
    { year: '2021', title: 'Expanded Manufacturing Capacity', icon: <Landmark size={20} color="var(--accent)" /> },
    { year: '2024', title: 'Continuing Innovation for a Better Tomorrow', icon: <Flame size={20} color="var(--accent)" /> }
  ];

  return (
    <section style={{
      background: 'var(--bg-secondary)',
      padding: '80px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        {/* Section Title */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: 800,
          color: 'var(--text-primary)',
          textAlign: 'left',
          marginBottom: '50px',
          borderBottom: '2px solid var(--accent)',
          display: 'inline-block',
          paddingBottom: '8px'
        }}>
          Our Journey
        </h2>

        {/* Milestone Steps */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '20px',
          position: 'relative'
        }} className="timeline-container">
          
          {milestones.map((milestone, idx) => (
            <div 
              key={idx}
              style={{
                flex: '1 1 150px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minWidth: '140px',
                position: 'relative'
              }}
              className="timeline-item"
            >
              {/* Icon Circle */}
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '2px dashed var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
                zIndex: 2
              }}>
                {milestone.icon}
              </div>

              {/* Year Label */}
              <div style={{
                fontSize: '18px',
                fontWeight: 800,
                color: 'var(--accent)',
                marginBottom: '6px'
              }}>
                {milestone.year}
              </div>

              {/* Title Description */}
              <p style={{
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
                maxWidth: '130px'
              }}>
                {milestone.title}
              </p>

              {/* Horizontal Connecting Line (displayed between items on desktop) */}
              {idx !== milestones.length - 1 && (
                <div className="timeline-connector" style={{
                  position: 'absolute',
                  top: '26px',
                  left: 'calc(50% + 26px)',
                  width: 'calc(100% - 52px)',
                  height: '1px',
                  borderTop: '2px dotted var(--border)',
                  zIndex: 1
                }} />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
