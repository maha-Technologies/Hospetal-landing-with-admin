import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{ background: '#0a0f1e', color: '#e2e8f0', paddingTop: 64, paddingBottom: 32 }}>
    <div className="container">
      <div className="row g-5 mb-5">
        {/* Brand */}
        <div className="col-lg-4">
          <div className="d-flex align-items-center gap-2 mb-4">
            <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg, #1565C0, #00897B)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined fill-icon" style={{ fontSize: 22, color: '#fff' }}>local_hospital</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>Town Hospital</div>
              <div style={{ fontSize: 10, color: '#64748b', letterSpacing: '0.04em', marginTop: 2 }}>SARJAPURA, BANGALORE</div>
            </div>
          </div>
          <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.8, maxWidth: 300 }}>
            A trusted community hospital serving Sarjapura and surrounding areas. Compassionate care for every family — from general medicine to advanced surgery and 24-hour diagnostics.
          </p>
          <div className="d-flex align-items-center gap-2 mt-3 p-3 rounded-3" style={{ background: 'rgba(0,137,123,0.12)', border: '1px solid rgba(0,137,123,0.2)' }}>
            <span className="material-symbols-outlined fill-icon" style={{ color: '#00c896', fontSize: 20 }}>emergency</span>
            <div>
              <div style={{ fontSize: 12, color: '#94a3b8' }}>Diagnostics Lab</div>
              <div style={{ fontWeight: 700, color: '#00c896', fontSize: 14 }}>Open 24 Hours</div>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="col-sm-6 col-lg-2">
          <h6 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Departments</h6>
          {['General OPD', 'General Surgery', 'Laparoscopic Surgery', 'Gastroenterology', 'Gynaecology', 'Paediatrics', 'Pathology Lab', 'Dermatology'].map(s => (
            <Link key={s} to="/services" style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', fontSize: 13, marginBottom: 9, transition: 'color 0.2s' }}
              onMouseOver={e => e.currentTarget.style.color = '#fff'}
              onMouseOut={e => e.currentTarget.style.color = '#94a3b8'}>
              {s}
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="col-sm-6 col-lg-2">
          <h6 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Quick Links</h6>
          {[
            { label: 'Home', to: '/' },
            { label: 'Our Doctors', to: '/doctors' },
            { label: 'Lab & Diagnostics', to: '/lab' },
            { label: 'About Us', to: '/about' },
          ].map(({ label, to }) => (
            <Link key={label} to={to} style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', fontSize: 13, marginBottom: 9, transition: 'color 0.2s' }}
              onMouseOver={e => e.currentTarget.style.color = '#fff'}
              onMouseOut={e => e.currentTarget.style.color = '#94a3b8'}>
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="col-lg-4">
          <h6 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Contact & Timings</h6>
          <div className="d-flex flex-column gap-4">
            {[
              { icon: 'location_on', text: '#41/2, Bagalur Road,\nNear Sri Rama Temple,\nSarjapura, Bengaluru — 562125' },
              { icon: 'call', text: '080-27823388\n080-27823799' },
              { icon: 'schedule', text: 'OPD: Mon–Sat, 6:00 PM – 8:00 PM\nDiagnostics Lab: Open 24 Hours' },
              { icon: 'directions_bus', text: 'Landmark: Next to Sri Rama Temple,\nSarjapura Bus Stop — 200 m' },
            ].map(({ icon, text }) => (
              <div key={icon} className="d-flex gap-3 align-items-start">
                <span className="material-symbols-outlined fill-icon" style={{ color: '#1565C0', fontSize: 20, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                <span style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #1e293b', paddingTop: 24, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ color: '#475569', fontSize: 13, margin: 0 }}>
          © 2024 Town Hospital, Sarjapura, Bengaluru. All rights reserved.
        </p>
        <div className="d-flex gap-4">
          {['Privacy Policy', 'Terms of Service'].map(s => (
            <a key={s} href="#" style={{ color: '#475569', textDecoration: 'none', fontSize: 13 }}>{s}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
