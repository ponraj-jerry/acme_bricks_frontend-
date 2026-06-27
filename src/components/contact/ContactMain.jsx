import React, { useState } from 'react';
import { User, Mail, Phone, FileText, MessageSquare, Send, MapPin, Clock } from 'lucide-react';

export default function ContactMain() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      alert("Please agree to the Privacy Policy.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', subject: '', message: '', agree: false });
    }, 4000);
  };

  return (
    <section style={{ background: '#f8fafc', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="contact-grid">
          {/* Left Column - Contact Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }} className="animate-fade-in">
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(124, 161, 58, 0.1)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Send size={28} />
                </div>
                <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '12px' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '400px', lineHeight: 1.6 }}>
                  Thank you for reaching out. An ACME Bricks technical representative will review your message and contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '28px', color: 'var(--text-primary)', marginBottom: '10px' }}>
                  Send Us a Message
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '32px' }}>
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '20px',
                    marginBottom: '20px'
                  }}>
                    {/* Name */}
                    <div className="input-group" style={{ marginBottom: 0 }}>
                      <label className="input-label">Your Name *</label>
                      <div className="input-container-icon">
                        <User size={18} />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="form-input"
                          placeholder="Your Name *"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="input-group" style={{ marginBottom: 0 }}>
                      <label className="input-label">Email Address *</label>
                      <div className="input-container-icon">
                        <Mail size={18} />
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="form-input"
                          placeholder="Email Address *"
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '20px',
                    marginBottom: '20px'
                  }}>
                    {/* Phone */}
                    <div className="input-group" style={{ marginBottom: 0 }}>
                      <label className="input-label">Phone Number *</label>
                      <div className="input-container-icon">
                        <Phone size={18} />
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="form-input"
                          placeholder="Phone Number *"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="input-group" style={{ marginBottom: 0 }}>
                      <label className="input-label">Subject *</label>
                      <div className="input-container-icon">
                        <FileText size={18} />
                        <input
                          type="text"
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="form-input"
                          placeholder="Subject *"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="input-group" style={{ marginBottom: '24px' }}>
                    <label className="input-label">Your Message *</label>
                    <div className="input-container-icon" style={{ alignItems: 'flex-start' }}>
                      <MessageSquare size={18} style={{ marginTop: '14px' }} />
                      <textarea
                        rows="5"
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="form-textarea"
                        placeholder="Your Message *"
                        style={{ resize: 'vertical' }}
                      ></textarea>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                    <input
                      type="checkbox"
                      id="privacy-policy-agree"
                      checked={form.agree}
                      onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                      required
                      style={{
                        width: '18px',
                        height: '18px',
                        accentColor: 'var(--accent)',
                        cursor: 'pointer'
                      }}
                    />
                    <label 
                      htmlFor="privacy-policy-agree" 
                      style={{ fontSize: '14px', color: 'var(--text-secondary)', cursor: 'pointer', userSelect: 'none' }}
                    >
                      I agree to the <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Privacy Policy</span> *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ 
                      padding: '14px 28px', 
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '14px',
                      fontWeight: 700,
                      letterSpacing: '0.05em'
                    }}
                  >
                    SEND MESSAGE
                    <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right Column - Get in Touch Info */}
          <div className="contact-info-card">
            <h2 style={{ fontSize: '28px', color: 'var(--text-primary)', marginBottom: '10px' }}>
              Get in Touch
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '16px', lineHeight: 1.6 }}>
              We are always here to assist you with the best products and services.
            </p>

            <div className="contact-info-list" style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* Location */}
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    Our Location
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    123 Industrial Area, Coimbatore - 641 021,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    Call Us
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a 
                      href="tel:+911234567890" 
                      style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                      +91 12345 67890
                    </a>
                    <a 
                      href="tel:+919876543210" 
                      style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Us */}
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    Email Us
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a 
                      href="mailto:info@acmebricks.in" 
                      style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                      info@acmebricks.in
                    </a>
                    <a 
                      href="mailto:sales@acmebricks.in" 
                      style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                      sales@acmebricks.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    Working Hours
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Mon - Sat: 8:30 AM - 6:30 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
