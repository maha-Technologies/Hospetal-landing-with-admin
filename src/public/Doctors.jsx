import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useData } from '../context/DataContext';

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.opacity = '0'; el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
};

const Doctors = () => {
  const { doctors } = useData();
  const featured  = doctors.find(d => d.featured) || doctors[0];
  const rest      = doctors.filter(d => d.id !== featured?.id);

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0a0f1e,#0d2137,#1565C0)', padding: '80px 0 60px', textAlign: 'center' }}>
        <div className="container">
          <div className="mc-badge mc-badge-blue d-inline-flex mb-4">Our Medical Team</div>
          <h1 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#fff', marginBottom: 14 }}>
            Meet Our Doctors
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 17, maxWidth: 520, margin: '0 auto 32px' }}>
            Qualified, experienced and compassionate doctors dedicated to the health of every patient in Sarjapura and surrounding areas.
          </p>
          <a href="tel:08027823388" className="btn-mc-primary" style={{ fontSize: 15, background: 'linear-gradient(135deg,#1565C0,#00897B)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
            Book Appointment — 080-27823388
          </a>
        </div>
      </section>

      {/* Notice banner */}
      <div style={{ background: '#fff3e0', borderBottom: '1px solid #ffe0b2' }}>
        <div className="container py-3 d-flex align-items-start gap-3">
          <span className="material-symbols-outlined fill-icon" style={{ color: '#e65100', fontSize: 20, flexShrink: 0, marginTop: 1 }}>info</span>
          <p style={{ margin: 0, fontSize: 14, color: '#5d4037', lineHeight: 1.7 }}>
            <strong>Visiting Consultants:</strong> Gynaecology, Paediatrics, and Dermatology are served by visiting specialists.
            Please call <strong>080-27823388</strong> or <strong>080-27823799</strong> in advance to confirm availability.
          </p>
        </div>
      </div>

      {/* Featured Doctor */}
      {featured && (
        <section className="section-py" style={{ background: '#fff' }}>
          <div className="container">
            <AnimatedSection>
              <div className="mc-card overflow-hidden mb-5" style={{ border: `2px solid ${featured.deptColor || '#c62828'}20` }}>
                <div style={{ background: `linear-gradient(90deg,${featured.deptColor || '#c62828'} 0%,${featured.deptColor || '#e53935'} 100%)`, padding: '6px 24px', fontSize: 12, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  ★ {featured.featured ? 'Lead Specialist' : 'Featured'} — {featured.department}
                </div>
                <div className="row g-0">
                  <div className="col-md-4 col-lg-3">
                    <img src={featured.img} alt={featured.name} className="w-100 object-cover" style={{ height: '100%', minHeight: 320, filter: 'grayscale(10%)' }} />
                  </div>
                  <div className="col-md-8 col-lg-9 p-5">
                    <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-3">
                      <div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: 4 }}>{featured.name}</h2>
                        <p style={{ color: featured.deptColor || '#c62828', fontWeight: 700, fontSize: 15, margin: 0 }}>{featured.title}</p>
                      </div>
                      {featured.experience && (
                        <span className="px-3 py-1 rounded-pill" style={{ background: `${featured.deptColor || '#c62828'}15`, color: featured.deptColor || '#c62828', fontWeight: 700, fontSize: 13 }}>
                          {featured.experience} Experience
                        </span>
                      )}
                    </div>

                    {featured.bio && (
                      <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{featured.bio}</p>
                    )}

                    <div className="mb-4">
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Specialties / Procedures</div>
                      <div className="d-flex flex-wrap gap-2">
                        {(Array.isArray(featured.specialties) ? featured.specialties : []).map(s => (
                          <span key={s} style={{ background: `${featured.deptColor || '#c62828'}12`, border: `1px solid ${featured.deptColor || '#c62828'}25`, color: featured.deptColor || '#c62828', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 9999 }}>{s}</span>
                        ))}
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-2 mb-4">
                      <span className="material-symbols-outlined fill-icon" style={{ color: featured.deptColor || '#c62828', fontSize: 18 }}>schedule</span>
                      <span style={{ fontSize: 14, color: '#64748b' }}>Timing: <strong style={{ color: '#0f172a' }}>{featured.timing}</strong></span>
                    </div>

                    <a href={`tel:${(featured.phone || '08027823388').replace(/-/g, '')}`} className="btn-mc-primary"
                      style={{ background: featured.deptColor || '#c62828', boxShadow: `0 6px 20px ${featured.deptColor || '#c62828'}30`, fontSize: 14 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>call</span>
                      Book with {featured.name}
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Rest of Doctors Grid */}
            {rest.length > 0 && (
              <div className="row g-4">
                {rest.map((doc, i) => (
                  <div key={doc.id} className="col-md-6 col-lg-4">
                    <AnimatedSection delay={i * 100}>
                      <div className="mc-card h-100 overflow-hidden">
                        {doc.visiting && (
                          <div style={{ background: '#fff3e0', padding: '5px 16px', fontSize: 11, fontWeight: 700, color: '#e65100', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                            Visiting Consultant
                          </div>
                        )}
                        <div style={{ height: 220, overflow: 'hidden' }}>
                          <img src={doc.img} alt={doc.name} className="w-100 h-100 object-cover"
                            style={{ transition: 'transform 0.5s ease', filter: 'grayscale(15%)' }}
                            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.filter = 'grayscale(0%)'; }}
                            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'grayscale(15%)'; }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: 2 }}>{doc.name}</h3>
                          <p style={{ fontSize: 13, color: doc.deptColor || '#1565C0', fontWeight: 700, margin: '0 0 6px' }}>{doc.department}</p>
                          <p style={{ fontSize: 13, color: '#64748b', marginBottom: 12 }}>{doc.qualifications}</p>

                          <div className="d-flex flex-wrap gap-1 mb-3">
                            {(Array.isArray(doc.specialties) ? doc.specialties : []).slice(0, 3).map(s => (
                              <span key={s} style={{ background: `${doc.deptColor || '#1565C0'}12`, color: doc.deptColor || '#1565C0', fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 9999, border: `1px solid ${doc.deptColor || '#1565C0'}20` }}>{s}</span>
                            ))}
                          </div>

                          <div className="d-flex align-items-center gap-2 mb-3">
                            <span className="material-symbols-outlined fill-icon" style={{ color: doc.deptColor || '#1565C0', fontSize: 16 }}>schedule</span>
                            <span style={{ fontSize: 12, color: '#64748b' }}>{doc.timing}</span>
                          </div>

                          <a href={`tel:${(doc.phone || '08027823388').replace(/-/g, '')}`}
                            className="btn-mc-primary w-100 justify-content-center"
                            style={{ fontSize: 13, padding: '10px', background: doc.deptColor || '#1565C0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, borderRadius: 10, fontWeight: 700, color: '#fff' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>call</span>
                            {doc.visiting ? 'Confirm Availability' : 'Book Appointment'}
                          </a>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: '#0a0f1e', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="font-display" style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 10 }}>Need to See a Doctor?</h2>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 32 }}>Call us — our team will find the right appointment for you.</p>
          <div className="d-flex gap-3 flex-wrap justify-content-center">
            <a href="tel:08027823388" className="btn-mc-primary" style={{ fontSize: 15, padding: '13px 32px', background: 'linear-gradient(135deg,#1565C0,#00897B)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
              080-27823388
            </a>
            <a href="tel:08027823799" className="btn-mc-outline" style={{ fontSize: 15, padding: '11px 32px', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
              080-27823799
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
