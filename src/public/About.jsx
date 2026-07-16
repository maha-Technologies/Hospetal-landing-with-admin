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

const MILESTONES = [
  { year: '1987', title: 'Founded',            desc: 'MediCore Health opens its doors as a single-clinic family practice in Chicago, IL.' },
  { year: '1998', title: 'Hospital Status',    desc: 'Expanded to a full-service hospital with 200 beds across 12 specialties.' },
  { year: '2008', title: 'Research Institute', desc: 'Launched the MediCore Research Institute, publishing 50+ peer-reviewed papers.' },
  { year: '2015', title: 'Robotic Surgery',    desc: 'Became the first Midwest hospital to deploy the da Vinci Xi robotic system at scale.' },
  { year: '2020', title: 'AI Diagnostics',     desc: 'Integrated AI-powered radiology analysis, cutting diagnostic time by 60%.' },
  { year: '2024', title: 'New Neurology Wing', desc: 'Opened a state-of-the-art Neurology & Sleep Center, serving 5,000+ patients yearly.' },
];

const VALUES = [
  { icon: 'favorite',       title: 'Patient First',        color: '#ef4444', bg: '#fff5f5', desc: 'Every decision starts and ends with what is best for our patients. Their dignity and well-being are non-negotiable.' },
  { icon: 'science',        title: 'Evidence-Based',       color: '#1a73e8', bg: '#e8f0fe', desc: 'We treat based on the latest clinical research. No guesswork — only proven, peer-reviewed medical protocols.' },
  { icon: 'diversity_3',    title: 'Inclusive Care',       color: '#10b981', bg: '#f0fdf4', desc: 'We serve every patient equally, regardless of background, providing culturally sensitive and accessible care.' },
  { icon: 'lightbulb',      title: 'Continuous Innovation',color: '#f59e0b', bg: '#fffbeb', desc: 'We invest in the latest technology and encourage our clinicians to push the boundaries of modern medicine.' },
];

