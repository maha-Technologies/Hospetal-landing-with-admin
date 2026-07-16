import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SERVICES = [
  { icon: 'cardiology',  title: 'Cardiology',    color: '#ef4444', bg: '#fff5f5', desc: 'State-of-the-art heart care with minimally invasive procedures and advanced diagnostics.', link: '/cardiology' },
  { icon: 'psychology',  title: 'Neurology',      color: '#8b5cf6', bg: '#f5f3ff', desc: 'Expert management of neurological disorders from stroke to epilepsy.', link: '#' },
  { icon: 'child_care',  title: 'Pediatrics',     color: '#f59e0b', bg: '#fffbeb', desc: 'Compassionate specialized care for patients from birth through adolescence.', link: '#' },
  { icon: 'biotech',     title: 'Advanced Labs',  color: '#06b6d4', bg: '#ecfeff', desc: 'High-precision molecular diagnostics enabling early disease detection.', link: '#' },
  { icon: 'emergency',   title: '24/7 Emergency', color: '#ef4444', bg: '#fff5f5', desc: 'Rapid-response trauma unit with sub-90-minute door-to-treatment time.', link: '#' },
  { icon: 'settings_accessibility', title: 'Orthopedics', color: '#10b981', bg: '#f0fdf4', desc: 'Robotic-assisted joint replacement and sports medicine programs.', link: '#' },
];

