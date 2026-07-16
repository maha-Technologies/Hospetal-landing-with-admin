import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#0f172a', color: '#e2e8f0', paddingTop: 64, paddingBottom: 32 }}>
      <div className="container">
        <div className="row g-5 mb-5">
          {/* Brand Column */}
          <div className="col-lg-4">
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none mb-4">
              <div className="d-flex align-items-center justify-content-center rounded-3 bg-primary text-white" style={{ width: 40, height: 40 }}>
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: 22 }}>medical_services</span>
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                Town Hospital
              </span>
            </Link>
            <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.7, maxWidth: 300 }}>
              A trusted multispeciality hospital serving Sarjapura, Bangalore since decades — compassionate care for every family.
            </p>
            <div className="d-flex gap-3 mt-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map(s => (
                <a key={s} href="#" style={{ width: 38, height: 38, borderRadius: '50%', background: '#1e293b', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', textDecoration: 'none', transition: 'all 0.2s', fontSize: 15 }}
                  onMouseOver={e => { e.currentTarget.style.background='#1a73e8'; e.currentTarget.style.color='#fff'; }}
                  onMouseOut={e => { e.currentTarget.style.background='#1e293b'; e.currentTarget.style.color='#94a3b8'; }}
                >
                  <i className={`fab fa-${s}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-sm-6 col-lg-2">
            <h6 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 14 }}>Services</h6>
            {['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Oncology', 'Emergency Care'].map(s => (
              <a key={s} href="#" style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', fontSize: 14, marginBottom: 10, transition: 'color 0.2s' }}
                onMouseOver={e => e.currentTarget.style.color = '#fff'}
                onMouseOut={e => e.currentTarget.style.color = '#94a3b8'}
              >{s}</a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="col-sm-6 col-lg-2">
            <h6 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 14 }}>Quick Links</h6>
            {['About Us', 'Our Doctors', 'Success Stories', 'Research', 'Careers', 'Contact'].map(s => (
              <a key={s} href="#" style={{ display: 'block', color: '#94a3b8', textDecoration: 'none', fontSize: 14, marginBottom: 10, transition: 'color 0.2s' }}
                onMouseOver={e => e.currentTarget.style.color = '#fff'}
                onMouseOut={e => e.currentTarget.style.color = '#94a3b8'}
              >{s}</a>
            ))}
          </div>

          {/* Contact */}
          <div className="col-lg-4">
            <h6 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 14 }}>Contact Us</h6>
            <div className="d-flex flex-column gap-3">
              {[
                { icon: 'location_on', text: 'Bagalur Road, Sarjapur Road,\nNear Sri Rama Temple,\nBangalore - 560034' },
                { icon: 'call', text: '080-27823388\n080-27823799' },
                { icon: 'mail', text: 'info@townhospitalsarjapura.com' },
                { icon: 'schedule', text: 'Mon–Sat: 6:00 PM – 8:00 PM (OPD)\nDiagnostics: 24 Hours' },
              ].map(({ icon, text }) => (
                <div key={icon} className="d-flex gap-3 align-items-start">
                  <span className="material-symbols-outlined fill-icon" style={{ color: '#1a73e8', fontSize: 20, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                  <span style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: 24, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#475569', fontSize: 13, margin: 0 }}>
            © 2024 Town Hospital, Sarjapura. All rights reserved.
          </p>
          <div className="d-flex gap-4">
            {['Privacy Policy', 'Terms of Service', 'Accessibility', 'Cookie Settings'].map(s => (
              <a key={s} href="#" style={{ color: '#475569', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                onMouseOver={e => e.currentTarget.style.color = '#94a3b8'}
                onMouseOut={e => e.currentTarget.style.color = '#475569'}
              >{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
