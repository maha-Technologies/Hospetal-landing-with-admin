import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const DEPARTMENTS = [
  'General OPD', 'General & Laparoscopic Surgery', 'Gastroenterology',
  'Gynaecology & OBG', 'Paediatrics', 'Pathology & Diagnostics Lab', 'Dermatology',
];

const DEPT_COLORS = {
  'General OPD':                      { color: '#1565C0', bg: '#e3f2fd' },
  'General & Laparoscopic Surgery':   { color: '#c62828', bg: '#ffebee' },
  'Gastroenterology':                  { color: '#e65100', bg: '#fff3e0' },
  'Gynaecology & OBG':                { color: '#ad1457', bg: '#fce4ec' },
  'Paediatrics':                       { color: '#f57f17', bg: '#fffde7' },
  'Pathology & Diagnostics Lab':      { color: '#00695c', bg: '#e0f2f1' },
  'Dermatology':                       { color: '#558b2f', bg: '#f1f8e9' },
};

const EMPTY_FORM = {
  name: '', title: '', qualifications: '', experience: '', department: DEPARTMENTS[0],
  timing: '', phone: '080-27823388', bio: '', specialties: '', img: '', visiting: false, featured: false,
};

const InputField = ({ label, id, required, children }) => (
  <div className="mb-3">
    <label htmlFor={id} style={{ fontSize: 13, fontWeight: 600, color: 'var(--admin-muted)', marginBottom: 6, display: 'block' }}>
      {label}{required && <span style={{ color: '#ef4444' }}> *</span>}
    </label>
    {children}
  </div>
);

const inputStyle = {
  width: '100%', background: 'var(--admin-surface2)', border: '1px solid var(--admin-border)',
  color: 'var(--admin-text)', borderRadius: 10, padding: '10px 14px', fontSize: 14,
  outline: 'none', transition: 'border-color 0.2s',
};

