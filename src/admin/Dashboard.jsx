import React from 'react';
import { Link } from 'react-router-dom';

const STATS = [
  { label: 'Total Patients',     value: '15,842', change: '+12%',  positive: true,  icon: 'group',          color: '#1a73e8', bg: 'rgba(26,115,232,0.12)' },
  { label: 'Active Doctors',     value: '247',    change: '+3%',   positive: true,  icon: 'stethoscope',    color: '#00c896', bg: 'rgba(0,200,150,0.12)' },
  { label: 'Announcements',      value: '8',      change: '2 new', positive: true,  icon: 'campaign',       color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
  { label: 'Success Stories',    value: '124',    change: '+5%',   positive: true,  icon: 'auto_stories',   color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)' },
];

const RECENT_ACTIVITY = [
  { type: 'story',        text: 'New success story published: "Robert Henderson - Cardiology"', time: '2 hrs ago', icon: 'auto_stories', color: '#8b5cf6' },
  { type: 'announcement', text: 'Announcement updated: "Free Wellness Checks for Seniors"',     time: '4 hrs ago', icon: 'campaign',     color: '#f59e0b' },
  { type: 'staff',        text: 'New doctor added: Dr. Marcus Chen, Oncology',                  time: '1 day ago', icon: 'badge',        color: '#00c896' },
  { type: 'content',      text: 'Home page hero section updated by Admin',                       time: '1 day ago', icon: 'article',      color: '#1a73e8' },
  { type: 'story',        text: 'Success story edited: "Elena Rodriguez - Neurology"',           time: '2 days ago', icon: 'auto_stories', color: '#8b5cf6' },
];

const QUICK_ACTIONS = [
  { to: '/admin/announcements', icon: 'add_circle', label: 'New Announcement', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
  { to: '/admin/story_editor',  icon: 'edit_note',   label: 'Write Story',       color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)' },
  { to: '/admin/staff',         icon: 'person_add',  label: 'Add Doctor',        color: '#00c896', bg: 'rgba(0,200,150,0.12)' },
  { to: '/admin/content',       icon: 'tune',        label: 'Edit Content',      color: '#1a73e8', bg: 'rgba(26,115,232,0.12)' },
];

const Dashboard = () => {
  return (
    <div>
      {/* Page header */}
      <div className="d-flex justify-content-between align-items-start mb-5 flex-wrap gap-3">
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--admin-text)', margin: 0 }}>Good Morning, Admin 👋</h1>
          <p style={{ color: 'var(--admin-muted)', fontSize: 14, marginTop: 4 }}>Here's what's happening at MediCore today.</p>
        </div>
        <Link to="/" className="btn-admin-ghost">
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
          View Live Site
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="row g-4 mb-5">
        {STATS.map((s, i) => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: s.bg }}>
                <span className="material-symbols-outlined fill-icon" style={{ color: s.color, fontSize: 26 }}>{s.icon}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: 'var(--admin-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--admin-text)', lineHeight: 1 }}>{s.value}</div>
              </div>
              <span className="admin-badge admin-badge-green" style={{ alignSelf: 'flex-start' }}>
                {s.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        {/* Recent Activity */}
        <div className="col-lg-7">
          <div className="admin-card h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--admin-text)', margin: 0 }}>Recent Activity</h3>
              <button className="btn-admin-ghost" style={{ padding: '6px 12px', fontSize: 13 }}>View All</button>
            </div>
            <div className="d-flex flex-column" style={{ gap: 4 }}>
              {RECENT_ACTIVITY.map((a, i) => (
                <div key={i} className="d-flex align-items-start gap-3 p-3 rounded-3" style={{ background: i % 2 === 0 ? 'var(--admin-surface2)' : 'transparent' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${a.bg ?? 'rgba(26,115,232,0.12)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'rgba(26,115,232,0.08)' }}>
                    <span className="material-symbols-outlined fill-icon" style={{ color: a.color, fontSize: 18 }}>{a.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 14, color: 'var(--admin-text)', margin: 0, lineHeight: 1.5 }}>{a.text}</p>
                    <span style={{ fontSize: 12, color: 'var(--admin-muted)' }}>{a.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-lg-5">
          <div className="admin-card mb-4">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--admin-text)', marginBottom: 20 }}>Quick Actions</h3>
            <div className="d-flex flex-column gap-3">
              {QUICK_ACTIONS.map(a => (
                <Link key={a.to} to={a.to} className="d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none"
                  style={{ background: 'var(--admin-surface2)', border: '1px solid var(--admin-border)', transition: 'all 0.2s ease' }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = a.color; e.currentTarget.style.background = a.bg; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--admin-border)'; e.currentTarget.style.background = 'var(--admin-surface2)'; }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined fill-icon" style={{ color: a.color, fontSize: 20 }}>{a.icon}</span>
                  </div>
                  <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--admin-text)' }}>{a.label}</span>
                  <span className="material-symbols-outlined ms-auto" style={{ color: 'var(--admin-muted)', fontSize: 20 }}>chevron_right</span>
                </Link>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="admin-card">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--admin-text)', marginBottom: 20 }}>System Status</h3>
            {[
              { label: 'Frontend (Vite)',     status: 'Online',  color: '#00c896' },
              { label: 'Backend API',         status: 'Running', color: '#00c896' },
              { label: 'MongoDB Database',    status: 'Online',  color: '#00c896' },
              { label: 'Auth Service (JWT)',  status: 'Active',  color: '#00c896' },
            ].map(s => (
              <div key={s.label} className="d-flex justify-content-between align-items-center py-2" style={{ borderBottom: '1px solid var(--admin-border)' }}>
                <span style={{ fontSize: 14, color: 'var(--admin-muted)' }}>{s.label}</span>
                <span className="d-flex align-items-center gap-2" style={{ fontSize: 13, color: s.color, fontWeight: 600 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: s.color, display: 'inline-block' }} />
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
