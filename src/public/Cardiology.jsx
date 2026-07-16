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

const TREATMENTS = [
  { icon: 'monitor_heart', label: 'Coronary Angioplasty' },
  { icon: 'ecg_heart',     label: 'TAVR Valve Replacement' },
  { icon: 'cardiology',    label: 'Mitral Valve Repair' },
  { icon: 'healing',       label: 'Atrial Septal Closure' },
  { icon: 'biotech',       label: 'Cardiac MRI & CT' },
  { icon: 'exercise',      label: 'Cardiac Rehabilitation' },
];

const Cardiology = () => {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a0000 0%, #3d0000 40%, #7f1d1d 100%)', minHeight: '70vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 70%)' }} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="mc-badge d-inline-flex mb-4" style={{ background: 'rgba(239,68,68,0.15)', color: '#fca5a5' }}>
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: 14 }}>cardiology</span>
                Cardiovascular Medicine
              </div>
              <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: '#fff', marginBottom: 20 }}>
                Excellence in<br />
                <span style={{ color: '#fca5a5' }}>Heart & Vascular Care</span>
              </h1>
              <p style={{ color: '#fca5a5', fontSize: 17, opacity: 0.8, lineHeight: 1.7, maxWidth: 460, marginBottom: 36 }}>
                Combining world-class expertise with cutting-edge technology to deliver comprehensive cardiac services, from preventative screening to complex surgical interventions.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#contact" className="btn-mc-primary" style={{ background: '#ef4444', boxShadow: '0 8px 24px rgba(239,68,68,0.35)' }}>
                  Book Appointment
                </a>
                <a href="#treatments" className="btn-mc-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                  View Treatments
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="rounded-4 overflow-hidden" style={{ border: '2px solid rgba(239,68,68,0.3)', boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTXk2i3URrxc1Sm4anFv6jYsQ0nKkDuZQ484SQpc3c7yik50Vi1GmyWyBhzfPxw8zRNINfiQEG6hUVgcZjT3GWmss2_DoeTaKBSFl7lRjg14Ko7SEYA_WnJ5b_-AMniYKv6e_f2zAmL3xHQ1dUk52FVm-7BVwTiKDemZ4lkLxQ5Md1S2ZojUjLYo0kHVCkedaHYrPJor2fHaBdTBqnwEem9j99vWTZz7XNhWlbqexlajrsPz56QvXIzQ"
                    alt="Cardiology" className="w-100 object-cover" style={{ height: 420 }} />
                </div>
                <div className="glass position-absolute rounded-4 p-4" style={{ bottom: -20, left: -20, minWidth: 200 }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ef4444', lineHeight: 1 }}>15,000+</div>
                  <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Successful Procedures Annually</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="section-py" id="treatments" style={{ background: '#fff' }}>
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-5">
              <div className="mc-badge d-inline-flex mb-3" style={{ background: '#fff5f5', color: '#ef4444' }}>Specialized Treatments</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#0f172a' }}>Interventional Cardiology</h2>
              <p style={{ color: '#64748b', fontSize: 17, maxWidth: 560, margin: '12px auto 0' }}>Advanced catheter-based treatments using minimally invasive techniques for faster recovery.</p>
            </div>
          </AnimatedSection>

          <div className="row g-4">
            <div className="col-lg-8">
              <AnimatedSection delay={100}>
                <div className="mc-card p-5 h-100" style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #fef2f2 100%)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                    {TREATMENTS.map(t => (
                      <div key={t.label} className="d-flex align-items-center gap-3 p-3 rounded-3 bg-white">
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fff5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span className="material-symbols-outlined fill-icon" style={{ color: '#ef4444', fontSize: 20 }}>{t.icon}</span>
                        </div>
                        <span style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>{t.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="col-lg-4 d-flex flex-column gap-4">
              {/* Emergency Card */}
              <AnimatedSection delay={200}>
                <div className="h-100 rounded-4 p-5 d-flex flex-column" style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', color: '#fff', boxShadow: '0 20px 40px rgba(239,68,68,0.3)' }}>
                  <span className="material-symbols-outlined fill-icon mb-3" style={{ fontSize: 40 }}>emergency</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>24/7 Cardiac ER</h3>
                  <p style={{ opacity: 0.85, fontSize: 14, lineHeight: 1.7, flex: 1 }}>Immediate life-saving interventions for heart attacks and acute cardiac crises. Sub-60-minute door-to-balloon time.</p>
                  <button className="btn-mc-outline mt-4 justify-content-center" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff', width: '100%' }}>
                    Emergency Protocol
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Physician */}
      <section className="section-py" style={{ background: 'var(--mc-surface)' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <AnimatedSection>
                <div className="position-relative">
                  <div className="rounded-4 overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)' }}>
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV_FXuaTYyPQcjRVLX89sjvOL2oVH9z3sfXiykper2LkghxUJvuLCVB1vIh2fH2-3892peYO38JaWtcOqyz2KnOM_o0O-Le6sxkIli2YEwAgH8wmwHhouoMzIOM0F09rhhZ6PYNo4XsV2Xn8aO7-v6I5KBNoHRV_Hm3TiGIAuXUFlFc3ZUMrLzgtH6ae2gS8a-tFNZvS73tlyH5oFJgnFTgpanl-eJ2dsk7rV0BOvbrpm_OsooHNHIRQ"
                      alt="Dr. Elena Vance" className="w-100 object-cover" style={{ height: 500, filter: 'grayscale(30%)', transition: 'filter 0.5s ease' }}
                      onMouseOver={e => e.currentTarget.style.filter='grayscale(0%)'}
                      onMouseOut={e => e.currentTarget.style.filter='grayscale(30%)'}
                    />
                  </div>
                  <div className="position-absolute rounded-3 px-4 py-3 fw-bold" style={{ bottom: 24, right: -16, background: '#0f172a', color: '#fff', fontSize: 14, boxShadow: 'var(--shadow-md)' }}>
                    Chief of Cardiology
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="col-lg-7">
              <AnimatedSection delay={200}>
                <div className="mc-badge mc-badge-blue d-inline-flex mb-4">Lead Specialist</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#0f172a', marginBottom: 16 }}>
                  Dr. Elena Vance, MD, FACC
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#1a73e8', fontWeight: 600, fontStyle: 'italic', marginBottom: 20 }}>
                  "Our mission is to treat every heart as if it were our own family's."
                </p>
                <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                  Dr. Vance has over 20 years of experience in interventional cardiology. She graduated from the Johns Hopkins School of Medicine and completed her fellowship at the Mayo Clinic. Her research on valve replacement technology has been published in numerous medical journals, and she leads a team of 45 specialized cardiac professionals.
                </p>

                <div className="row g-3 mb-4">
                  {[['Education', 'Johns Hopkins MD'], ['Fellowship', 'Mayo Clinic'], ['Experience', '20+ Years'], ['Procedures', '8,000+']].map(([label, value]) => (
                    <div key={label} className="col-6">
                      <div className="mc-card p-3">
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{label}</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="#contact" className="btn-mc-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
                  Schedule Consultation
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section className="section-py" id="contact" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <AnimatedSection>
                <h2 className="font-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: '#0f172a', marginBottom: 32 }}>Get in Touch</h2>
                <div className="d-flex flex-column gap-5 mb-5">
                  {[
                    { icon: 'location_on', title: 'Clinic Location', text: 'North Wing, Level 4\n800 Medical Center Plaza, Seattle, WA 98104' },
                    { icon: 'call', title: 'Direct Line', text: '(206) 555-0128' },
                    { icon: 'schedule', title: 'Hours', text: 'Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM (Urgent Care Only)' },
                  ].map(({ icon, title, text }) => (
                    <div key={title} className="d-flex gap-4">
                      <div style={{ width: 52, height: 52, borderRadius: 14, background: '#fff5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span className="material-symbols-outlined fill-icon" style={{ color: '#ef4444', fontSize: 24 }}>{icon}</span>
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{title}</div>
                        <div style={{ color: '#64748b', fontSize: 15, whiteSpace: 'pre-line', lineHeight: 1.6 }}>{text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mc-card p-4">
                  <h4 style={{ fontWeight: 700, color: '#0f172a', marginBottom: 20 }}>Patient Inquiry</h4>
                  <form className="d-flex flex-column gap-3">
                    <input className="form-control form-control-lg" placeholder="Full Name" type="text" style={{ border: '1px solid #e2e8f0', borderRadius: 12 }} />
                    <input className="form-control form-control-lg" placeholder="Email Address" type="email" style={{ border: '1px solid #e2e8f0', borderRadius: 12 }} />
                    <textarea className="form-control" rows={4} placeholder="How can we help?" style={{ border: '1px solid #e2e8f0', borderRadius: 12, fontSize: 16 }}></textarea>
                    <button className="btn-mc-primary justify-content-center" style={{ fontSize: 16, padding: '14px' }}>Send Message</button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            <div className="col-lg-6">
              <AnimatedSection delay={200}>
                <div className="rounded-4 overflow-hidden position-relative" style={{ height: '100%', minHeight: 600, boxShadow: 'var(--shadow-lg)' }}>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvT1F-Pg6u58DzVIdcHtJDCynIFApnBUjET4jQDlZSb_fzmv8oTAQSF45oU2DK2cWABGX_9mprfo-92R28eltfWRXa3Lb9j0d2Ry3dL0GJ6BjDnAOAptnjj9rCSAp2H7UFLiL5vs7b0gaGPlvtn-JOQqjRguls5yFwPWWfi30owvO-ascxSLcrq0bgAPISXFtnTppDIft1yR9SuRdpeJ3sAnqHzM8UqLvympDpJqOhrTTDFmvAWD8NqA"
                    alt="Location map" className="w-100 h-100 object-cover" />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,115,232,0.08)' }} />
                  <div className="glass position-absolute rounded-4 p-4" style={{ bottom: 24, left: 24, right: 24 }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div style={{ fontWeight: 700, color: '#0f172a' }}>Cardiology Dept.</div>
                        <div style={{ color: '#64748b', fontSize: 13 }}>Free parking for patients</div>
                      </div>
                      <button className="btn-mc-primary rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: 48, height: 48, padding: 0 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 22 }}>directions</span>
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cardiology;
