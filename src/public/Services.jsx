import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
};

const SERVICES = [
  {
    icon: 'cardiology',
    title: 'Cardiology',
    color: '#ef4444', bg: '#fff5f5',
    desc: 'Heart health excellence with state-of-the-art diagnostic labs and minimally invasive surgical solutions. 15,000+ successful cardiac procedures annually.',
    link: '/cardiology',
    features: ['Coronary Angioplasty', 'TAVR Valve Replacement', '24/7 Cardiac ER', 'Heart Failure Management'],
    stats: '15,000+ procedures/year',
  },
  {
    icon: 'psychology',
    title: 'Neurology',
    color: '#8b5cf6', bg: '#f5f3ff',
    desc: 'Expert management of complex neurological disorders — from stroke and epilepsy to chronic migraine and sleep disorders.',
    link: '#',
    features: ['Stroke Recovery Unit', 'Epilepsy Management', 'Sleep Studies', 'Neuro-Navigation Surgery'],
    stats: '98% diagnostic accuracy',
  },
  {
    icon: 'child_care',
    title: 'Pediatrics',
    color: '#f59e0b', bg: '#fffbeb',
    desc: 'Compassionate specialized care for patients from birth through adolescence in a child-friendly environment.',
    link: '#',
    features: ['Newborn Intensive Care', 'Pediatric Surgery', 'Childhood Vaccinations', 'Growth & Development'],
    stats: '5.0★ patient satisfaction',
  },
  {
    icon: 'settings_accessibility',
    title: 'Orthopedics',
    color: '#10b981', bg: '#f0fdf4',
    desc: 'Robotic-assisted joint replacement and sports medicine programs for faster recovery and perfect anatomical alignment.',
    link: '#',
    features: ['Robotic Joint Replacement', 'Sports Medicine', '3D-Printed Prosthetics', 'Spinal Surgery'],
    stats: '6-week avg recovery',
  },
  {
    icon: 'biotech',
    title: 'Advanced Labs',
    color: '#06b6d4', bg: '#ecfeff',
    desc: 'High-precision molecular diagnostics and imaging enabling early disease detection and targeted treatment planning.',
    link: '/clinical-precision',
    features: ['AI-Assisted Radiology', 'Molecular Pathology', 'Genetic Testing', 'MRI & PET Scanning'],
    stats: '2M+ tests annually',
  },
  {
    icon: 'emergency',
    title: '24/7 Emergency',
    color: '#ef4444', bg: '#fff5f5',
    desc: 'Rapid-response trauma unit with sub-90-minute door-to-treatment time, staffed around the clock by specialist teams.',
    link: '#',
    features: ['Trauma Unit', 'Resuscitation Bay', 'Triage & Fast Track', 'Air Ambulance Access'],
    stats: '<90 min door-to-treatment',
  },
];

const Services = () => {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #1e2d4a 50%, #1a3a6e 100%)',
        padding: '80px 0 60px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 60%, rgba(26,115,232,0.12) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="mc-badge mc-badge-blue d-inline-flex mb-4">
            <span className="material-symbols-outlined fill-icon" style={{ fontSize: 14 }}>local_hospital</span>
            40+ Specialized Clinics
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: '#fff', marginBottom: 16 }}>
            Our Medical Services
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 18, maxWidth: 560, margin: '0 auto' }}>
            Multidisciplinary teams powered by advanced technology across every major medical specialty.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-py" style={{ background: 'var(--mc-surface)' }}>
        <div className="container">
          <div className="row g-4">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="col-md-6 col-lg-4">
                <AnimatedSection delay={i * 80}>
                  <div className="mc-card h-100 d-flex flex-column">
                    {/* Header */}
                    <div className="p-4" style={{ borderBottom: '1px solid var(--mc-border)' }}>
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div style={{ width: 52, height: 52, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span className="material-symbols-outlined fill-icon" style={{ color: s.color, fontSize: 26 }}>{s.icon}</span>
                        </div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{s.title}</h3>
                      </div>
                      <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                    </div>

                    {/* Features */}
                    <div className="p-4 flex-grow-1">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {s.features.map(f => (
                          <div key={f} className="d-flex align-items-center gap-2">
                            <span className="material-symbols-outlined fill-icon" style={{ color: s.color, fontSize: 16 }}>check_circle</span>
                            <span style={{ fontSize: 13, color: '#475569' }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4" style={{ borderTop: '1px solid var(--mc-border)', background: s.bg }}>
                      <div className="d-flex align-items-center justify-content-between">
                        <span style={{ fontSize: 12, fontWeight: 700, color: s.color }}>{s.stats}</span>
                        <Link to={s.link} className="d-flex align-items-center gap-1"
                          style={{ fontSize: 13, fontWeight: 600, color: s.color, textDecoration: 'none' }}>
                          Learn More
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1a73e8, #1557b0)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: 12 }}>
              Need Help Choosing a Service?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, maxWidth: 440, margin: '0 auto 36px' }}>
              Our care coordinators are available 24/7 to help guide you to the right specialist.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="tel:5551234567" className="btn-mc-green" style={{ fontSize: 16, padding: '14px 36px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
                Call Us Now
              </a>
              <Link to="/doctors" className="btn-mc-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff', fontSize: 16, padding: '12px 36px' }}>
                Browse Doctors
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
