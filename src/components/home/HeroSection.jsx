import React from 'react';
import { ShieldCheck, Leaf, Clock, Phone, MessageSquare, Mail } from 'lucide-react';
import { getImageUrl } from '../../utils/imageHelper.js';
import ScrollReveal from '../ScrollReveal.jsx';

export default function HeroSection({ onExploreClick, onQuoteClick }) {
  return (
    <div style={{
      position: 'relative',
      backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.75)), url('${getImageUrl('/images/hero_bg.png')}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '650px',
      display: 'flex',
      alignItems: 'center',
      color: '#ffffff',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        paddingTop: '60px',
        paddingBottom: '80px',
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {/* Tagline */}
        <ScrollReveal animation="slide-up" delay={100}>
          <div style={{
            fontSize: '14px',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            PREMIUM QUALITY BRICKS & BLOCKS
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal animation="slide-up" delay={250} as="h1" style={{
          fontSize: '56px',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '20px',
          maxWidth: '800px'
        }}>
          Building Stronger Foundations for Tomorrow
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal animation="slide-up" delay={400} as="p" style={{
          fontSize: '18px',
          color: '#cbd5e1',
          maxWidth: '700px',
          lineHeight: '1.6',
          marginBottom: '40px'
        }}>
          Manufacturer of high quality Fly Ash Bricks, Solid Blocks, Paver Blocks & Interlock Blocks for a stronger and sustainable tomorrow.
        </ScrollReveal>

        {/* Feature Icons Row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          marginBottom: '50px'
        }}>
          <ScrollReveal animation="fade-in" delay={550}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: 'rgba(124, 161, 58, 0.2)', padding: '8px', borderRadius: '50%' }}>
                <ShieldCheck size={20} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>Premium Quality</div>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>Tested & Certified</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={700}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: 'rgba(124, 161, 58, 0.2)', padding: '8px', borderRadius: '50%' }}>
                <Leaf size={20} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>Eco Friendly</div>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>Sustainable Choice</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={850}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ background: 'rgba(124, 161, 58, 0.2)', padding: '8px', borderRadius: '50%' }}>
                <Clock size={20} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>Timely Delivery</div>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>On Time, Every Time</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA Buttons */}
        <ScrollReveal animation="slide-up" delay={1000}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={onExploreClick}
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontSize: '15px', borderRadius: '6px' }}
            >
              EXPLORE PRODUCTS
            </button>
            <button 
              onClick={onQuoteClick}
              className="btn"
              style={{
                padding: '14px 28px',
                fontSize: '15px',
                borderRadius: '6px',
                background: 'transparent',
                color: '#ffffff',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              GET A QUOTE
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Floating Sticky Sidebar (Fixed on screen right) */}
      <ScrollReveal animation="slide-left" delay={1150} style={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 99,
        display: 'flex',
        flexDirection: 'column',
        gap: '2px'
      }}>
        <a 
          href="https://wa.me/911234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            background: '#1f2d3d',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 16px',
            fontSize: '13px',
            fontWeight: 600,
            borderTopLeftRadius: '6px',
            borderBottomLeftRadius: '6px',
            boxShadow: '-2px 4px 10px rgba(0,0,0,0.1)',
            width: '120px',
            justifyContent: 'flex-start',
            transition: 'var(--transition)'
          }}
          className="floating-widget-link"
        >
          <MessageSquare size={16} style={{ color: '#25D366' }} />
          <span>WhatsApp</span>
        </a>

        <a 
          href="tel:+911234567890"
          style={{
            background: '#1f2d3d',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 16px',
            fontSize: '13px',
            fontWeight: 600,
            boxShadow: '-2px 4px 10px rgba(0,0,0,0.1)',
            width: '120px',
            justifyContent: 'flex-start',
            transition: 'var(--transition)'
          }}
          className="floating-widget-link"
        >
          <Phone size={16} style={{ color: 'var(--accent)' }} />
          <span>Call Now</span>
        </a>

        <a 
          href="mailto:info@acmebricks.in"
          style={{
            background: '#1f2d3d',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 16px',
            fontSize: '13px',
            fontWeight: 600,
            borderBottomLeftRadius: '6px',
            boxShadow: '-2px 4px 10px rgba(0,0,0,0.1)',
            width: '120px',
            justifyContent: 'flex-start',
            transition: 'var(--transition)'
          }}
          className="floating-widget-link"
        >
          <Mail size={16} style={{ color: '#38bdf8' }} />
          <span>Email Us</span>
        </a>
      </ScrollReveal>
    </div>
  );
}
