import React, { createContext, useContext, useState } from 'react';

// ─── Initial Doctor Data (from real Town Hospital info) ──────────────────────
const INITIAL_DOCTORS = [
  {
    id: 1,
    name: 'Dr. Prabhakar B',
    title: 'General Surgeon & Laparoscopic Surgeon',
    qualifications: 'MBBS, MS (General Surgery), FIAGES',
    experience: '20+ Years',
    department: 'General & Laparoscopic Surgery',
    deptColor: '#c62828',
    deptBg: '#ffebee',
    timing: 'By Appointment',
    phone: '080-27823388',
    specialties: ['Piles Surgery', 'Hernia Repair', 'Gallbladder Removal', 'Appendectomy', 'Thyroid Surgery', 'Breast Surgery', 'Laparoscopic Procedures'],
    bio: 'MBBS from Bangalore Medical College (2000), MS General Surgery from University of Mysore (2005), FIAGES Fellow (2010). Over 20 years of surgical expertise serving the Sarjapura community.',
    visiting: false,
    featured: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV_FXuaTYyPQcjRVLX89sjvOL2oVH9z3sfXiykper2LkghxUJvuLCVB1vIh2fH2-3892peYO38JaWtcOqyz2KnOM_o0O-Le6sxkIli2YEwAgH8wmwHhouoMzIOM0F09rhhZ6PYNo4XsV2Xn8aO7-v6I5KBNoHRV_Hm3TiGIAuXUFlFc3ZUMrLzgtH6ae2gS8a-tFNZvS73tlyH5oFJgnFTgpanl-eJ2dsk7rV0BOvbrpm_OsooHNHIRQ',
  },
  {
    id: 2,
    name: 'Dr. Prabhakar',
    title: 'Gastroenterologist',
    qualifications: 'MBBS, MD (General Medicine), DNB (Gastroenterology)',
    experience: '15+ Years',
    department: 'Gastroenterology',
    deptColor: '#e65100',
    deptBg: '#fff3e0',
    timing: 'By Appointment',
    phone: '080-27823388',
    specialties: ['Acid Reflux / GERD', 'IBS Treatment', 'Liver Disorders', 'Stomach Ulcers', 'Abdominal Pain', 'Digestive Disorders'],
    bio: 'Specialist in digestive health with DNB in Gastroenterology. Treats all conditions of the stomach, intestine, liver and pancreas.',
    visiting: false,
    featured: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHUANWi0i-O2NditsVocXvRqIOY4Kma1ZrI_8r53CMVWtVEDvf21jpiPTalU4x0SJE3jO9ej5ep2A5S2H00WsA825p9401KlGm-tEZt_pmyDOo2iTZ6dmpKNSwyWDfwOaCoqMO-x_N8Z4Emu_5oAOkirB8-wEKxB8tM_n_ByfifCWaUwA8B_H_WEB9g0yVPD5-zz5uHgJ_GgbW9qPmYBH_UPraA7Hd9_ZfjzEBz4376vv4pY-_QwsRQ',
  },
  {
    id: 3,
    name: 'General Physician',
    title: 'General OPD Consultant',
    qualifications: 'MBBS',
    experience: 'Daily OPD',
    department: 'General OPD',
    deptColor: '#1565C0',
    deptBg: '#e3f2fd',
    timing: 'Mon–Sat: 6:00 PM – 8:00 PM',
    phone: '080-27823388',
    specialties: ['Fever & Infections', 'Diabetes Management', 'Blood Pressure', 'Thyroid Disorders', 'General Health', 'Prescription Renewals'],
    bio: 'Experienced general physician handling all primary care consultations during OPD hours.',
    visiting: false,
    featured: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA',
  },
  {
    id: 4,
    name: 'Visiting Gynaecologist',
    title: 'Obstetrician & Gynaecologist',
    qualifications: 'MBBS, MD / DGO (Gynaecology)',
    experience: 'Visiting',
    department: 'Gynaecology & OBG',
    deptColor: '#ad1457',
    deptBg: '#fce4ec',
    timing: 'Call to confirm schedule',
    phone: '080-27823388',
    specialties: ['Antenatal Care', 'Gynaecological Check-up', 'Menstrual Disorders', 'PCOS / PCOD', 'Pregnancy Consultation', 'Routine Pap Smear'],
    bio: 'Visiting consultant gynaecologist providing comprehensive women\'s healthcare services.',
    visiting: true,
    featured: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEWnuJYKiItVG-pC-AhOUA32JyzMkBSfpJ3DV7vqB2mwYPJZqO3QKTm3BOmvrtOZuTX5VOT4-nTyGtGaFNfNrbR-XOrT9sBrWgACQutDZF_0GFvfNFasgM_1Yxp3aZ2sYa1O5A1nkpI8op_2joN8QqA3tToSceu0UzTRFBOkb6ONdn6oLAqEwRsNsGBWXmjvmz2Nac-qmxh4b9CdeuV2f2isUN4uBRaJEN-DS2QDxIYQLhsoIILmACzA',
  },
  {
    id: 5,
    name: 'Visiting Paediatrician',
    title: 'Child & Newborn Specialist',
    qualifications: 'MBBS, MD (Paediatrics) / DCH',
    experience: 'Visiting',
    department: 'Paediatrics',
    deptColor: '#f57f17',
    deptBg: '#fffde7',
    timing: 'Call to confirm schedule',
    phone: '080-27823388',
    specialties: ['Newborn Care', 'Vaccination / Immunisation', 'Growth Monitoring', 'Childhood Fever', 'Respiratory Conditions', 'Child Nutrition'],
    bio: 'Visiting consultant paediatrician providing specialised care for newborns, infants and children.',
    visiting: true,
    featured: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD05Qrm-ChNDO6bs_Iz7Ynl-mElOy339wJkfAn_eh_KqbV6rbnIF24j-RSjTBKfRabtI2luKQHvqNff6F6JYVFFPMmYtCTleRKnkKwN7Hbr2Hexz5zWZ3nAU_TEx0je7lu5_kcLjhCS-qnrsXN2r2uMY8rmtHxadTgWB1zVb5u7BGiZgSjwILn5TwUlD2wb5A-ZPFHXXVEyHZ5YDXCq2taZs4BLIrnpIG4_upK75Rtij9zsW2twPzapiA',
  },
  {
    id: 6,
    name: 'Visiting Dermatologist',
    title: 'Skin & Hair Specialist',
    qualifications: 'MBBS, DVD / MD (Dermatology)',
    experience: 'Visiting',
    department: 'Dermatology',
    deptColor: '#558b2f',
    deptBg: '#f1f8e9',
    timing: 'Call to confirm schedule',
    phone: '080-27823388',
    specialties: ['Acne & Acne Scars', 'Eczema / Psoriasis', 'Fungal Infections', 'Skin Allergies', 'Hair Loss', 'Wart / Corn Removal'],
    bio: 'Visiting dermatologist specialising in skin, hair and nail conditions.',
    visiting: true,
    featured: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHUANWi0i-O2NditsVocXvRqIOY4Kma1ZrI_8r53CMVWtVEDvf21jpiPTalU4x0SJE3jO9ej5ep2A5S2H00WsA825p9401KlGm-tEZt_pmyDOo2iTZ6dmpKNSwyWDfwOaCoqMO-x_N8Z4Emu_5oAOkirB8-wEKxB8tM_n_ByfifCWaUwA8B_H_WEB9g0yVPD5-zz5uHgJ_GgbW9qPmYBH_UPraA7Hd9_ZfjzEBz4376vv4pY-_QwsRQ',
  },
];

