import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

const TESTS = [
  {
    category: 'Haematology',
    icon: 'bloodtype',
    color: '#c62828',
    tests: ['Complete Blood Count (CBC)', 'Haemoglobin (Hb)', 'ESR', 'Blood Group & Rh Factor', 'Platelet Count', 'Peripheral Blood Smear'],
  },
  {
    category: 'Blood Sugar',
    icon: 'monitor_heart',
    color: '#1565C0',
    tests: ['Fasting Blood Sugar (FBS)', 'Post-Prandial Blood Sugar (PPBS)', 'Random Blood Sugar (RBS)', 'HbA1c (Glycated Haemoglobin)', 'Glucose Tolerance Test (GTT)'],
  },
  {
    category: 'Liver Function',
    icon: 'medical_information',
    color: '#e65100',
    tests: ['Liver Function Tests (LFT)', 'SGOT / SGPT', 'Bilirubin (Total & Direct)', 'Alkaline Phosphatase', 'Serum Albumin', 'Hepatitis B Surface Antigen (HBsAg)'],
  },
  {
    category: 'Kidney Function',
    icon: 'water_drop',
    color: '#0277bd',
    tests: ['Kidney Function Tests (KFT)', 'Serum Creatinine', 'Blood Urea Nitrogen (BUN)', 'Uric Acid', 'Electrolytes (Na+, K+, Cl-)'],
  },
  {
    category: 'Thyroid',
    icon: 'psychology',
    color: '#6a1b9a',
    tests: ['TSH (Thyroid Stimulating Hormone)', 'T3 (Tri-iodothyronine)', 'T4 (Thyroxine)', 'Free T3 & Free T4', 'Anti-TPO Antibodies'],
  },
  {
    category: 'Lipid Profile',
    icon: 'favorite',
    color: '#ad1457',
    tests: ['Total Cholesterol', 'HDL Cholesterol', 'LDL Cholesterol', 'VLDL Cholesterol', 'Triglycerides', 'Cholesterol Ratio'],
  },
  {
    category: 'Urine Analysis',
    icon: 'science',
    color: '#00695c',
    tests: ['Routine Urine Examination (RUE)', 'Urine Culture & Sensitivity', 'Urine Microalbumin', 'Urine Creatinine', '24-Hour Urine Protein'],
  },
  {
    category: 'Infection / Serology',
    icon: 'coronavirus',
    color: '#558b2f',
    tests: ['Widal Test (Typhoid)', 'Dengue NS1 Antigen', 'Malaria Antigen Test', 'RA Factor (Rheumatoid)', 'CRP (C-Reactive Protein)', 'VDRL / HIV Screening'],
  },
];

