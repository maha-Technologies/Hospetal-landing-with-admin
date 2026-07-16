import React, { useState } from 'react';

const ANNOUNCEMENTS = [
  { id: 1, title: 'OPD Timing Update — Evening Slots Added', category: 'Clinic Update', status: 'Published', audience: 'Patients', date: '2024-07-10' },
  { id: 2, title: 'Free Blood Sugar Screening Camp — July 20', category: 'Community Health', status: 'Published', audience: 'Patients', date: '2024-07-08' },
  { id: 3, title: 'Diagnostic Lab: Holiday Schedule for Sankranti', category: 'Holiday Schedule', status: 'Draft', audience: 'Staff', date: '2024-07-05' },
];

const CATEGORIES = ['Clinic Update', 'Community Health', 'Holiday Schedule', 'Clinical Alert', 'Administrative', 'Emergency'];

const AnnouncementEditorMedicoreAdmin = () => {
  const [view, setView] = useState('list'); // 'list' | 'editor'
  const [form, setForm] = useState({
    title: '', category: 'Clinic Update', audience: 'Patients', status: 'Draft', content: '', date: '', pin: false, emailNotify: false,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => { setSaved(false); setView('list'); }, 1800);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-start mb-5 flex-wrap gap-3">
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--admin-text)', margin: 0 }}>
            {view === 'list' ? 'Announcements' : 'New Announcement'}
          </h1>
          <p style={{ color: 'var(--admin-muted)', fontSize: 14, marginTop: 4 }}>
            {view === 'list'
              ? 'Manage and broadcast updates to patients and staff.'
              : 'Compose and publish a new announcement across the Town Hospital network.'}
          </p>
        </div>
        {view === 'list' ? (
          <button className="btn-admin-primary" onClick={() => setView('editor')}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add_circle</span>
            New Announcement
          </button>
        ) : (
          <button className="btn-admin-ghost" onClick={() => setView('list')}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
            Back to List
          </button>
        )}
      </div>

      {/* ── LIST VIEW ── */}
      {view === 'list' && (
        <div className="admin-card">
          <div className="d-flex align-items-center gap-3 mb-4">
            <input
              className="admin-input"
              placeholder="Search announcements..."
              style={{ maxWidth: 320 }}
            />
            <select className="admin-input" style={{ maxWidth: 180 }}>
              <option value="">All Statuses</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Audience</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ANNOUNCEMENTS.map(a => (
                  <tr key={a.id}>
                    <td style={{ maxWidth: 280 }}>
                      <div style={{ fontWeight: 600, color: 'var(--admin-text)', fontSize: 14 }}>{a.title}</div>
                    </td>
                    <td>
                      <span className="admin-badge admin-badge-blue">{a.category}</span>
                    </td>
                    <td style={{ color: 'var(--admin-muted)', fontSize: 13 }}>{a.audience}</td>
                    <td>
                      <span className={`admin-badge ${a.status === 'Published' ? 'admin-badge-green' : 'admin-badge-yellow'}`}>
                        {a.status}
                      </span>
                    </td>
                    <td style={{ color: 'var(--admin-muted)', fontSize: 13 }}>{a.date}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn-admin-ghost" style={{ padding: '6px 12px', fontSize: 12 }}
                          onClick={() => setView('editor')}>
                          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>edit</span>
                          Edit
                        </button>
                        <button className="btn-admin-danger" style={{ padding: '6px 12px', fontSize: 12 }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── EDITOR VIEW ── */}
      {view === 'editor' && (
        <form onSubmit={handleSave}>
          {/* Toast */}
          {saved && (
            <div style={{ position: 'fixed', bottom: 28, right: 28, background: '#00c896', color: '#fff', padding: '14px 22px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600, fontSize: 14, zIndex: 9999, boxShadow: '0 8px 24px rgba(0,200,150,0.35)', animation: 'fadeIn 0.3s ease' }}>
              <span className="material-symbols-outlined fill-icon" style={{ fontSize: 20 }}>check_circle</span>
              Announcement saved!
            </div>
          )}

          <div className="row g-4">
            {/* Main column */}
            <div className="col-lg-8">
              {/* Basic Info */}
              <div className="admin-card mb-4">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--admin-border)' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--admin-active)' }}>edit_note</span>
                  <h3 style={{ fontSize: 13, fontWeight: 700, color: 'var(--admin-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', margin: 0 }}>General Information</h3>
                </div>

                <div className="d-flex flex-column gap-4">
                  <div>
                    <label className="admin-label">Announcement Title</label>
                    <input className="admin-input" placeholder="e.g., Free Diabetes Screening Camp — July 20th"
                      value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="admin-label">Category</label>
                      <select className="admin-input" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                        {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="admin-label">Target Audience</label>
                      <select className="admin-input" value={form.audience} onChange={e => setForm({ ...form, audience: e.target.value })}>
                        <option>Patients</option>
                        <option>Staff</option>
                        <option>All</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="admin-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--admin-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--admin-active)' }}>article</span>
                    <h3 style={{ fontSize: 13, fontWeight: 700, color: 'var(--admin-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', margin: 0 }}>Content</h3>
                  </div>
                  <div className="d-flex gap-2">
                    {['format_bold', 'format_italic', 'link', 'format_list_bulleted', 'image'].map(icon => (
                      <button key={icon} type="button" style={{ background: 'var(--admin-surface2)', border: '1px solid var(--admin-border)', borderRadius: 6, padding: '5px 7px', cursor: 'pointer', color: 'var(--admin-muted)', display: 'flex', alignItems: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{icon}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <textarea
                  className="admin-input"
                  rows={10}
                  placeholder="Write your announcement details here. Include all relevant information for patients or staff..."
                  style={{ resize: 'vertical', lineHeight: 1.7 }}
                  value={form.content}
                  onChange={e => setForm({ ...form, content: e.target.value })}
                />
                <div style={{ marginTop: 10, fontSize: 12, color: 'var(--admin-muted)' }}>
                  {form.content.split(' ').filter(Boolean).length} words · Est. {Math.max(1, Math.ceil(form.content.split(' ').filter(Boolean).length / 200))} min read
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 d-flex flex-column gap-4">
              {/* Publishing */}
              <div className="admin-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--admin-active)' }}>publish</span>
                  <h3 style={{ fontSize: 13, fontWeight: 700, color: 'var(--admin-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', margin: 0 }}>Publishing</h3>
                </div>

                {[
                  { value: 'Draft',   icon: 'drafts',        label: 'Save as Draft',  sub: 'Private to admins only' },
                  { value: 'Scheduled', icon: 'schedule',    label: 'Schedule',       sub: 'Publish at future time' },
                  { value: 'Published', icon: 'rocket_launch', label: 'Publish Now',  sub: 'Immediate deployment' },
                ].map(opt => (
                  <label key={opt.value} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', background: form.status === opt.value ? 'rgba(26,115,232,0.08)' : 'var(--admin-surface2)', border: `1px solid ${form.status === opt.value ? 'var(--admin-active)' : 'var(--admin-border)'}`, borderRadius: 10, cursor: 'pointer', marginBottom: 8, transition: 'all 0.2s ease' }}>
                    <div className="d-flex align-items-center gap-3">
                      <span className="material-symbols-outlined fill-icon" style={{ color: form.status === opt.value ? 'var(--admin-active)' : 'var(--admin-muted)', fontSize: 20 }}>{opt.icon}</span>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--admin-text)' }}>{opt.label}</div>
                        <div style={{ fontSize: 11, color: 'var(--admin-muted)' }}>{opt.sub}</div>
                      </div>
                    </div>
                    <input type="radio" name="status" checked={form.status === opt.value}
                      onChange={() => setForm({ ...form, status: opt.value })}
                      style={{ accentColor: 'var(--admin-active)', width: 18, height: 18 }} />
                  </label>
                ))}

                <div style={{ marginTop: 16 }}>
                  <label className="admin-label">Publication Date & Time</label>
                  <input type="datetime-local" className="admin-input"
                    value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--admin-border)' }}>
                  <span style={{ fontSize: 14, color: 'var(--admin-muted)' }}>Notify via Email</span>
                  <label style={{ position: 'relative', display: 'inline-block', width: 44, height: 24, cursor: 'pointer' }}>
                    <input type="checkbox" checked={form.emailNotify} onChange={e => setForm({ ...form, emailNotify: e.target.checked })}
                      style={{ opacity: 0, width: 0, height: 0 }} />
                    <span style={{ position: 'absolute', inset: 0, background: form.emailNotify ? 'var(--admin-active)' : 'var(--admin-border)', borderRadius: 24, transition: '0.2s ease' }}>
                      <span style={{ position: 'absolute', top: 3, left: form.emailNotify ? 22 : 3, width: 18, height: 18, background: '#fff', borderRadius: '50%', transition: '0.2s ease' }} />
                    </span>
                  </label>
                </div>
              </div>

              {/* Visibility */}
              <div className="admin-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--admin-active)' }}>visibility</span>
                  <h3 style={{ fontSize: 13, fontWeight: 700, color: 'var(--admin-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', margin: 0 }}>Visibility</h3>
                </div>
                {[
                  { key: 'pin', icon: 'push_pin', label: 'Pin to dashboard top' },
                ].map(opt => (
                  <label key={opt.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--admin-border)', cursor: 'pointer' }}>
                    <div className="d-flex align-items-center gap-2">
                      <span className="material-symbols-outlined" style={{ color: 'var(--admin-muted)', fontSize: 18 }}>{opt.icon}</span>
                      <span style={{ fontSize: 14, color: 'var(--admin-text)' }}>{opt.label}</span>
                    </div>
                    <input type="checkbox" checked={form[opt.key]} onChange={e => setForm({ ...form, [opt.key]: e.target.checked })}
                      style={{ accentColor: 'var(--admin-active)', width: 16, height: 16 }} />
                  </label>
                ))}
              </div>

              {/* Action buttons */}
              <div className="d-flex gap-3">
                <button type="button" className="btn-admin-ghost flex-grow-1" onClick={() => setView('list')}>
                  Discard
                </button>
                <button type="submit" className="btn-admin-primary flex-grow-1">
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>save</span>
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AnnouncementEditorMedicoreAdmin;
