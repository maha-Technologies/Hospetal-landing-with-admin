import React, { useEffect, useRef, useState } from 'react';
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

const DOCTORS = [
  { name: 'Dr. Elena Vance',   specialty: 'Cardiology',      exp: '20 yrs', dept: 'Heart Center',       rating: 4.9, reviews: 312, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV_FXuaTYyPQcjRVLX89sjvOL2oVH9z3sfXiykper2LkghxUJvuLCVB1vIh2fH2-3892peYO38JaWtcOqyz2KnOM_o0O-Le6sxkIli2YEwAgH8wmwHhouoMzIOM0F09rhhZ6PYNo4XsV2Xn8aO7-v6I5KBNoHRV_Hm3TiGIAuXUFlFc3ZUMrLzgtH6ae2gS8a-tFNZvS73tlyH5oFJgnFTgpanl-eJ2dsk7rV0BOvbrpm_OsooHNHIRQ' },
  { name: 'Dr. James Okafor',  specialty: 'Neurology',       exp: '15 yrs', dept: 'Brain & Spine',       rating: 4.8, reviews: 245, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHUANWi0i-O2NditsVocXvRqIOY4Kma1ZrI_8r53CMVWtVEDvf21jpiPTalU4x0SJE3jO9ej5ep2A5S2H00WsA825p9401KlGm-tEZt_pmyDOo2iTZ6dmpKNSwyWDfwOaCoqMO-x_N8Z4Emu_5oAOkirB8-wEKxB8tM_n_ByfifCWaUwA8B_H_WEB9g0yVPD5-zz5uHgJ_GgbW9qPmYBH_UPraA7Hd9_ZfjzEBz4376vv4pY-_QwsRQ' },
  { name: 'Dr. Sophia Patel',  specialty: 'Pediatrics',      exp: '12 yrs', dept: 'Children\'s Health',   rating: 5.0, reviews: 418, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA' },
  { name: 'Dr. Elena Rodriguez', specialty: 'Orthopedics',   exp: '18 yrs', dept: 'Joint & Spine',       rating: 4.7, reviews: 189, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLMARPYBmIMGZXAvLbvSDIB9h78N6z2WhSe3_geHmNHwCm2ZN6M_BtpZ7ykopTLyPSXN3pzSaOjyKMtYR7lziuOHzoghq0qo7pW4hzww6qPND4nWeRf7_fIjHOHa-q448wuklbNUJAHcrD858wnCELX64TlTZIwOwulH5kU__evZ0C6FiJnOKgWiTmfJpAIMm1EzKtjvhrNzwQGdWwdG3baquUgpkYcI468Vhtw8-WPWmcWvODeCnbdA' },
  { name: 'Dr. Marcus Chen',   specialty: 'Oncology',        exp: '22 yrs', dept: 'Cancer Center',       rating: 4.9, reviews: 276, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV_FXuaTYyPQcjRVLX89sjvOL2oVH9z3sfXiykper2LkghxUJvuLCVB1vIh2fH2-3892peYO38JaWtcOqyz2KnOM_o0O-Le6sxkIli2YEwAgH8wmwHhouoMzIOM0F09rhhZ6PYNo4XsV2Xn8aO7-v6I5KBNoHRV_Hm3TiGIAuXUFlFc3ZUMrLzgtH6ae2gS8a-tFNZvS73tlyH5oFJgnFTgpanl-eJ2dsk7rV0BOvbrpm_OsooHNHIRQ' },
  { name: 'Dr. Aisha Mensah',  specialty: 'Endocrinology',  exp: '10 yrs', dept: 'Diabetes & Hormones', rating: 4.8, reviews: 134, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA' },
];

const SPECS = ['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Oncology', 'Endocrinology'];

const Doctors = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? DOCTORS : DOCTORS.filter(d => d.specialty === filter);

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e2d4a 50%, #1a3a6e 100%)', padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(0,200,150,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container position-relative" style={{ zIndex: 2, textAlign: 'center' }}>
          <div className="mc-badge mc-badge-green d-inline-flex mb-4">
            <span className="material-symbols-outlined fill-icon" style={{ fontSize: 14 }}>stethoscope</span>
            200+ Medical Specialists
          </div>
          <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: '#fff', marginBottom: 16 }}>
            Meet Our Expert Team
          </h1>
          <p style={{ color: '#94a3b8', fontSize: 18, maxWidth: 520, margin: '0 auto' }}>
            World-class physicians dedicated to delivering compassionate, evidence-based care.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-py" style={{ background: 'var(--mc-surface)' }}>
        <div className="container">
          {/* Filter */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
            {SPECS.map(s => (
              <button key={s} onClick={() => setFilter(s)}
                style={{
                  padding: '8px 20px', borderRadius: 9999, fontSize: 14, fontWeight: 600, cursor: 'pointer', border: '1.5px solid',
                  background: filter === s ? 'var(--mc-blue)' : '#fff',
                  color: filter === s ? '#fff' : 'var(--mc-text-muted)',
                  borderColor: filter === s ? 'var(--mc-blue)' : 'var(--mc-border)',
                  transition: 'all 0.2s ease',
                }}>
                {s}
              </button>
            ))}
          </div>

          {/* Doctors Grid */}
          <div className="row g-4">
            {filtered.map((d, i) => (
              <div key={d.name} className="col-md-6 col-lg-4">
                <AnimatedSection delay={i * 80}>
                  <div className="mc-card h-100">
                    {/* Photo */}
                    <div className="position-relative overflow-hidden" style={{ height: 260 }}>
                      <img src={d.img} alt={d.name} className="w-100 h-100 object-cover" style={{ transition: 'transform 0.5s ease' }}
                        onMouseOver={e => e.currentTarget.style.transform='scale(1.08)'}
                        onMouseOut={e => e.currentTarget.style.transform='scale(1)'}
                      />
                      <div style={{ position: 'absolute', top: 16, right: 16 }}>
                        <span style={{ background: 'rgba(255,255,255,0.95)', borderRadius: 9999, padding: '4px 10px', fontSize: 13, fontWeight: 700, color: '#0f172a', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                          <span className="material-symbols-outlined fill-icon" style={{ color: '#fbbf24', fontSize: 14 }}>star</span>
                          {d.rating}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{d.name}</h3>
                      <p style={{ color: '#1a73e8', fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{d.specialty}</p>

                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {[
                          { icon: 'local_hospital', text: d.dept },
                          { icon: 'schedule', text: d.exp },
                          { icon: 'reviews', text: `${d.reviews} reviews` },
                        ].map(({ icon, text }) => (
                          <span key={text} className="d-inline-flex align-items-center gap-1" style={{ fontSize: 12, color: '#64748b', background: '#f8fafc', padding: '4px 10px', borderRadius: 9999, border: '1px solid #e2e8f0' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>{icon}</span>
                            {text}
                          </span>
                        ))}
                      </div>

                      <button className="btn-mc-primary w-100 justify-content-center" style={{ fontSize: 14, padding: '10px' }}>
                        Book Consultation
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-5">
              <span className="material-symbols-outlined" style={{ fontSize: 48, color: '#cbd5e1' }}>person_search</span>
              <p style={{ color: '#94a3b8', marginTop: 12 }}>No doctors found for this specialty.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