const Lab = () => (
  <div>
    <Navbar />

    {/* Hero */}
    <section style={{ background: 'linear-gradient(135deg,#00352c,#00695c,#00897B)', padding: '80px 0 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="mc-badge d-inline-flex mb-4" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
          <span className="material-symbols-outlined fill-icon" style={{ fontSize: 14 }}>biotech</span>
          Pathology & Diagnostics
        </div>
        <h1 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#fff', marginBottom: 14 }}>
          24-Hour Lab & Diagnostics
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, maxWidth: 540, margin: '0 auto 36px' }}>
          Accurate, reliable blood tests and diagnostic investigations — available round the clock at Town Hospital, Sarjapura.
        </p>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <a href="tel:08027823388" className="btn-mc-primary" style={{ fontSize: 15, background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(10px)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
            080-27823388
          </a>
          <a href="tel:08027823799" className="btn-mc-outline" style={{ fontSize: 15, borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
            080-27823799
          </a>
        </div>
      </div>
    </section>

    {/* Key Features */}
    <section style={{ background: '#fff', padding: '40px 0' }}>
      <div className="container">
        <div className="row g-4">
          {[
            { icon: 'schedule',     color: '#00695c', title: 'Open 24 Hours',        desc: 'Walk in anytime — no appointment needed for lab tests' },
            { icon: 'speed',        color: '#1565C0', title: 'Fast Turnaround',       desc: 'Most routine tests reported within 4–6 hours' },
            { icon: 'verified',     color: '#c62828', title: 'Accurate Results',      desc: 'Quality-controlled testing with certified equipment' },
            { icon: 'person_pin',   color: '#e65100', title: 'On-site Lab Technician', desc: 'Trained lab technician on duty at all times' },
          ].map((f, i) => (
            <div key={f.title} className="col-sm-6 col-lg-3">
              <AnimatedSection delay={i * 80}>
                <div className="mc-card h-100 p-4 text-center">
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: `${f.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <span className="material-symbols-outlined fill-icon" style={{ color: f.color, fontSize: 28 }}>{f.icon}</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: '#64748b', margin: 0 }}>{f.desc}</p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Test Categories */}
    <section className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-5">
            <div className="mc-badge mc-badge-green d-inline-flex mb-3">Test Menu</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#0f172a' }}>Tests We Offer</h2>
            <p style={{ color: '#64748b', maxWidth: 500, margin: '10px auto 0', fontSize: 15 }}>
              Comprehensive pathology services covering all major diagnostic categories.
            </p>
          </div>
        </AnimatedSection>

        <div className="row g-4">
          {TESTS.map((cat, i) => (
            <div key={cat.category} className="col-md-6 col-lg-3">
              <AnimatedSection delay={i * 60}>
                <div className="mc-card h-100 overflow-hidden">
                  <div className="p-4 d-flex align-items-center gap-3" style={{ borderBottom: `3px solid ${cat.color}` }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: cat.color, fontSize: 22 }}>{cat.icon}</span>
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{cat.category}</h3>
                  </div>
                  <div className="p-4">
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                      {cat.tests.map(t => (
                        <li key={t} className="d-flex align-items-start gap-2 mb-2">
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: cat.color, flexShrink: 0, marginTop: 6 }} />
                          <span style={{ fontSize: 13, color: '#475569', lineHeight: 1.5 }}>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>

        <AnimatedSection delay={200}>
          <div className="text-center mt-5 p-4 rounded-4" style={{ background: '#e0f2f1', border: '1px solid #b2dfdb' }}>
            <span className="material-symbols-outlined fill-icon" style={{ color: '#00695c', fontSize: 32, display: 'block', marginBottom: 8 }}>info</span>
            <p style={{ color: '#00352c', fontSize: 15, margin: 0, lineHeight: 1.7 }}>
              <strong>Don't see your test listed?</strong> Call us at <a href="tel:08027823388" style={{ color: '#00695c', fontWeight: 700 }}>080-27823388</a> — we offer many more tests not listed here. Our lab technician will guide you.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* How it works */}
    <section className="section-py" style={{ background: '#fff' }}>
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-5">
            <div className="mc-badge mc-badge-blue d-inline-flex mb-3">Simple Process</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#0f172a' }}>How to Get Your Tests Done</h2>
          </div>
        </AnimatedSection>
        <div className="row g-4 justify-content-center">
          {[
            { step: '01', icon: 'directions_walk', title: 'Walk In Anytime', desc: 'No appointment needed. Visit our lab at Town Hospital, Sarjapura — we\'re open 24 hours.' },
            { step: '02', icon: 'receipt_long', title: 'Doctor\'s Prescription', desc: 'Bring your doctor\'s prescription or we can guide you on routine tests if you\'re unsure.' },
            { step: '03', icon: 'science', title: 'Sample Collection', desc: 'Our trained lab technician will collect blood / urine samples quickly and hygienically.' },
            { step: '04', icon: 'description', title: 'Receive Reports', desc: 'Most routine results are ready within 4–6 hours. We\'ll call you when your report is ready.' },
          ].map((s, i) => (
            <div key={s.step} className="col-sm-6 col-lg-3">
              <AnimatedSection delay={i * 100}>
                <div className="text-center">
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: 20 }}>
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#00695c,#00897B)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: '#fff', fontSize: 32 }}>{s.icon}</span>
                    </div>
                    <div style={{ position: 'absolute', top: -8, right: -8, width: 28, height: 28, borderRadius: '50%', background: '#0f172a', color: '#fff', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.step}</div>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: 'linear-gradient(135deg,#00352c,#00695c)', padding: '60px 0', textAlign: 'center' }}>
      <div className="container">
        <span className="material-symbols-outlined fill-icon" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 64, display: 'block', marginBottom: 8 }}>biotech</span>
        <h2 className="font-display" style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 10 }}>Lab Open 24 Hours</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, marginBottom: 32 }}>
          Walk in anytime at #41/2, Bagalur Road, Near Sri Rama Temple, Sarjapura
        </p>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <a href="tel:08027823388" className="btn-mc-primary" style={{ fontSize: 15, padding: '13px 32px', background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
            080-27823388
          </a>
          <a href="https://maps.google.com/?q=Town+Hospital+Sarjapura+Bangalore" target="_blank" rel="noopener noreferrer"
            className="btn-mc-outline" style={{ fontSize: 15, padding: '11px 32px', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>directions</span>
            Get Directions
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Lab;
