import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

const About = () => (
  <div>
    <Navbar />

    {/* Hero */}
    <section style={{ background: 'linear-gradient(135deg,#0a0f1e,#0d2137,#1565C0)', padding: '80px 0 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 70%, rgba(0,137,123,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="mc-badge mc-badge-blue d-inline-flex mb-4">About Town Hospital</div>
        <h1 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#fff', marginBottom: 14 }}>
          Sarjapura's Trusted<br />Community Hospital
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 17, maxWidth: 520, margin: '0 auto 36px' }}>
          Providing compassionate, accessible healthcare to the families of Sarjapura and surrounding villages — right in your neighbourhood.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {[
            { value: '10+', label: 'Years in Sarjapura' },
            { value: '197', label: 'Patient Reviews' },
            { value: '7',   label: 'Departments' },
            { value: '24h', label: 'Diagnostics Lab' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00c896', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Who We Are */}
    <section className="section-py" style={{ background: '#fff' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <AnimatedSection>
              <div className="rounded-4 overflow-hidden shadow-lg">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA"
                  alt="Town Hospital Sarjapura" className="w-100 object-cover" style={{ height: 420 }} />
              </div>
            </AnimatedSection>
          </div>
          <div className="col-lg-6">
            <AnimatedSection delay={150}>
              <div className="mc-badge mc-badge-blue d-inline-flex mb-4">Who We Are</div>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#0f172a', marginBottom: 16 }}>
                Your Neighbourhood Healthcare Partner
              </h2>
              <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.9, marginBottom: 16 }}>
                Town Hospital is a trusted multispeciality clinic located on Bagalur Road, Sarjapura — right next to Sri Rama Temple. We have been serving the local community with honest, affordable and high-quality medical care for over a decade.
              </p>
              <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.9, marginBottom: 24 }}>
                Our hospital brings together experienced doctors across general medicine, surgery, gastroenterology, gynaecology, paediatrics and dermatology — along with a 24-hour diagnostic laboratory that makes quality testing accessible at any hour.
              </p>
              <div className="d-flex flex-column gap-3">
                {[
                  { icon: 'location_on', text: '#41/2, Bagalur Road, Near Sri Rama Temple, Sarjapura, Bengaluru — 562125' },
                  { icon: 'call',        text: '080-27823388 | 080-27823799' },
                  { icon: 'schedule',    text: 'OPD: Mon–Sat, 6:00 PM – 8:00 PM · Lab: 24 Hours' },
                ].map(({ icon, text }) => (
                  <div key={icon} className="d-flex align-items-start gap-3">
                    <span className="material-symbols-outlined fill-icon" style={{ color: '#1565C0', fontSize: 20, flexShrink: 0, marginTop: 2 }}>{icon}</span>
                    <span style={{ fontSize: 14, color: '#475569', lineHeight: 1.7 }}>{text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* Mission & Values */}
    <section className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-5">
            <div className="mc-badge mc-badge-green d-inline-flex mb-3">Our Purpose</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#0f172a' }}>Mission & Values</h2>
          </div>
        </AnimatedSection>

        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <AnimatedSection delay={100}>
              <div className="mc-card h-100 p-5" style={{ borderLeft: '4px solid #1565C0' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#1565C0', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>Our Mission</div>
                <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.9, margin: 0 }}>
                  To provide honest, compassionate and affordable medical care to every patient who walks through our doors — treating every individual like family, regardless of background or financial situation.
                </p>
              </div>
            </AnimatedSection>
          </div>
          <div className="col-lg-6">
            <AnimatedSection delay={200}>
              <div className="mc-card h-100 p-5" style={{ borderLeft: '4px solid #00897B' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#00697B', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>Our Vision</div>
                <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.9, margin: 0 }}>
                  To be the most trusted healthcare provider in Sarjapura — a hospital where families feel safe, doctors are accessible, and quality care is never out of reach.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="row g-4">
          {[
            { icon: 'favorite',       color: '#c62828', bg: '#fff5f5', title: 'Patient First',       desc: 'Every decision is made with the patient\'s wellbeing as the top priority. No compromise.' },
            { icon: 'diversity_3',    color: '#1565C0', bg: '#e3f2fd', title: 'Community Rooted',    desc: 'We are part of Sarjapura — we understand the needs of local families and serve with empathy.' },
            { icon: 'price_check',    color: '#00695c', bg: '#e0f2f1', title: 'Affordable Care',     desc: 'Quality healthcare should not be a luxury. We keep our services accessible to all.' },
            { icon: 'verified',       color: '#e65100', bg: '#fff3e0', title: 'Honest Medicine',     desc: 'We believe in transparent diagnosis, honest advice, and evidence-based treatment only.' },
          ].map((v, i) => (
            <div key={v.title} className="col-sm-6 col-lg-3">
              <AnimatedSection delay={i * 100}>
                <div className="mc-card h-100 p-5 text-center">
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <span className="material-symbols-outlined fill-icon" style={{ color: v.color, fontSize: 30 }}>{v.icon}</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Location & How to Reach */}
    <section className="section-py" style={{ background: '#fff' }}>
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-5">
            <div className="mc-badge mc-badge-blue d-inline-flex mb-3">Find Us</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#0f172a' }}>Location & Directions</h2>
          </div>
        </AnimatedSection>

        <div className="row g-4">
          <div className="col-lg-4">
            <AnimatedSection>
              <div className="mc-card p-5 h-100">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: 24 }}>How to Reach</h3>
                <div className="d-flex flex-column gap-4">
                  {[
                    { icon: 'location_on', color: '#1565C0', title: 'Address', text: '#41/2, Bagalur Road,\nNear Sri Rama Temple,\nSarjapura, Bengaluru — 562125' },
                    { icon: 'near_me',     color: '#00897B', title: 'Landmark', text: 'Next to Sri Rama Temple\nSarjapura Bus Stop — 200 metres' },
                    { icon: 'call',        color: '#c62828', title: 'Contact', text: '080-27823388\n080-27823799' },
                    { icon: 'schedule',    color: '#e65100', title: 'Timings', text: 'OPD: Mon–Sat, 6–8 PM\nLab: Open 24 Hours' },
                  ].map(({ icon, color, title, text }) => (
                    <div key={title} className="d-flex align-items-start gap-3">
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span className="material-symbols-outlined fill-icon" style={{ color, fontSize: 20 }}>{icon}</span>
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13, color: '#0f172a', marginBottom: 2 }}>{title}</div>
                        <div style={{ fontSize: 13, color: '#64748b', whiteSpace: 'pre-line', lineHeight: 1.7 }}>{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <a href="https://maps.google.com/?q=Town+Hospital+Sarjapura+Bangalore+Bagalur+Road" target="_blank" rel="noopener noreferrer" className="btn-mc-primary w-100 justify-content-center" style={{ background: 'linear-gradient(135deg,#1565C0,#00897B)', fontSize: 14 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>directions</span>
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="col-lg-8">
            <AnimatedSection delay={150}>
              <div className="rounded-4 overflow-hidden" style={{ height: '100%', minHeight: 440, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                <iframe
                  title="Town Hospital Sarjapura Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4!2d77.786!3d12.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c567892d7a9%3A0x0!2zVG93biBIb3NwaXRhbCwgU2FyamFwdXJh!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" height="100%" style={{ border: 0, minHeight: 440 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: '#0a0f1e', padding: '60px 0', textAlign: 'center' }}>
      <div className="container">
        <h2 className="font-display" style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 10 }}>We're Here For You</h2>
        <p style={{ color: '#64748b', fontSize: 16, marginBottom: 32 }}>Book an appointment or walk into our lab — any time, any day.</p>
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <a href="tel:08027823388" className="btn-mc-primary" style={{ fontSize: 15, padding: '13px 32px', background: 'linear-gradient(135deg,#1565C0,#00897B)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
            080-27823388
          </a>
          <Link to="/services" className="btn-mc-outline" style={{ fontSize: 15, padding: '11px 32px', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
            View All Departments
          </Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