const AdminDoctors = () => {
  const { doctors, addDoctor, updateDoctor, deleteDoctor } = useData();
  const [view, setView]         = useState('list');       // 'list' | 'form'
  const [form, setForm]         = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [saved, setSaved]       = useState(false);
  const [search, setSearch]     = useState('');

  const filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.department.toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setView('form');
    setSaved(false);
  };

  const openEdit = (doc) => {
    setForm({ ...doc, specialties: Array.isArray(doc.specialties) ? doc.specialties.join(', ') : doc.specialties });
    setEditingId(doc.id);
    setView('form');
    setSaved(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const deptColors = DEPT_COLORS[form.department] || { color: '#1565C0', bg: '#e3f2fd' };
    const payload = {
      ...form,
      ...deptColors,
      specialties: form.specialties.split(',').map(s => s.trim()).filter(Boolean),
    };
    if (editingId) {
      updateDoctor(editingId, payload);
    } else {
      addDoctor(payload);
    }
    setSaved(true);
    setTimeout(() => { setView('list'); setSaved(false); }, 1200);
  };

  const handleDelete = (id) => {
    deleteDoctor(id);
    setDeleteConfirm(null);
  };

  /* ── LIST VIEW ─────────────────────────────────────────────────────────── */
  if (view === 'list') return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--admin-text)', margin: 0 }}>Doctors Management</h1>
          <p style={{ color: 'var(--admin-muted)', fontSize: 13, marginTop: 4 }}>{doctors.length} doctor{doctors.length !== 1 ? 's' : ''} on record</p>
        </div>
        <button onClick={openNew} className="btn-admin-primary">
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span>
          Add New Doctor
        </button>
      </div>

      {/* Search */}
      <div className="admin-card mb-4 p-3">
        <div style={{ position: 'relative' }}>
          <span className="material-symbols-outlined" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--admin-muted)', fontSize: 20 }}>search</span>
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or department..."
            style={{ ...inputStyle, paddingLeft: 40 }} />
        </div>
      </div>

      {/* Table */}
      <div className="admin-card overflow-hidden">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--admin-border)' }}>
              {['Doctor', 'Department', 'Timing', 'Type', 'Actions'].map(h => (
                <th key={h} style={{ padding: '14px 20px', fontSize: 11, fontWeight: 700, color: 'var(--admin-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((doc, i) => {
              const colors = DEPT_COLORS[doc.department] || { color: '#1565C0', bg: '#e3f2fd' };
              return (
                <tr key={doc.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--admin-border)' : 'none', transition: 'background 0.15s' }}
                  onMouseOver={e => e.currentTarget.style.background = 'var(--admin-surface2)'}
                  onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                  {/* Doctor Name */}
                  <td style={{ padding: '14px 20px' }}>
                    <div className="d-flex align-items-center gap-3">
                      <div style={{ width: 40, height: 40, borderRadius: 10, overflow: 'hidden', flexShrink: 0, border: '1px solid var(--admin-border)' }}>
                        <img src={doc.img} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display='none'} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--admin-text)' }}>{doc.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--admin-muted)' }}>{doc.qualifications}</div>
                      </div>
                    </div>
                  </td>
                  {/* Department */}
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ background: `${colors.color}15`, color: colors.color, border: `1px solid ${colors.color}25`, fontSize: 12, fontWeight: 600, padding: '4px 10px', borderRadius: 9999 }}>
                      {doc.department}
                    </span>
                  </td>
                  {/* Timing */}
                  <td style={{ padding: '14px 20px', fontSize: 13, color: 'var(--admin-muted)' }}>{doc.timing}</td>
                  {/* Type */}
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 9999, background: doc.visiting ? 'rgba(245,158,11,0.12)' : 'rgba(0,200,150,0.12)', color: doc.visiting ? '#f59e0b' : '#00c896' }}>
                      {doc.visiting ? 'Visiting' : 'On-Staff'}
                    </span>
                  </td>
                  {/* Actions */}
                  <td style={{ padding: '14px 20px' }}>
                    <div className="d-flex gap-2">
                      <button onClick={() => openEdit(doc)} className="btn-admin-ghost" style={{ padding: '6px 12px', fontSize: 13 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>edit</span> Edit
                      </button>
                      <button onClick={() => setDeleteConfirm(doc.id)} style={{ padding: '6px 12px', fontSize: 13, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>delete</span> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr><td colSpan={5} style={{ padding: 40, textAlign: 'center', color: 'var(--admin-muted)', fontSize: 14 }}>No doctors found matching "{search}"</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="admin-card p-5" style={{ maxWidth: 400, width: '90%' }}>
            <span className="material-symbols-outlined fill-icon" style={{ color: '#ef4444', fontSize: 40, display: 'block', marginBottom: 12 }}>warning</span>
            <h3 style={{ color: 'var(--admin-text)', fontWeight: 700, marginBottom: 8 }}>Delete Doctor?</h3>
            <p style={{ color: 'var(--admin-muted)', fontSize: 14, marginBottom: 24 }}>This will remove the doctor from the public website immediately. This cannot be undone.</p>
            <div className="d-flex gap-3">
              <button onClick={() => handleDelete(deleteConfirm)} style={{ flex: 1, padding: '10px', background: '#ef4444', border: 'none', color: '#fff', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }}>
                Yes, Delete
              </button>
              <button onClick={() => setDeleteConfirm(null)} className="btn-admin-ghost" style={{ flex: 1, justifyContent: 'center' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  /* ── FORM VIEW ─────────────────────────────────────────────────────────── */
  return (
    <div>
      {/* Header */}
      <div className="d-flex align-items-center gap-3 mb-5">
        <button onClick={() => setView('list')} className="btn-admin-ghost" style={{ padding: '8px 12px' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_back</span>
        </button>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--admin-text)', margin: 0 }}>
            {editingId ? 'Edit Doctor' : 'Add New Doctor'}
          </h1>
          <p style={{ color: 'var(--admin-muted)', fontSize: 13, marginTop: 2 }}>Changes will reflect on the public Doctors page instantly</p>
        </div>
      </div>

      {saved && (
        <div className="mb-4 p-3 rounded-3 d-flex align-items-center gap-3" style={{ background: 'rgba(0,200,150,0.1)', border: '1px solid rgba(0,200,150,0.25)' }}>
          <span className="material-symbols-outlined fill-icon" style={{ color: '#00c896', fontSize: 22 }}>check_circle</span>
          <span style={{ color: '#00c896', fontWeight: 600, fontSize: 14 }}>Saved! Redirecting back to list...</span>
        </div>
      )}

      <form onSubmit={handleSave}>
        <div className="row g-4">
          {/* Left Column */}
          <div className="col-lg-8">
            <div className="admin-card p-4 mb-4">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--admin-text)', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid var(--admin-border)' }}>
                Basic Information
              </h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <InputField label="Full Name" id="name" required>
                    <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Dr. Prabhakar B" style={inputStyle} />
                  </InputField>
                </div>
                <div className="col-md-6">
                  <InputField label="Title / Designation" id="title" required>
                    <input id="title" name="title" value={form.title} onChange={handleChange} required placeholder="e.g. General Surgeon" style={inputStyle} />
                  </InputField>
                </div>
                <div className="col-md-6">
                  <InputField label="Qualifications" id="qualifications" required>
                    <input id="qualifications" name="qualifications" value={form.qualifications} onChange={handleChange} required placeholder="e.g. MBBS, MS, FIAGES" style={inputStyle} />
                  </InputField>
                </div>
                <div className="col-md-6">
                  <InputField label="Experience" id="experience">
                    <input id="experience" name="experience" value={form.experience} onChange={handleChange} placeholder="e.g. 20+ Years" style={inputStyle} />
                  </InputField>
                </div>
                <div className="col-md-6">
                  <InputField label="Department" id="department" required>
                    <select id="department" name="department" value={form.department} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                      {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </InputField>
                </div>
                <div className="col-md-6">
                  <InputField label="OPD Timing" id="timing">
                    <input id="timing" name="timing" value={form.timing} onChange={handleChange} placeholder="e.g. Mon–Sat: 6 PM – 8 PM" style={inputStyle} />
                  </InputField>
                </div>
                <div className="col-12">
                  <InputField label="Phone / Appointment Number" id="phone">
                    <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="080-27823388" style={inputStyle} />
                  </InputField>
                </div>
                <div className="col-12">
                  <InputField label="Short Bio" id="bio">
                    <textarea id="bio" name="bio" value={form.bio} onChange={handleChange} rows={3}
                      placeholder="Brief professional background, qualifications, expertise..."
                      style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
                  </InputField>
                </div>
                <div className="col-12">
                  <InputField label="Specialties (comma-separated)" id="specialties">
                    <input id="specialties" name="specialties" value={form.specialties} onChange={handleChange}
                      placeholder="e.g. Piles Surgery, Hernia Repair, Gallbladder Removal"
                      style={inputStyle} />
                  </InputField>
                  <p style={{ fontSize: 12, color: 'var(--admin-muted)', marginTop: 4 }}>Separate each specialty with a comma</p>
                </div>
              </div>
            </div>

            <div className="admin-card p-4">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--admin-text)', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid var(--admin-border)' }}>
                Photo URL
              </h3>
              <InputField label="Profile Image URL" id="img">
                <input id="img" name="img" value={form.img} onChange={handleChange}
                  placeholder="https://... (paste a public image URL)"
                  style={inputStyle} />
              </InputField>
              {form.img && (
                <div className="mt-3">
                  <div style={{ fontSize: 12, color: 'var(--admin-muted)', marginBottom: 8 }}>Preview:</div>
                  <img src={form.img} alt="preview" style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 12, border: '1px solid var(--admin-border)' }}
                    onError={e => { e.target.style.display = 'none'; }} />
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            <div className="admin-card p-4 mb-4">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--admin-text)', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid var(--admin-border)' }}>
                Display Settings
              </h3>

              {[
                { name: 'visiting', label: 'Visiting Consultant', desc: 'Shows "Visiting Consultant" badge and "Call to confirm" timing on public page' },
                { name: 'featured', label: 'Featured Doctor', desc: 'Shows this doctor in the large featured card at the top of the Doctors page' },
              ].map(f => (
                <label key={f.name} className="d-flex gap-3 p-3 rounded-3 mb-3" style={{ cursor: 'pointer', background: form[f.name] ? 'rgba(21,101,192,0.08)' : 'var(--admin-surface2)', border: `1px solid ${form[f.name] ? 'rgba(21,101,192,0.3)' : 'var(--admin-border)'}`, transition: 'all 0.2s' }}>
                  <input type="checkbox" name={f.name} checked={form[f.name]} onChange={handleChange} style={{ width: 18, height: 18, marginTop: 2, flexShrink: 0, accentColor: '#1565C0' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--admin-text)' }}>{f.label}</div>
                    <div style={{ fontSize: 12, color: 'var(--admin-muted)', marginTop: 3, lineHeight: 1.5 }}>{f.desc}</div>
                  </div>
                </label>
              ))}
            </div>

            {/* Preview */}
            <div className="admin-card p-4 mb-4">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--admin-text)', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--admin-border)' }}>
                Card Preview
              </h3>
              {(() => {
                const colors = DEPT_COLORS[form.department] || { color: '#1565C0', bg: '#e3f2fd' };
                return (
                  <div style={{ background: 'var(--admin-bg)', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--admin-border)' }}>
                    {form.visiting && <div style={{ background: '#fff3e0', padding: '4px 14px', fontSize: 11, fontWeight: 700, color: '#e65100', textAlign: 'center' }}>VISITING CONSULTANT</div>}
                    <div style={{ height: 120, background: form.img ? 'transparent' : '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      {form.img
                        ? <img src={form.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display='none'} />
                        : <span className="material-symbols-outlined" style={{ color: '#334155', fontSize: 48 }}>person</span>
                      }
                    </div>
                    <div style={{ padding: '12px 14px' }}>
                      <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--admin-text)', marginBottom: 2 }}>{form.name || 'Doctor Name'}</div>
                      <div style={{ fontSize: 12, color: colors.color, fontWeight: 700, marginBottom: 6 }}>{form.department}</div>
                      <div style={{ fontSize: 12, color: 'var(--admin-muted)', marginBottom: 8 }}>{form.qualifications || 'Qualifications'}</div>
                      <div className="d-flex flex-wrap gap-1">
                        {(form.specialties || '').split(',').slice(0, 2).map((s, i) => s.trim() && (
                          <span key={i} style={{ background: `${colors.color}12`, color: colors.color, fontSize: 10, fontWeight: 600, padding: '2px 7px', borderRadius: 9999 }}>{s.trim()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Actions */}
            <div className="d-flex flex-column gap-3">
              <button type="submit" className="btn-admin-primary justify-content-center" style={{ padding: '13px', fontSize: 15 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>save</span>
                {editingId ? 'Save Changes' : 'Add Doctor'}
              </button>
              <button type="button" onClick={() => setView('list')} className="btn-admin-ghost justify-content-center" style={{ padding: '11px' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminDoctors;
