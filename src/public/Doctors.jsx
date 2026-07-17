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

const DOCTORS = [
  {
    name: 'Dr. Prabhakar B',
    title: 'General Surgeon & Laparoscopic Surgeon',
    qualifications: 'MBBS, MS (General Surgery), FIAGES',
    experience: '20+ Years',
    college: 'Bangalore Medical College & Research Institute',
    university: 'University of Mysore (MS, 2005)',
    fellowship: 'FIAGES — Indian Assoc. of GI Endo-Surgeons, 2010',
    department: 'General & Laparoscopic Surgery',
    deptColor: '#c62828',
    deptBg: '#ffebee',
    timing: 'By Appointment',
    specialties: ['Piles Surgery', 'Hernia Repair', 'Gallbladder (Cholecystectomy)', 'Appendectomy', 'Thyroid Surgery', 'Breast Surgery', 'Laparoscopic Procedures'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV_FXuaTYyPQcjRVLX89sjvOL2oVH9z3sfXiykper2LkghxUJvuLCVB1vIh2fH2-3892peYO38JaWtcOqyz2KnOM_o0O-Le6sxkIli2YEwAgH8wmwHhouoMzIOM0F09rhhZ6PYNo4XsV2Xn8aO7-v6I5KBNoHRV_Hm3TiGIAuXUFlFc3ZUMrLzgtH6ae2gS8a-tFNZvS73tlyH5oFJgnFTgpanl-eJ2dsk7rV0BOvbrpm_OsooHNHIRQ',
    featured: true,
  },
  {
    name: 'Dr. Prabhakar',
    title: 'Gastroenterologist',
    qualifications: 'MBBS, MD (General Medicine), DNB (Gastroenterology)',
    experience: '15+ Years',
    department: 'Gastroenterology',
    deptColor: '#e65100',
    deptBg: '#fff3e0',
    timing: 'By Appointment',
    specialties: ['Acid Reflux / GERD', 'IBS Treatment', 'Liver Disorders', 'Stomach Ulcers', 'Abdominal Pain', 'Digestive Disorders'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHUANWi0i-O2NditsVocXvRqIOY4Kma1ZrI_8r53CMVWtVEDvf21jpiPTalU4x0SJE3jO9ej5ep2A5S2H00WsA825p9401KlGm-tEZt_pmyDOo2iTZ6dmpKNSwyWDfwOaCoqMO-x_N8Z4Emu_5oAOkirB8-wEKxB8tM_n_ByfifCWaUwA8B_H_WEB9g0yVPD5-zz5uHgJ_GgbW9qPmYBH_UPraA7Hd9_ZfjzEBz4376vv4pY-_QwsRQ',
  },
  {
    name: 'General Physician',
    title: 'General OPD Consultant',
    qualifications: 'MBBS',
    experience: 'On-site Daily',
    department: 'General OPD',
    deptColor: '#1565C0',
    deptBg: '#e3f2fd',
    timing: 'Mon–Sat: 6:00 PM – 8:00 PM',
    specialties: ['Fever & Infections', 'Diabetes Management', 'Blood Pressure', 'Thyroid Disorders', 'General Health', 'Prescription Renewals'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA',
  },
  {
    name: 'Visiting Gynaecologist',
    title: 'Obstetrician & Gynaecologist',
    qualifications: 'MBBS, MD / DGO (Gynaecology)',
    experience: 'Visiting Consultant',
    department: 'Gynaecology & OBG',
    deptColor: '#ad1457',
    deptBg: '#fce4ec',
    timing: 'Call 080-27823388 to confirm',
    specialties: ['Antenatal Care', 'Gynaecological Check-up', 'Menstrual Disorders', 'PCOS / PCOD', 'Pregnancy Consultation', 'Routine Pap Smear'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA',
    visiting: true,
  },
  {
    name: 'Visiting Paediatrician',
    title: 'Child & Newborn Specialist',
    qualifications: 'MBBS, MD (Paediatrics) / DCH',
    experience: 'Visiting Consultant',
    department: 'Paediatrics',
    deptColor: '#f57f17',
    deptBg: '#fffde7',
    timing: 'Call 080-27823388 to confirm',
    specialties: ['Newborn Care', 'Vaccination / Immunisation', 'Growth Monitoring', 'Childhood Fever', 'Respiratory Conditions', 'Child Nutrition'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA',
    visiting: true,
  },
  {
    name: 'Visiting Dermatologist',
    title: 'Skin & Hair Specialist',
    qualifications: 'MBBS, DVD / MD (Dermatology)',
    experience: 'Visiting Consultant',
    department: 'Dermatology',
    deptColor: '#558b2f',
    deptBg: '#f1f8e9',
    timing: 'Call 080-27823388 to confirm',
    specialties: ['Acne & Acne Scars', 'Eczema / Psoriasis', 'Fungal Infections', 'Skin Allergies', 'Hair Loss', 'Wart / Corn Removal'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHUANWi0i-O2NditsVocXvRqIOY4Kma1ZrI_8r53CMVWtVEDvf21jpiPTalU4x0SJE3jO9ej5ep2A5S2H00WsA825p9401KlGm-tEZt_pmyDOo2iTZ6dmpKNSwyWDfwOaCoqMO-x_N8Z4Emu_5oAOkirB8-wEKxB8tM_n_ByfifCWaUwA8B_H_WEB9g0yVPD5-zz5uHgJ_GgbW9qPmYBH_UPraA7Hd9_ZfjzEBz4376vv4pY-_QwsRQ',
    visiting: true,
  },
];

const Doctors = () => (
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
          <strong>Visiting Consultants:</strong> Gynaecology, Paediatrics, and Dermatology are served by visiting specialists. Please call <strong>080-27823388</strong> or <strong>080-27823799</strong> in advance to confirm availability and schedule an appointment.
        </p>
      </div>
    </div>

    {/* Featured Doctor */}
    <section className="section-py" style={{ background: '#fff' }}>
      <div className="container">
        <AnimatedSection>
          <div className="mc-card overflow-hidden mb-5" style={{ border: '2px solid #c6282820' }}>
            <div style={{ background: 'linear-gradient(90deg,#c62828 0%,#e53935 100%)', padding: '6px 24px', fontSize: 12, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              ★ Lead Surgeon — General & Laparoscopic Surgery
            </div>
            <div className="row g-0">
              <div className="col-md-4 col-lg-3">
                <img src={DOCTORS[0].img} alt={DOCTORS[0].name} className="w-100 object-cover" style={{ height: '100%', minHeight: 320, filter: 'grayscale(10%)' }} />
              </div>
              <div className="col-md-8 col-lg-9 p-5">
                <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-3">
                  <div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: 4 }}>{DOCTORS[0].name}</h2>
                    <p style={{ color: '#c62828', fontWeight: 700, fontSize: 15, margin: 0 }}>{DOCTORS[0].title}</p>
                  </div>
                  <span className="px-3 py-1 rounded-pill" style={{ background: '#ffebee', color: '#c62828', fontWeight: 700, fontSize: 13 }}>{DOCTORS[0].experience} Experience</span>
                </div>

                <div className="row g-3 mb-4">
                  {[
                    { label: 'Qualification', value: DOCTORS[0].qualifications },
                    { label: 'MBBS From', value: DOCTORS[0].college },
                    { label: 'MS From', value: DOCTORS[0].university },
                    { label: 'Fellowship', value: DOCTORS[0].fellowship },
                  ].map(({ label, value }) => (
                    <div key={label} className="col-md-6">
                      <div style={{ background: '#f8fafc', borderRadius: 10, padding: '10px 14px' }}>
                        <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', marginBottom: 3 }}>{label}</div>
                        <div style={{ fontSize: 13, color: '#0f172a', fontWeight: 600 }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Procedures Performed</div>
                  <div className="d-flex flex-wrap gap-2">
                    {DOCTORS[0].specialties.map(s => (
                      <span key={s} style={{ background: '#ffebee', border: '1px solid #ffcdd2', color: '#c62828', fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 9999 }}>{s}</span>
                    ))}
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="material-symbols-outlined fill-icon" style={{ color: '#c62828', fontSize: 18 }}>schedule</span>
                  <span style={{ fontSize: 14, color: '#64748b' }}>Timing: <strong style={{ color: '#0f172a' }}>{DOCTORS[0].timing}</strong></span>
                </div>

                <div className="mt-4">
                  <a href="tel:08027823388" className="btn-mc-primary" style={{ background: '#c62828', boxShadow: '0 6px 20px rgba(198,40,40,0.25)', fontSize: 14 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>call</span>
                    Book with Dr. Prabhakar B
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Other Doctors Grid */}
        <div className="row g-4">
          {DOCTORS.slice(1).map((doc, i) => (
            <div key={doc.name} className="col-md-6 col-lg-4">
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
                    <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
                      <div>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: 2 }}>{doc.name}</h3>
                        <p style={{ fontSize: 13, color: doc.deptColor, fontWeight: 700, margin: 0 }}>{doc.department}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: '#64748b', marginBottom: 12 }}>{doc.qualifications}</p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {doc.specialties.slice(0, 3).map(s => (
                        <span key={s} style={{ background: `${doc.deptColor}12`, color: doc.deptColor, fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 9999, border: `1px solid ${doc.deptColor}20` }}>{s}</span>
                      ))}
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="material-symbols-outlined fill-icon" style={{ color: doc.deptColor, fontSize: 16 }}>schedule</span>
                      <span style={{ fontSize: 12, color: '#64748b' }}>{doc.timing}</span>
                    </div>
                    <a href="tel:08027823388" className="btn-mc-primary w-100 justify-content-center" style={{ fontSize: 13, padding: '10px', background: doc.deptColor }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>call</span>
                      {doc.visiting ? 'Confirm Availability' : 'Book Appointment'}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>

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

export default Doctors;
