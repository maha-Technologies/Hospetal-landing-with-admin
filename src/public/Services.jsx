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

const DEPARTMENTS = [
  {
    id: 'opd',
    icon: 'stethoscope',
    color: '#1565C0',
    bg: 'linear-gradient(135deg,#e3f2fd,#bbdefb)',
    name: 'General OPD',
    tagline: 'Primary Healthcare for Everyone',
    desc: 'Our General OPD provides first-line medical care for patients of all ages. Our experienced general physicians handle fever, infections, lifestyle diseases, chronic conditions, and general wellness consultations.',
    services: ['Fever & Infections', 'Diabetes Management', 'Blood Pressure', 'Thyroid Disorders', 'General Check-ups', 'Prescription Renewals'],
    timing: 'Mon–Sat: 6:00 PM – 8:00 PM',
    doctor: 'General Physicians',
  },
  {
    id: 'surgery',
    icon: 'surgical',
    color: '#c62828',
    bg: 'linear-gradient(135deg,#ffebee,#ffcdd2)',
    name: 'General & Laparoscopic Surgery',
    tagline: 'Expert Surgical Care',
    desc: 'Led by Dr. Prabhakar B (MS, FIAGES), our surgery department provides both open and minimally invasive laparoscopic procedures. With 20+ years of experience, our surgeon handles a wide range of abdominal and general surgical conditions.',
    services: ['Piles & Fissure Surgery', 'Hernia Repair', 'Gallbladder Removal (Cholecystectomy)', 'Appendectomy', 'Thyroid Surgery', 'Breast Surgery', 'Incisional Hernia', 'Abdominal Surgery'],
    timing: 'By Appointment',
    doctor: 'Dr. Prabhakar B — MS, FIAGES (20+ yrs)',
  },
  {
    id: 'gastro',
    icon: 'gastroenterology',
    color: '#e65100',
    bg: 'linear-gradient(135deg,#fff3e0,#ffe0b2)',
    name: 'Gastroenterology',
    tagline: 'Digestive Health Specialist',
    desc: 'Our gastroenterology department provides expert diagnosis and treatment for all conditions related to the digestive system including stomach, intestines, liver and pancreas.',
    services: ['Acid Reflux / GERD', 'Irritable Bowel Syndrome', 'Liver Disorders', 'Stomach Ulcers', 'Constipation', 'Abdominal Pain'],
    timing: 'By Appointment',
    doctor: 'Dr. Prabhakar — MBBS, MD, DNB (Gastroenterology)',
  },
  {
    id: 'gyno',
    icon: 'pregnant_woman',
    color: '#ad1457',
    bg: 'linear-gradient(135deg,#fce4ec,#f8bbd0)',
    name: 'Gynaecology & Obstetrics',
    tagline: 'Women\'s Healthcare',
    desc: 'Comprehensive women\'s health services including antenatal care, routine gynaecological check-ups, and treatment for menstrual and reproductive health disorders.',
    services: ['Antenatal / Prenatal Care', 'Gynaecological Consultations', 'Menstrual Disorders', 'PCOS / PCOD', 'Vaginal Infections', 'Routine Pap Smear'],
    timing: 'Visiting Consultant — Call to confirm',
    doctor: 'Visiting Consultant Gynaecologist',
    visiting: true,
  },
  {
    id: 'paediatrics',
    icon: 'child_care',
    color: '#f57f17',
    bg: 'linear-gradient(135deg,#fffde7,#fff9c4)',
    name: 'Paediatrics & Child Care',
    tagline: 'Specialist Care for Children',
    desc: 'Our paediatric consultations cover growth monitoring, vaccinations, common childhood illnesses, and developmental assessments for newborns, infants and children up to 14 years.',
    services: ['Newborn Care', 'Vaccination / Immunisation', 'Growth Monitoring', 'Childhood Fever', 'Respiratory Conditions', 'Nutritional Assessment'],
    timing: 'Visiting Consultant — Call to confirm',
    doctor: 'Visiting Consultant Paediatrician',
    visiting: true,
  },
  {
    id: 'lab',
    icon: 'biotech',
    color: '#00695c',
    bg: 'linear-gradient(135deg,#e0f2f1,#b2dfdb)',
    name: 'Pathology & Diagnostics Lab',
    tagline: '24-Hour Laboratory Services',
    desc: 'Our fully-equipped diagnostic laboratory is open around the clock. We provide a complete range of blood tests, urine tests, and other diagnostic investigations with fast, accurate results.',
    services: ['Complete Blood Count (CBC)', 'Blood Sugar / HbA1c', 'Lipid Profile', 'Liver Function Tests (LFT)', 'Kidney Function Tests (KFT)', 'Thyroid Profile', 'Urine Analysis', 'Widal Test'],
    timing: 'Open 24 Hours, 7 Days a Week',
    doctor: 'Lab Technician (On-site)',
  },
  {
    id: 'dermatology',
    icon: 'dermatology',
    color: '#558b2f',
    bg: 'linear-gradient(135deg,#f1f8e9,#dcedc8)',
    name: 'Dermatology',
    tagline: 'Skin & Hair Care',
    desc: 'Diagnosis and treatment of a wide range of skin conditions including acne, eczema, fungal infections, and cosmetic skin concerns.',
    services: ['Acne & Acne Scars', 'Eczema / Psoriasis', 'Fungal Infections', 'Skin Allergies', 'Hair Loss Treatment', 'Wart / Corn Removal'],
    timing: 'Visiting Consultant — Call to confirm',
    doctor: 'Visiting Consultant Dermatologist',
    visiting: true,
  },
];

