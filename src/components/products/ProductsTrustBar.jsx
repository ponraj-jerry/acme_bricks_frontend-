import React from 'react';
import { ShieldCheck, Cpu, Leaf, Truck, BadgeDollarSign, Headphones } from 'lucide-react';

export default function ProductsTrustBar() {
  const trustItems = [
    { title: 'Superior Quality', desc: 'Tested & certified products', icon: <ShieldCheck size={22} color="var(--accent)" /> },
    { title: 'Advanced Technology', desc: 'State-of-the-art manufacturing', icon: <Cpu size={22} color="var(--accent)" /> },
    { title: 'Eco Friendly', desc: 'Sustainable & green solutions', icon: <Leaf size={22} color="var(--accent)" /> },
    { title: 'Timely Delivery', desc: 'On time, every time across India', icon: <Truck size={22} color="var(--accent)" /> },
    { title: 'Competitive Pricing', desc: 'Best quality at best prices', icon: <BadgeDollarSign size={22} color="var(--accent)" /> },
    { title: 'Customer Support', desc: 'We are here to help you', icon: <Headphones size={22} color="var(--accent)" /> }
  ];

  return (
    <div style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '50px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          gap: '24px'
        }} className="trustbar-container">
          {trustItems.map((item, idx) => (
            <div 
              key={idx}
              style={{
                flex: '1 1 150px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minWidth: '140px',
                borderRight: idx !== trustItems.length - 1 ? '1px solid var(--border)' : 'none'
              }}
              className="trustbar-item"
            >
              <div style={{
                background: 'rgba(124, 161, 58, 0.08)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px'
              }}>
                {item.icon}
              </div>
              <h4 style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '4px',
                lineHeight: 1.2
              }}>
                {item.title}
              </h4>
              <p style={{
                fontSize: '11px',
                color: 'var(--text-secondary)',
                lineHeight: 1.3,
                maxWidth: '120px'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