// ─── Initial Announcements ───────────────────────────────────────────────────
const INITIAL_ANNOUNCEMENTS = [
  { id: 1, title: 'Free Diabetes Screening Camp — July 20', category: 'Community Health', status: 'Published', audience: 'Patients', date: '2024-07-10', content: 'Town Hospital is conducting a free blood sugar screening camp on July 20th from 9 AM to 1 PM. All are welcome.' },
  { id: 2, title: 'OPD Timing: Mon–Sat 6 PM – 8 PM',      category: 'Clinic Update',    status: 'Published', audience: 'All',      date: '2024-07-05', content: 'Our OPD is open Monday to Saturday from 6:00 PM to 8:00 PM. The Diagnostics Lab is open 24 hours.' },
  { id: 3, title: 'Lab: Hepatitis B Test Added',           category: 'Clinic Update',    status: 'Draft',     audience: 'Staff',    date: '2024-07-01', content: 'HBsAg (Hepatitis B Surface Antigen) test is now available at our 24-hour diagnostics lab.' },
];

// ─── Context Setup ───────────────────────────────────────────────────────────
const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [doctors, setDoctors]             = useState(INITIAL_DOCTORS);
  const [announcements, setAnnouncements] = useState(INITIAL_ANNOUNCEMENTS);

  // ── Doctor CRUD ─────────────────────────────────────────────────────────
  const addDoctor = (doc) =>
    setDoctors(prev => [...prev, { ...doc, id: Date.now() }]);

  const updateDoctor = (id, updates) =>
    setDoctors(prev => prev.map(d => d.id === id ? { ...d, ...updates } : d));

  const deleteDoctor = (id) =>
    setDoctors(prev => prev.filter(d => d.id !== id));

  // ── Announcement CRUD ────────────────────────────────────────────────────
  const addAnnouncement = (ann) =>
    setAnnouncements(prev => [...prev, { ...ann, id: Date.now() }]);

  const updateAnnouncement = (id, updates) =>
    setAnnouncements(prev => prev.map(a => a.id === id ? { ...a, ...updates } : a));

  const deleteAnnouncement = (id) =>
    setAnnouncements(prev => prev.filter(a => a.id !== id));

  return (
    <DataContext.Provider value={{
      doctors, addDoctor, updateDoctor, deleteDoctor,
      announcements, addAnnouncement, updateAnnouncement, deleteAnnouncement,
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used inside DataProvider');
  return ctx;
};

export default DataContext;
