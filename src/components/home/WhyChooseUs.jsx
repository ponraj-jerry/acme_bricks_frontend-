import React from 'react';
import { ShieldCheck, Cpu, Leaf, Clock, BadgeDollarSign, UserCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { title: 'Superior Quality', desc: 'Tested & Certified Products', icon: <ShieldCheck size={24} color="var(--accent)" /> },
    { title: 'Advanced Technology', desc: 'State-of-the-art Manufacturing', icon: <Cpu size={24} color="var(--accent)" /> },
    { title: 'Eco Friendly', desc: 'Sustainable & Green Solutions', icon: <Leaf size={24} color="var(--accent)" /> },
    { title: 'Timely Delivery', desc: 'On Time, Every Time', icon: <Clock size={24} color="var(--accent)" /> },
    { title: 'Competitive Pricing', desc: 'Best Value for Your Money', icon: <BadgeDollarSign size={24} color="var(--accent)" /> },
    { title: 'Customer Satisfaction', desc: 'Our Top Most Priority', icon: <UserCheck size={24} color="var(--accent)" /> }
  ];

  return (
    <section id="why-choose-us" style={{
      background: 'var(--bg-secondary)',
      padding: '60px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            WHY CHOOSE ACME BRICKS?
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              style={{
                flex: '1 1 160px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '10px 15px',
                borderRight: idx !== reasons.length - 1 ? '1px solid var(--border)' : 'none',
                minWidth: '150px'
              }}
              className="why-choose-card"
            >
              <div style={{
                background: 'rgba(124, 161, 58, 0.08)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                {reason.icon}
              </div>
              <h3 style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '6px',
                lineHeight: 1.2
              }}>
                {reason.title}
              </h3>
              <p style={{
                fontSize: '11px',
                color: 'var(--text-secondary)',
                lineHeight: 1.3
              }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
