import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref}>{children}</div>;
};

const DEPTS = [
  { icon: 'stethoscope',         label: 'General OPD',             color: '#1565C0', bg: '#e3f2fd', desc: 'Consultations for fever, infections, diabetes, BP and all general health concerns.' },
  { icon: 'surgical',            label: 'General Surgery',          color: '#c62828', bg: '#ffebee', desc: 'Expert surgical care for piles, hernia, gallbladder, appendix and more.' },
  { icon: 'precision_manufacturing', label: 'Laparoscopic Surgery', color: '#6a1b9a', bg: '#f3e5f5', desc: 'Minimally invasive key-hole surgeries for faster recovery and less pain.' },
  { icon: 'gastroenterology',    label: 'Gastroenterology',         color: '#e65100', bg: '#fff3e0', desc: 'Expert care for stomach, liver, intestine and digestive disorders.' },
  { icon: 'pregnant_woman',      label: 'Gynaecology & OBG',        color: '#ad1457', bg: '#fce4ec', desc: 'Women\'s health, prenatal care and gynaecological consultations. (Visiting Consultant)' },
  { icon: 'child_care',          label: 'Paediatrics',              color: '#f9a825', bg: '#fffde7', desc: 'Specialised healthcare for infants, children and adolescents. (Visiting Consultant)' },
  { icon: 'biotech',             label: 'Pathology & Diagnostics',  color: '#00695c', bg: '#e0f2f1', desc: '24-hour laboratory with blood tests, urine analysis and comprehensive diagnostics.' },
  { icon: 'dermatology',         label: 'Dermatology',              color: '#558b2f', bg: '#f1f8e9', desc: 'Treatment for skin conditions, acne, infections and skin care. (Visiting Consultant)' },
];

const STATS = [
  { icon: 'calendar_month', value: '10+', label: 'Years Serving\nSarjapura' },
  { icon: 'group',          value: '197', label: 'Patient Reviews\non JustDial' },
  { icon: 'biotech',        value: '24hrs', label: 'Diagnostics\nLab Open' },
  { icon: 'local_hospital', value: '8',   label: 'Specialised\nDepartments' },
];