const LEADERSHIP = [
  { name: 'Dr. Margaret Liu',   title: 'Chief Executive Officer',        specialty: 'Healthcare Administration', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA' },
  { name: 'Dr. Elena Vance',    title: 'Chief Medical Officer',          specialty: 'Interventional Cardiology',  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV_FXuaTYyPQcjRVLX89sjvOL2oVH9z3sfXiykper2LkghxUJvuLCVB1vIh2fH2-3892peYO38JaWtcOqyz2KnOM_o0O-Le6sxkIli2YEwAgH8wmwHhouoMzIOM0F09rhhZ6PYNo4XsV2Xn8aO7-v6I5KBNoHRV_Hm3TiGIAuXUFlFc3ZUMrLzgtH6ae2gS8a-tFNZvS73tlyH5oFJgnFTgpanl-eJ2dsk7rV0BOvbrpm_OsooHNHIRQ' },
  { name: 'Dr. James Okafor',   title: 'Chief of Research',              specialty: 'Neuroscience',               img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHUANWi0i-O2NditsVocXvRqIOY4Kma1ZrI_8r53CMVWtVEDvf21jpiPTalU4x0SJE3jO9ej5ep2A5S2H00WsA825p9401KlGm-tEZt_pmyDOo2iTZ6dmpKNSwyWDfwOaCoqMO-x_N8Z4Emu_5oAOkirB8-wEKxB8tM_n_ByfifCWaUwA8B_H_WEB9g0yVPD5-zz5uHgJ_GgbW9qPmYBH_UPraA7Hd9_ZfjzEBz4376vv4pY-_QwsRQ' },
];

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #1a2744 50%, #1a3a6e 100%)',
        padding: '80px 0 60px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 60%, rgba(0,200,150,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="mc-badge mc-badge-green d-inline-flex mb-4">
            <span className="material-symbols-outlined fill-icon" style={{ fontSize: 14 }}>history_edu</span>
            Since 1987
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: '#fff', marginBottom: 16 }}>
            About MediCore Health
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 18, maxWidth: 580, margin: '0 auto 40px' }}>
            For over 35 years, MediCore has been a beacon of medical excellence — combining world-class specialists, cutting-edge technology, and genuine human compassion.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {[
              { value: '35+', label: 'Years of Service' },
              { value: '200+', label: 'Specialists' },
              { value: '15k+', label: 'Patients/Year' },
              { value: '99%', label: 'Satisfaction' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00c896', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection>
                <div className="rounded-4 overflow-hidden shadow-lg" style={{ height: 440 }}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA"
                    alt="MediCore hospital"
                    className="w-100 h-100 object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection delay={150}>
                <div className="mc-badge mc-badge-blue d-inline-flex mb-4">Our Purpose</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f172a', marginBottom: 20 }}>
                  Mission & Vision
                </h2>
                <div className="mc-card p-4 mb-4" style={{ borderLeft: '4px solid var(--mc-blue)' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--mc-blue)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>Our Mission</div>
                  <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                    To deliver world-class, evidence-based healthcare that is accessible, compassionate, and driven by a relentless commitment to improving patient outcomes.
                  </p>
                </div>
                <div className="mc-card p-4" style={{ borderLeft: '4px solid var(--mc-green)' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--mc-green-dark)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>Our Vision</div>
                  <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                    To be the most trusted health system in the region — where every patient feels heard, every clinician is empowered, and every innovation serves humanity.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py" style={{ background: 'var(--mc-surface)' }}>
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-5">
              <div className="mc-badge mc-badge-green d-inline-flex mb-3">What Drives Us</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f172a' }}>Our Core Values</h2>
            </div>
          </AnimatedSection>
          <div className="row g-4">
            {VALUES.map((v, i) => (
              <div key={v.title} className="col-md-6 col-lg-3">
                <AnimatedSection delay={i * 100}>
                  <div className="mc-card h-100 p-5 text-center">
                    <div style={{ width: 68, height: 68, borderRadius: '50%', background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: v.color, fontSize: 30 }}>{v.icon}</span>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: 12 }}>{v.title}</h3>
                    <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py" style={{ background: '#fff' }}>
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-5">
              <div className="mc-badge mc-badge-blue d-inline-flex mb-3">Our Journey</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f172a' }}>35 Years of Excellence</h2>
            </div>
          </AnimatedSection>

          <div className="position-relative" style={{ maxWidth: 760, margin: '0 auto' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'var(--mc-border)', transform: 'translateX(-50%)' }} className="d-none d-md-block" />

            {MILESTONES.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 100}>
                <div className={`d-flex align-items-start gap-4 mb-5 ${i % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse'}`}>
                  {/* Content */}
                  <div className="col-md-5">
                    <div className="mc-card p-4">
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--mc-blue)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>{m.year}</div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{m.title}</h3>
                      <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="d-none d-md-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--mc-blue)', color: '#fff', fontSize: 13, fontWeight: 700, zIndex: 1 }}>
                    {m.year.slice(2)}
                  </div>

                  {/* Spacer */}
                  <div className="col-md-5 d-none d-md-block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-py" style={{ background: 'var(--mc-surface)' }}>
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-5">
              <div className="mc-badge mc-badge-blue d-inline-flex mb-3">Leadership</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f172a' }}>The Team at the Top</h2>
            </div>
          </AnimatedSection>
          <div className="row g-4 justify-content-center">
            {LEADERSHIP.map((l, i) => (
              <div key={l.name} className="col-md-4">
                <AnimatedSection delay={i * 120}>
                  <div className="mc-card overflow-hidden text-center">
                    <div style={{ height: 260, overflow: 'hidden' }}>
                      <img src={l.img} alt={l.name} className="w-100 h-100 object-cover"
                        style={{ transition: 'transform 0.5s ease', filter: 'grayscale(20%)' }}
                        onMouseOver={e => { e.currentTarget.style.transform='scale(1.06)'; e.currentTarget.style.filter='grayscale(0%)'; }}
                        onMouseOut={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.filter='grayscale(20%)'; }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{l.name}</h3>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--mc-blue)', marginBottom: 4 }}>{l.title}</div>
                      <div style={{ fontSize: 13, color: '#94a3b8' }}>{l.specialty}</div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a2744 100%)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <AnimatedSection>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: 12 }}>
              Become Part of Our Story
            </h2>
            <p style={{ color: '#64748b', fontSize: 17, maxWidth: 440, margin: '0 auto 36px' }}>
              Whether as a patient, a specialist, or a partner — there's a place for you at MediCore.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/doctors" className="btn-mc-primary" style={{ fontSize: 16, padding: '14px 36px' }}>
                Meet Our Team
              </Link>
              <Link to="/services" className="btn-mc-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', fontSize: 16, padding: '12px 36px' }}>
                Explore Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
