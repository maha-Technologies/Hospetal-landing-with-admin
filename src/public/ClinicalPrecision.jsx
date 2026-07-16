import React, { useEffect, useRef } from 'react';
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

const TECH_FEATURES = [
  { icon: 'biotech',    title: 'Advanced Diagnostics',   color: '#1a73e8', bg: '#e8f0fe', desc: 'High-resolution imaging centers and molecular labs enable early detection and precise targeting before conditions advance.' },
  { icon: 'memory',     title: 'AI-Assisted Analysis',   color: '#8b5cf6', bg: '#f5f3ff', desc: 'Artificial intelligence integrated into pathology and radiology workflows, double-checking findings and drastically reducing error.' },
  { icon: 'settings_accessibility', title: 'Robotic Prosthetics', color: '#10b981', bg: '#f0fdf4', desc: 'Custom 3D-printed joints and robotic-assisted surgeries for faster recovery times and perfect anatomical alignment.' },
  { icon: 'genome',     title: 'Genomic Medicine',       color: '#f59e0b', bg: '#fffbeb', desc: 'Personalized cancer treatment plans built from each patient\'s unique genetic profile, maximizing therapeutic efficacy.' },
  { icon: 'monitor_heart', title: 'Remote Monitoring',  color: '#ef4444', bg: '#fff5f5', desc: 'Continuous post-operative vital sign monitoring via wearable sensors, with instant alerts to our clinical teams.' },
  { icon: 'psychology', title: 'Neuro-Navigation',       color: '#06b6d4', bg: '#ecfeff', desc: 'Real-time brain mapping during surgery, enabling neurosurgeons to operate with unprecedented precision and safety.' },
];

const ClinicalPrecision = () => {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a0a2e 0%, #1a1a5e 40%, #2563eb 100%)', minHeight: '70vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, left: '50%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="mc-badge d-inline-flex mb-4" style={{ background: 'rgba(139,92,246,0.15)', color: '#c4b5fd' }}>
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: 14 }}>precision_manufacturing</span>
                State-of-the-Art Technology
              </div>
              <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: '#fff', marginBottom: 20 }}>
                Clinical Precision<br />
                <span style={{ color: '#a5b4fc' }}>at Every Step</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.7, maxWidth: 480, marginBottom: 40 }}>
                Discover how MediCore leverages next-generation medical technology, artificial intelligence, and robotic assistance to ensure unparalleled accuracy in diagnosis and treatment.
              </p>
              <a href="#technology" className="btn-mc-primary" style={{ background: '#8b5cf6', boxShadow: '0 8px 24px rgba(139,92,246,0.35)', fontSize: 16, padding: '14px 32px' }}>
                Explore Technology
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden position-relative" style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.5)', border: '2px solid rgba(139,92,246,0.3)' }}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA"
                  alt="Robotic Surgery" className="w-100 object-cover" style={{ height: 420 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,46,0.8), transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: 24, left: 24, color: '#fff' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Robotic Surgery Wing</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>Minimally invasive. Maximum precision.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Grid */}
      <section className="section-py" id="technology" style={{ background: '#fff' }}>
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-5">
              <div className="mc-badge mc-badge-blue d-inline-flex mb-3">Pioneering Innovation</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#0f172a' }}>Pioneering Healthcare Innovation</h2>
              <p style={{ color: '#64748b', fontSize: 17, maxWidth: 580, margin: '12px auto 0' }}>
                We continually invest in the latest advancements to offer our patients the safest, fastest, and most effective treatments available today.
              </p>
            </div>
          </AnimatedSection>

          <div className="row g-4">
            {TECH_FEATURES.map((f, i) => (
              <div key={f.title} className="col-md-4">
                <AnimatedSection delay={i * 100}>
                  <div className="mc-card p-5 h-100">
                    <div style={{ width: 64, height: 64, borderRadius: 18, background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: f.color, fontSize: 30 }}>{f.icon}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>{f.title}</h3>
                    <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="section-py-sm" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #2563eb 100%)' }}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { value: '98%', label: 'Diagnostic Accuracy' },
              { value: '3.2s', label: 'Avg AI Analysis Time' },
              { value: '500+', label: 'Robotic Procedures/Year' },
              { value: '12', label: 'Research Publications' },
            ].map((s, i) => (
              <div key={s.label} className="col-sm-6 col-lg-3">
                <AnimatedSection delay={i * 100}>
                  <div style={{ color: '#fff' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginTop: 8 }}>{s.label}</div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClinicalPrecision;