const Home = () => (
  <div>
    <Navbar />

    {/* HERO */}
    <section style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d2137 45%, #1565C0 100%)', minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,137,123,0.15) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,101,192,0.15) 0%, transparent 70%)' }} />

      <div className="container position-relative" style={{ zIndex: 2, paddingTop: 32, paddingBottom: 32 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            {/* Trust badge */}
            <div className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-2 rounded-pill" style={{ background: 'rgba(0,137,123,0.15)', border: '1px solid rgba(0,137,123,0.3)' }}>
              <span className="material-symbols-outlined fill-icon" style={{ color: '#00c896', fontSize: 16 }}>verified</span>
              <span style={{ color: '#00c896', fontSize: 13, fontWeight: 700 }}>Trusted Community Hospital — Sarjapura</span>
            </div>

            <h1 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>
              Your Family's<br />
              <span style={{ color: '#00c896' }}>Health</span>, Our<br />
              <span style={{ color: '#64b5f6' }}>Priority</span>
            </h1>

            <p style={{ color: '#94a3b8', fontSize: 17, lineHeight: 1.8, maxWidth: 480, marginBottom: 36 }}>
              Town Hospital Sarjapura provides compassionate general medical care, advanced surgery, and 24-hour diagnostic services — right in your neighbourhood.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="tel:08027823388" className="btn-mc-primary" style={{ fontSize: 15, padding: '13px 28px', background: 'linear-gradient(135deg, #1565C0, #00897B)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
                Call: 080-27823388
              </a>
              <Link to="/services" className="btn-mc-outline" style={{ fontSize: 15, padding: '11px 28px', borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>
                View Departments
              </Link>
            </div>

            {/* OPD info strip */}
            <div className="d-flex flex-wrap gap-3">
              {[
                { icon: 'schedule', label: 'OPD Hours', value: 'Mon–Sat, 6–8 PM' },
                { icon: 'biotech',  label: 'Lab',       value: 'Open 24 Hours' },
                { icon: 'location_on', label: 'Location', value: 'Near Sri Rama Temple' },
              ].map(i => (
                <div key={i.label} className="d-flex align-items-center gap-2">
                  <span className="material-symbols-outlined fill-icon" style={{ color: '#00c896', fontSize: 18 }}>{i.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1 }}>{i.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{i.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 d-none d-lg-block">
            <div className="position-relative">
              <div className="rounded-4 overflow-hidden" style={{ border: '2px solid rgba(255,255,255,0.08)', boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA"
                  alt="Town Hospital Sarjapura" className="w-100 object-cover" style={{ height: 460 }} />
              </div>

              {/* Floating — Address card */}
              <div className="glass position-absolute rounded-4 p-3" style={{ bottom: -16, left: -20, minWidth: 230 }}>
                <div className="d-flex align-items-start gap-2">
                  <span className="material-symbols-outlined fill-icon" style={{ color: '#1565C0', fontSize: 22, flexShrink: 0 }}>location_on</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#0f172a' }}>Town Hospital</div>
                    <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.5 }}>#41/2, Bagalur Road, Near Sri Rama Temple, Sarjapura — 562125</div>
                  </div>
                </div>
              </div>

              {/* Floating — Lab badge */}
              <div className="position-absolute rounded-3 px-3 py-2" style={{ top: 20, right: -16, background: '#00897B', color: '#fff', fontSize: 13, fontWeight: 700, boxShadow: '0 8px 24px rgba(0,137,123,0.4)' }}>
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: 16, verticalAlign: 'middle' }}>biotech</span> Lab Open 24hrs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* EMERGENCY STRIP */}
    <div style={{ background: '#c62828', color: '#fff', padding: '10px 0' }}>
      <div className="container d-flex align-items-center gap-3 flex-wrap">
        <span className="material-symbols-outlined fill-icon" style={{ fontSize: 20 }}>emergency</span>
        <strong style={{ fontSize: 14 }}>For Medical Emergencies — Call Immediately:</strong>
        <a href="tel:08027823388" style={{ color: '#fff', fontWeight: 800, fontSize: 15, textDecoration: 'none' }}>080-27823388</a>
        <span style={{ opacity: 0.6 }}>|</span>
        <a href="tel:08027823799" style={{ color: '#fff', fontWeight: 800, fontSize: 15, textDecoration: 'none' }}>080-27823799</a>
      </div>
    </div>

    {/* STATS */}
    <section style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }} className="section-py-sm">
      <div className="container">
        <div className="row g-4 text-center">
          {STATS.map((s, i) => (
            <div key={s.label} className="col-6 col-md-3">
              <AnimatedSection delay={i * 100}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <span className="material-symbols-outlined fill-icon" style={{ color: '#1565C0', fontSize: 26 }}>{s.icon}</span>
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: '#64748b', marginTop: 6, whiteSpace: 'pre-line', lineHeight: 1.4 }}>{s.label}</div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* DEPARTMENTS */}
    <section className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-5">
            <div className="mc-badge mc-badge-blue d-inline-flex mb-3">Our Departments</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#0f172a' }}>Specialised Care Under One Roof</h2>
            <p style={{ color: '#64748b', fontSize: 16, maxWidth: 520, margin: '10px auto 0' }}>
              From daily OPD consultations to advanced laparoscopic surgery and round-the-clock diagnostics.
            </p>
          </div>
        </AnimatedSection>

        <div className="row g-4">
          {/* Featured — General Surgery */}
          <div className="col-lg-8">
            <AnimatedSection delay={100}>
              <div className="mc-card h-100 p-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #ffebee 100%)' }}>
                <div style={{ width: 64, height: 64, borderRadius: 18, background: '#c6282215', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <span className="material-symbols-outlined fill-icon" style={{ color: '#c62828', fontSize: 32 }}>surgical</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>General & Laparoscopic Surgery</h3>
                <p style={{ color: '#475569', fontSize: 15, maxWidth: 400, marginBottom: 24, lineHeight: 1.7 }}>
                  Led by <strong>Dr. Prabhakar B</strong> (MBBS, MS, FIAGES — 20+ years experience). Specialising in hernia, piles, gallbladder stones, thyroid, breast and appendix surgeries using both open and minimally invasive techniques.
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {['Piles Surgery', 'Hernia Repair', 'Gallbladder Removal', 'Appendix', 'Thyroid Surgery', 'Breast Surgery'].map(t => (
                    <span key={t} style={{ background: '#fff', border: '1px solid #fecaca', color: '#c62828', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 9999 }}>{t}</span>
                  ))}
                </div>
                <Link to="/services" className="btn-mc-primary" style={{ background: '#c62828', boxShadow: '0 6px 20px rgba(198,40,40,0.25)', fontSize: 14 }}>
                  Learn More <span className="material-symbols-outlined" style={{ fontSize: 18 }}>east</span>
                </Link>
                <div className="position-absolute" style={{ right: -20, bottom: -20, opacity: 0.05 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 200, color: '#c62828' }}>surgical</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="col-lg-4 d-flex flex-column gap-4">
            {DEPTS.slice(0, 2).map((d, i) => (
              <AnimatedSection key={d.label} delay={(i + 2) * 100}>
                <div className="mc-card h-100 p-4">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: d.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: d.color, fontSize: 22 }}>{d.icon}</span>
                    </div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{d.label}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: '#64748b', margin: 0, lineHeight: 1.6 }}>{d.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {DEPTS.slice(3).map((d, i) => (
            <div key={d.label} className="col-sm-6 col-lg-3">
              <AnimatedSection delay={(i + 4) * 80}>
                <div className="mc-card h-100 p-4">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div style={{ width: 40, height: 40, borderRadius: 11, background: d.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: d.color, fontSize: 20 }}>{d.icon}</span>
                    </div>
                    <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{d.label}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: '#64748b', margin: 0, lineHeight: 1.5 }}>{d.desc}</p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* DOCTOR HIGHLIGHT */}
    <section className="section-py" style={{ background: '#fff' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <AnimatedSection>
              <div className="rounded-4 overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV_FXuaTYyPQcjRVLX89sjvOL2oVH9z3sfXiykper2LkghxUJvuLCVB1vIh2fH2-3892peYO38JaWtcOqyz2KnOM_o0O-Le6sxkIli2YEwAgH8wmwHhouoMzIOM0F09rhhZ6PYNo4XsV2Xn8aO7-v6I5KBNoHRV_Hm3TiGIAuXUFlFc3ZUMrLzgtH6ae2gS8a-tFNZvS73tlyH5oFJgnFTgpanl-eJ2dsk7rV0BOvbrpm_OsooHNHIRQ"
                  alt="Dr. Prabhakar B" className="w-100 object-cover" style={{ height: 440, filter: 'grayscale(15%)' }} />
              </div>
            </AnimatedSection>
          </div>
          <div className="col-lg-7">
            <AnimatedSection delay={150}>
              <div className="mc-badge mc-badge-blue d-inline-flex mb-4">Lead Surgeon</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#0f172a', marginBottom: 10 }}>Dr. Prabhakar B</h2>
              <p style={{ color: '#1565C0', fontSize: 16, fontWeight: 700, marginBottom: 6 }}>MS (General Surgery) · FIAGES · 20+ Years Experience</p>
              <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                Graduated from Bangalore Medical College (MBBS, 2000) and completed MS in General Surgery from University of Mysore (2005). A Fellow of the Indian Association of Gastrointestinal Endo-Surgeons (FIAGES, 2010), Dr. Prabhakar brings over two decades of surgical expertise to the community of Sarjapura.
              </p>

              <div className="row g-3 mb-4">
                {[
                  ['MBBS', 'Bangalore Medical College, 2000'],
                  ['MS Surgery', 'University of Mysore, 2005'],
                  ['FIAGES', 'Endo-Surgeons Fellow, 2010'],
                  ['Experience', '20+ Years'],
                ].map(([label, value]) => (
                  <div key={label} className="col-sm-6">
                    <div className="mc-card p-3">
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="tel:08027823388" className="btn-mc-primary" style={{ fontSize: 15, padding: '13px 28px', background: 'linear-gradient(135deg, #1565C0, #00897B)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
                Book Appointment — 080-27823388
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* LAB SECTION */}
    <section className="section-py" style={{ background: 'linear-gradient(135deg, #00695c 0%, #00897B 50%, #26a69a 100%)' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <AnimatedSection>
              <div className="mc-badge d-inline-flex mb-4" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: 14 }}>biotech</span>
                Diagnostics & Pathology Lab
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#fff', marginBottom: 16 }}>
                24-Hour Lab Services
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, lineHeight: 1.8, maxWidth: 480, marginBottom: 32 }}>
                Our fully-equipped pathology and diagnostics lab is open round the clock. From routine blood tests to comprehensive health panels — accurate results, fast turnaround.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {['Blood Tests', 'Urine Analysis', 'CBC / HbA1c', 'Lipid Profile', 'Thyroid Function', 'Liver Function', 'Kidney Function', 'Blood Sugar'].map(t => (
                  <span key={t} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', padding: '5px 12px', borderRadius: 9999, fontSize: 13, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
              <Link to="/lab" className="btn-mc-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff', fontSize: 15, padding: '12px 28px' }}>
                View All Lab Tests
              </Link>
            </AnimatedSection>
          </div>
          <div className="col-lg-5">
            <AnimatedSection delay={200}>
              <div className="d-flex flex-column gap-4">
                {[
                  { icon: 'schedule', title: 'Open 24 Hours, 7 Days', desc: 'No waiting — walk in anytime for sample collection' },
                  { icon: 'speed',    title: 'Fast Results',          desc: 'Most routine tests reported within 4–6 hours' },
                  { icon: 'verified', title: 'Accurate & Reliable',   desc: 'Quality-controlled testing with certified equipment' },
                ].map(f => (
                  <div key={f.title} className="d-flex gap-4 align-items-start">
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: '#fff', fontSize: 24 }}>{f.icon}</span>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 4 }}>{f.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.6 }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* CONTACT & MAP */}
    <section className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-5">
            <div className="mc-badge mc-badge-green d-inline-flex mb-3">Find Us</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#0f172a' }}>How to Reach Us</h2>
          </div>
        </AnimatedSection>
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <AnimatedSection>
              <div className="mc-card p-5 h-100">
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', marginBottom: 28 }}>Contact Information</h3>
                <div className="d-flex flex-column gap-5">
                  {[
                    { icon: 'location_on', color: '#1565C0', title: 'Address', text: '#41/2, Bagalur Road,\nNear Sri Rama Temple,\nSarjapura, Bengaluru — 562125' },
                    { icon: 'call',        color: '#00897B', title: 'Phone Numbers', text: '080-27823388\n080-27823799' },
                    { icon: 'schedule',    color: '#e65100', title: 'OPD Timings', text: 'Monday to Saturday\n6:00 PM – 8:00 PM' },
                    { icon: 'biotech',     color: '#00695c', title: 'Lab / Diagnostics', text: 'Open 24 Hours\n7 Days a Week' },
                  ].map(({ icon, color, title, text }) => (
                    <div key={title} className="d-flex gap-4 align-items-start">
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span className="material-symbols-outlined fill-icon" style={{ color, fontSize: 24 }}>{icon}</span>
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 4 }}>{title}</div>
                        <div style={{ fontSize: 14, color: '#64748b', whiteSpace: 'pre-line', lineHeight: 1.7 }}>{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <a href="tel:08027823388" className="btn-mc-primary w-100 justify-content-center" style={{ fontSize: 15, padding: '13px', background: 'linear-gradient(135deg, #1565C0, #00897B)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
                    Call Now for Appointment
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="col-lg-7">
            <AnimatedSection delay={150}>
              <div className="rounded-4 overflow-hidden h-100" style={{ minHeight: 400, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                <iframe
                  title="Town Hospital Sarjapura Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2!2d77.785!3d12.908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzI5LjAiTiA3N8KwNDcnMDYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" height="100%" style={{ border: 0, minHeight: 400 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