const DOCTORS = [
  { name: 'Dr. Elena Vance', specialty: 'Cardiology', exp: '20 yrs', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV_FXuaTYyPQcjRVLX89sjvOL2oVH9z3sfXiykper2LkghxUJvuLCVB1vIh2fH2-3892peYO38JaWtcOqyz2KnOM_o0O-Le6sxkIli2YEwAgH8wmwHhouoMzIOM0F09rhhZ6PYNo4XsV2Xn8aO7-v6I5KBNoHRV_Hm3TiGIAuXUFlFc3ZUMrLzgtH6ae2gS8a-tFNZvS73tlyH5oFJgnFTgpanl-eJ2dsk7rV0BOvbrpm_OsooHNHIRQ' },
  { name: 'Dr. James Okafor', specialty: 'Neurology', exp: '15 yrs', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHUANWi0i-O2NditsVocXvRqIOY4Kma1ZrI_8r53CMVWtVEDvf21jpiPTalU4x0SJE3jO9ej5ep2A5S2H00WsA825p9401KlGm-tEZt_pmyDOo2iTZ6dmpKNSwyWDfwOaCoqMO-x_N8Z4Emu_5oAOkirB8-wEKxB8tM_n_ByfifCWaUwA8B_H_WEB9g0yVPD5-zz5uHgJ_GgbW9qPmYBH_UPraA7Hd9_ZfjzEBz4376vv4pY-_QwsRQ' },
  { name: 'Dr. Sophia Patel', specialty: 'Pediatrics', exp: '12 yrs', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA' },
];

const TESTIMONIALS = [
  { name: 'Robert Henderson', role: 'Cardiology Patient', quote: '"The cardiac team at MediCore didn\'t just save my life; they gave me back my future. Personalized recovery, world-class care."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHUANWi0i-O2NditsVocXvRqIOY4Kma1ZrI_8r53CMVWtVEDvf21jpiPTalU4x0SJE3jO9ej5ep2A5S2H00WsA825p9401KlGm-tEZt_pmyDOo2iTZ6dmpKNSwyWDfwOaCoqMO-x_N8Z4Emu_5oAOkirB8-wEKxB8tM_n_ByfifCWaUwA8B_H_WEB9g0yVPD5-zz5uHgJ_GgbW9qPmYBH_UPraA7Hd9_ZfjzEBz4376vv4pY-_QwsRQ', rating: 5 },
  { name: 'Sarah Jenkins',    role: 'Mother of Patient', quote: '"Finding specialized pediatric care for my daughter was our top priority. The doctors here treat her like their own."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA', rating: 5 },
  { name: 'Elena Rodriguez',  role: 'Neurology Patient', quote: '"After years of chronic pain, they finally found the root cause. Six months pain-free and back to hiking mountains."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLMARPYBmIMGZXAvLbvSDIB9h78N6z2WhSe3_geHmNHwCm2ZN6M_BtpZ7ykopTLyPSXN3pzSaOjyKMtYR7lziuOHzoghq0qo7pW4hzww6qPND4nWeRf7_fIjHOHa-q448wuklbNUJAHcrD858wnCELX64TlTZIwOwulH5kU__evZ0C6FiJnOKgWiTmfJpAIMm1EzKtjvhrNzwQGdWwdG3baquUgpkYcI468Vhtw8-WPWmcWvODeCnbdA', rating: 5 },
];

const STATS = [
  { value: '15,000+', label: 'Patients Annually', icon: 'group' },
  { value: '99%',     label: 'Patient Satisfaction', icon: 'favorite' },
  { value: '200+',    label: 'Medical Specialists', icon: 'stethoscope' },
  { value: '40+',     label: 'Specialized Clinics', icon: 'local_hospital' },
];

const useScrollAnimation = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    }, { threshold: 0.1 });
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
};

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #1a2744 40%, #1a3a6e 70%, #1557b0 100%)',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,115,232,0.15) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: -120, left: -60, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%)' }} />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="mc-badge mc-badge-blue animate-fade-up mb-4">
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: 14 }}>verified</span>
                ISO 9001 Certified Healthcare
              </div>
              <h1 className="font-display animate-fade-up animate-delay-100" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', marginBottom: 24 }}>
                Healthcare You<br />
                <span style={{ color: '#00c896' }}>Can Trust</span>
              </h1>
              <p className="animate-fade-up animate-delay-200" style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.7, maxWidth: 480, marginBottom: 40 }}>
                Experience world-class medical expertise combined with empathetic care. MediCore Health — where innovation meets compassion.
              </p>
              <div className="d-flex flex-wrap gap-3 animate-fade-up animate-delay-300">
                <Link to="/cardiology" className="btn-mc-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
                  Explore Services
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
                </Link>
                <Link to="/doctors" className="btn-mc-outline" style={{ fontSize: 16, padding: '12px 32px', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                  Meet Our Doctors
                </Link>
              </div>

              {/* Quick stats */}
              <div className="d-flex flex-wrap gap-4 mt-5 animate-fade-up animate-delay-400">
                {STATS.slice(0, 3).map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div className="position-relative animate-fade animate-delay-200">
                <div className="rounded-4 overflow-hidden shadow-lg" style={{ border: '2px solid rgba(255,255,255,0.1)' }}>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA" alt="Modern hospital" className="w-100 object-cover" style={{ height: 480 }} />
                </div>
                {/* Floating card */}
                <div className="glass animate-float position-absolute rounded-4 p-4" style={{ bottom: -24, left: -24, minWidth: 220 }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(26,115,232,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: '#1a73e8', fontSize: 24 }}>favorite</span>
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1.4rem', color: '#0f172a' }}>99%</div>
                      <div style={{ fontSize: 13, color: '#64748b' }}>Patient Satisfaction</div>
                    </div>
                  </div>
                  <div style={{ height: 6, background: '#e2e8f0', borderRadius: 9999 }}>
                    <div style={{ height: 6, background: 'linear-gradient(90deg, #1a73e8, #00c896)', borderRadius: 9999, width: '99%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANNOUNCEMENTS BAR ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '12px 0' }}>
        <div className="container d-flex align-items-center gap-3">
          <span className="mc-badge mc-badge-blue" style={{ flexShrink: 0 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>campaign</span>
            News
          </span>
          <p style={{ margin: 0, fontSize: 14, color: '#475569' }}>
            🏥 New Neurology Wing opening next month — advanced stroke recovery & sleep study labs.
            &nbsp;&nbsp;|&nbsp;&nbsp;
            ❤️ Free cardiovascular screenings for adults 65+ starting October 1st.
          </p>
        </div>
      </div>

      {/* ── STATS BAND ── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }} className="section-py-sm">
        <div className="container">
          <div className="row g-4 text-center">
            {STATS.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100}>
                <div className="col">
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--mc-blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                    <span className="material-symbols-outlined fill-icon" style={{ color: 'var(--mc-blue)', fontSize: 26 }}>{s.icon}</span>
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 14, color: '#64748b', marginTop: 6 }}>{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES BENTO GRID ── */}
      <section className="section-py" style={{ background: 'var(--mc-surface)' }} id="services">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-5">
              <div className="mc-badge mc-badge-green d-inline-flex mb-3">Specialized Care</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f172a' }}>Our Medical Specialties</h2>
              <p style={{ color: '#64748b', fontSize: 17, maxWidth: 560, margin: '12px auto 0' }}>
                Multidisciplinary teams powered by advanced technology across all major medical fields.
              </p>
            </div>
          </AnimatedSection>

          <div className="row g-4">
            {/* Feature card: Cardiology */}
            <div className="col-lg-8">
              <AnimatedSection delay={100}>
                <div className="mc-card h-100 p-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', minHeight: 280 }}>
                  <div className="position-relative" style={{ zIndex: 2 }}>
                    <div style={{ width: 64, height: 64, borderRadius: 18, background: 'rgba(26,115,232,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: '#1a73e8', fontSize: 32 }}>cardiology</span>
                    </div>
                    <h3 className="font-heading" style={{ fontSize: '1.75rem', color: '#0f172a', marginBottom: 12 }}>Cardiology</h3>
                    <p style={{ color: '#475569', fontSize: 16, maxWidth: 400, marginBottom: 24 }}>Heart health excellence with state-of-the-art diagnostic labs and minimally invasive surgical solutions. 15,000+ successful cardiac procedures annually.</p>
                    <Link to="/cardiology" className="btn-mc-primary">
                      View Department <span className="material-symbols-outlined" style={{ fontSize: 18 }}>east</span>
                    </Link>
                  </div>
                  <div className="position-absolute" style={{ right: -20, bottom: -20, opacity: 0.06 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 220, color: '#1a73e8' }}>monitor_heart</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="col-lg-4 d-flex flex-column gap-4">
              {SERVICES.slice(1, 3).map((s, i) => (
                <AnimatedSection key={s.title} delay={(i + 2) * 100}>
                  <div className="mc-card h-100 p-4 d-flex flex-column">
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: s.color, fontSize: 24 }}>{s.icon}</span>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: '#64748b', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {SERVICES.slice(3).map((s, i) => (
              <div key={s.title} className="col-md-4">
                <AnimatedSection delay={(i + 4) * 100}>
                  <div className="mc-card h-100 p-4">
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: s.color, fontSize: 24 }}>{s.icon}</span>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: '#64748b', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-py" style={{ background: '#fff' }}>
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-5">
              <div className="mc-badge mc-badge-blue d-inline-flex mb-3">Why MediCore</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f172a' }}>The MediCore Difference</h2>
            </div>
          </AnimatedSection>

          <div className="row g-4">
            {[
              { icon: 'precision_manufacturing', title: 'Clinical Precision', color: '#1a73e8', bg: '#e8f0fe', desc: 'AI-assisted diagnostics and robotic surgical assistance ensure unparalleled accuracy in every procedure we perform.' },
              { icon: 'favorite', title: 'Patient-First Care', color: '#ef4444', bg: '#fff5f5', desc: 'Every care plan is tailored to the individual. We treat the whole person, not just the condition, with empathy at every step.' },
              { icon: 'school', title: 'Research-Led Medicine', color: '#8b5cf6', bg: '#f5f3ff', desc: 'Our specialists lead cutting-edge research, meaning our patients benefit from the latest breakthroughs before anyone else.' },
            ].map((f, i) => (
              <div key={f.title} className="col-md-4">
                <AnimatedSection delay={i * 150}>
                  <div className="mc-card p-5 h-100 text-center">
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: f.color, fontSize: 32 }}>{f.icon}</span>
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>{f.title}</h3>
                    <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCTORS PREVIEW ── */}
      <section className="section-py" style={{ background: 'var(--mc-surface)' }}>
        <div className="container">
          <AnimatedSection>
            <div className="d-flex flex-wrap justify-content-between align-items-end mb-5 gap-3">
              <div>
                <div className="mc-badge mc-badge-green d-inline-flex mb-3">Our Specialists</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f172a', margin: 0 }}>Meet Our Experts</h2>
              </div>
              <Link to="/doctors" className="btn-mc-outline" style={{ flexShrink: 0 }}>
                View All Doctors <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </Link>
            </div>
          </AnimatedSection>

          <div className="row g-4">
            {DOCTORS.map((d, i) => (
              <div key={d.name} className="col-md-4">
                <AnimatedSection delay={i * 150}>
                  <div className="mc-card text-center overflow-hidden">
                    <div style={{ height: 260, overflow: 'hidden' }}>
                      <img src={d.img} alt={d.name} className="w-100 h-100 object-cover" style={{ transition: 'transform 0.5s ease' }}
                        onMouseOver={e => e.currentTarget.style.transform='scale(1.08)'}
                        onMouseOut={e => e.currentTarget.style.transform='scale(1)'}
                      />
                    </div>
                    <div className="p-4">
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{d.name}</h3>
                      <p style={{ color: '#1a73e8', fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{d.specialty}</p>
                      <div className="d-flex align-items-center justify-content-center gap-2" style={{ color: '#64748b', fontSize: 13 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>schedule</span>
                        {d.exp} experience
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-py" style={{ background: '#fff' }}>
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-5">
              <div className="mc-badge mc-badge-green d-inline-flex mb-3">Patient Stories</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f172a' }}>What Our Patients Say</h2>
            </div>
          </AnimatedSection>

          <div className="row g-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="col-md-4">
                <AnimatedSection delay={i * 150}>
                  <div className="mc-card p-5 h-100 d-flex flex-column">
                    <div className="d-flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <span key={j} className="material-symbols-outlined fill-icon" style={{ color: '#fbbf24', fontSize: 20 }}>star</span>
                      ))}
                    </div>
                    <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.7, fontStyle: 'italic', flex: 1, marginBottom: 24 }}>
                      {t.quote}
                    </p>
                    <div className="d-flex align-items-center gap-3 pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
                      <img src={t.img} alt={t.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, color: '#0f172a' }}>{t.name}</div>
                        <div style={{ fontSize: 13, color: '#1a73e8', fontWeight: 600 }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: 'linear-gradient(135deg, #1a73e8 0%, #1557b0 100%)', padding: '80px 0' }}>
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: 16 }}>
              Ready to Take Control of Your Health?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, maxWidth: 480, margin: '0 auto 40px' }}>
              Book an appointment today and take the first step towards better health.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="#" className="btn-mc-green" style={{ fontSize: 16, padding: '14px 36px' }}>
                Book Appointment <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
              </a>
              <a href="tel:5551234567" className="btn-mc-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff', fontSize: 16, padding: '12px 36px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
                (555) 123-4567
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
