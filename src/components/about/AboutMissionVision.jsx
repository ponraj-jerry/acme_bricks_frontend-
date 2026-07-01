import React, { useState } from 'react';
import { Target, Eye, Check } from 'lucide-react';
import { getImageUrl } from '../../utils/imageHelper.js';

export default function AboutMissionVision() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section style={{
      background: '#ffffff',
      padding: '100px 0',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden'
    }}>
      {/* Self-contained styling for custom animations and tab styles */}
      <style>{`
        .tab-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-family);
          font-size: 16px;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 30px;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .tab-btn.active {
          background: var(--accent);
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(124, 161, 58, 0.25);
        }
        .tab-btn:hover:not(.active) {
          color: var(--accent);
          background: rgba(124, 161, 58, 0.05);
        }
        
        .anim-fade-left {
          animation: animFadeLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-zoom-in {
          animation: animZoomIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-fade-up {
          animation: animFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-fade-right {
          animation: animFadeRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes animFadeLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes animZoomIn {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes animFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes animFadeRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .about-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-top: 50px;
        }
        @media (max-width: 991px) {
          .about-mission-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>

      <div className="container">
        {/* Section Heading & Tags (Centered) */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            fontSize: '12px',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--accent)',
            letterSpacing: '2px',
            background: 'rgba(124, 161, 58, 0.08)',
            padding: '6px 16px',
            borderRadius: '20px',
            display: 'inline-block',
            marginBottom: '12px'
          }}>
            Purpose & Values
          </span>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>
            Our Mission & Vision
          </h2>
          
          {/* Tab Switcher Pills Container */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--bg-secondary)',
            padding: '6px',
            borderRadius: '40px',
            border: '1px solid var(--border)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
            marginTop: '10px'
          }}>
            <button 
              className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              <Target size={18} />
              Our Mission
            </button>
            <button 
              className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              <Eye size={18} />
              Our Vision
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'mission' ? (
          <div className="about-mission-grid" key="mission-tab">
            {/* Left Column: Mission Content (Slides Left) */}
            <div className="anim-fade-left">
              <div style={{
                background: 'rgba(124, 161, 58, 0.06)',
                borderRadius: '50%',
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Target size={30} color="var(--accent)" />
              </div>
              
              <h3 style={{
                fontSize: '28px',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                letterSpacing: '-0.01em'
              }}>
                Empowering Sustainable Construction
              </h3>
              
              <p style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: '1.75',
                marginBottom: '24px'
              }}>
                To provide high quality & sustainable building materials that ensure strength, durability and customer satisfaction through continuous innovation and best practices.
              </p>

              {/* Bullet Points */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { title: "Sustainable Sourcing", desc: "100% eco-friendly and locally-sourced raw materials." },
                  { title: "Uncompromising Quality", desc: "Rigorous quality controls and testing for load-bearing strength." },
                  { title: "Continuous Innovation", desc: "Using advanced kiln technology for low carbon emissions." }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      background: 'rgba(124, 161, 58, 0.1)',
                      borderRadius: '50%',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '2px',
                      flexShrink: 0
                    }}>
                      <Check size={14} color="var(--accent)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Mission Image (Zooms In) */}
            <div className="anim-zoom-in">
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                border: '1px solid var(--border)'
              }}>
                <img 
                  src={getImageUrl('/images/about_mission_premium.png')} 
                  alt="ACME Bricks Sustainable Production Line" 
                  style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.01)' }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="about-mission-grid" key="vision-tab">
            {/* Left Column: Vision Content (Slides Up) */}
            <div className="anim-fade-up">
              <div style={{
                background: 'rgba(124, 161, 58, 0.06)',
                borderRadius: '50%',
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Eye size={30} color="var(--accent)" />
              </div>
              
              <h3 style={{
                fontSize: '28px',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                letterSpacing: '-0.01em'
              }}>
                Building a Greener Tomorrow
              </h3>
              
              <p style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: '1.75',
                marginBottom: '24px'
              }}>
                To be India's most trusted and preferred manufacturer of construction materials, building stronger structures and a stronger tomorrow.
              </p>

              {/* Bullet Points */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { title: "Architectural Evolution", desc: "Shaping modern and futuristic structural designs and projects." },
                  { title: "National Trust & Leadership", desc: "Setting national benchmarks for reliable & safe materials." },
                  { title: "Eco-friendly Footprint", desc: "Leading the industry toward carbon-neutral brick development." }
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      background: 'rgba(124, 161, 58, 0.1)',
                      borderRadius: '50%',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '2px',
                      flexShrink: 0
                    }}>
                      <Check size={14} color="var(--accent)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Vision Image (Slides Right) */}
            <div className="anim-fade-right">
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
                border: '1px solid var(--border)'
              }}>
                <img 
                  src={getImageUrl('/images/about_vision_premium.png')} 
                  alt="ACME Bricks Futuristic Green Cities" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