const Services = () => (
  <div>
    <Navbar />

    {/* Hero */}
    <section style={{ background: 'linear-gradient(135deg, #0a0f1e, #0d2137, #1565C0)', padding: '80px 0 60px', textAlign: 'center' }}>
      <div className="container">
        <div className="mc-badge mc-badge-blue d-inline-flex mb-4">Town Hospital Sarjapura</div>
        <h1 className="font-display" style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: '#fff', marginBottom: 14 }}>
          Our Departments & Services
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 17, maxWidth: 520, margin: '0 auto 32px' }}>
          Comprehensive healthcare across 7 specialised departments — from routine OPD to advanced surgery and round-the-clock diagnostics.
        </p>
        <a href="tel:08027823388" className="btn-mc-primary" style={{ fontSize: 15, background: 'linear-gradient(135deg,#1565C0,#00897B)' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
          080-27823388 — Book Appointment
        </a>
      </div>
    </section>

    {/* OPD Timing Banner */}
    <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container py-3 d-flex flex-wrap align-items-center gap-4">
        <div className="d-flex align-items-center gap-2">
          <span className="material-symbols-outlined fill-icon" style={{ color: '#e65100', fontSize: 20 }}>emergency</span>
          <strong style={{ fontSize: 14, color: '#0f172a' }}>OPD Hours:</strong>
          <span style={{ fontSize: 14, color: '#64748b' }}>Mon–Sat, 6:00 PM – 8:00 PM</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="material-symbols-outlined fill-icon" style={{ color: '#00897B', fontSize: 20 }}>biotech</span>
          <strong style={{ fontSize: 14, color: '#0f172a' }}>Diagnostics Lab:</strong>
          <span style={{ fontSize: 14, color: '#00897B', fontWeight: 700 }}>Open 24 Hours, 7 Days</span>
        </div>
        <div className="d-flex align-items-center gap-2 ms-auto">
          <span className="material-symbols-outlined fill-icon" style={{ color: '#1565C0', fontSize: 20 }}>call</span>
          <a href="tel:08027823799" style={{ fontSize: 14, color: '#1565C0', fontWeight: 700, textDecoration: 'none' }}>080-27823799</a>
        </div>
      </div>
    </div>

    {/* Departments */}
    <section className="section-py" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="d-flex flex-column gap-5">
          {DEPARTMENTS.map((dept, i) => (
            <AnimatedSection key={dept.id} delay={i * 60}>
              <div className="mc-card overflow-hidden">
                <div className="row g-0">
                  {/* Color side panel */}
                  <div className="col-lg-3 d-flex flex-column align-items-center justify-content-center p-5 text-center" style={{ background: dept.bg }}>
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', marginBottom: 16 }}>
                      <span className="material-symbols-outlined fill-icon" style={{ color: dept.color, fontSize: 36 }}>{dept.icon}</span>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>{dept.name}</h3>
                    <p style={{ fontSize: 12, color: '#64748b', margin: 0 }}>{dept.tagline}</p>
                    {dept.visiting && (
                      <span className="mt-3 d-inline-block px-2 py-1 rounded-pill" style={{ background: '#fff3e0', color: '#e65100', fontSize: 11, fontWeight: 700 }}>
                        Visiting Consultant
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="col-lg-9 p-5">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>{dept.desc}</p>
                        <div className="d-flex flex-column gap-1">
                          {[
                            { icon: 'person', label: 'Doctor', value: dept.doctor },
                            { icon: 'schedule', label: 'Timing', value: dept.timing },
                          ].map(({ icon, label, value }) => (
                            <div key={label} className="d-flex align-items-start gap-2 py-2" style={{ borderTop: '1px solid #f1f5f9' }}>
                              <span className="material-symbols-outlined fill-icon" style={{ color: dept.color, fontSize: 18, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                              <div>
                                <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>{label}: </span>
                                <span style={{ fontSize: 14, color: '#0f172a', fontWeight: 700 }}>{value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>Services Offered</div>
                        <div className="d-flex flex-wrap gap-2">
                          {dept.services.map(s => (
                            <span key={s} style={{ background: `${dept.color}10`, border: `1px solid ${dept.color}25`, color: dept.color, fontSize: 12, fontWeight: 600, padding: '5px 11px', borderRadius: 9999 }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
                      <a href="tel:08027823388" className="btn-mc-primary" style={{ fontSize: 14, padding: '10px 22px', background: dept.color, boxShadow: `0 6px 20px ${dept.color}30` }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>call</span>
                        {dept.visiting ? 'Call to Confirm Availability' : 'Book Appointment'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section style={{ background: '#0a0f1e', padding: '60px 0', textAlign: 'center' }}>
      <div className="container">
        <h2 className="font-display" style={{ color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>Not Sure Which Department?</h2>
        <p style={{ color: '#64748b', fontSize: 16, marginBottom: 32 }}>Call us and our staff will guide you to the right doctor.</p>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <a href="tel:08027823388" className="btn-mc-primary" style={{ fontSize: 15, padding: '14px 32px', background: 'linear-gradient(135deg,#1565C0,#00897B)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>call</span>
            080-27823388
          </a>
          <a href="tel:08027823799" className="btn-mc-outline" style={{ fontSize: 15, padding: '12px 32px', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
            080-27823799
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
