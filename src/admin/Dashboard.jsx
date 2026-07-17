import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const STATS = [
  { label: 'OPD Patients (Monthly)', value: '420+', icon: 'group',       color: '#1565C0', bg: 'rgba(21,101,192,0.12)' },
  { label: 'Lab Tests (Monthly)',    value: '850+', icon: 'biotech',      color: '#00897B', bg: 'rgba(0,137,123,0.12)' },
  { label: 'Announcements',         value: '6',    icon: 'campaign',     color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
  { label: 'Departments',           value: '7',    icon: 'local_hospital',color: '#c62828', bg: 'rgba(198,40,40,0.12)' },
];

const ACTIVITY = [
  { icon: 'campaign',    color: '#f59e0b', text: 'Announcement added: "Free Diabetes Screening Camp — July 20"', time: '1 hr ago' },
  { icon: 'biotech',    color: '#00897B', text: 'Lab: Hepatitis B test added to test menu', time: '3 hrs ago' },
  { icon: 'badge',      color: '#1565C0', text: 'Doctor profile updated: Dr. Prabhakar B', time: '1 day ago' },
  { icon: 'article',    color: '#c62828', text: 'Home page hero section reviewed', time: '2 days ago' },
  { icon: 'schedule',   color: '#6a1b9a', text: 'OPD timing updated: Mon–Sat 6–8 PM confirmed', time: '3 days ago' },
];

const QUICK = [
  { to: '/admin/announcements', icon: 'add_circle',  label: 'New Announcement', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
  { to: '/admin/staff',         icon: 'person_add',  label: 'Add Doctor',       color: '#1565C0', bg: 'rgba(21,101,192,0.12)' },
  { to: '/admin/departments',   icon: 'edit_note',   label: 'Edit Departments', color: '#00897B', bg: 'rgba(0,137,123,0.12)' },
  { to: '/admin/content',       icon: 'tune',        label: 'Edit Content',     color: '#c62828', bg: 'rgba(198,40,40,0.12)' },
];

const Dashboard = () => {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start mb-5 flex-wrap gap-3">
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--admin-text)', margin: 0 }}>
            {greeting}, Admin 👋
          </h1>
          <p style={{ color: 'var(--admin-muted)', fontSize: 14, marginTop: 4 }}>
            Town Hospital, Sarjapura — Admin Dashboard
          </p>
        </div>
        <div className="d-flex gap-3">
          <Link to="/" className="btn-admin-ghost">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
            View Live Site
          </Link>
          <a href="tel:08027823388" className="btn-admin-primary">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>call</span>
            080-27823388
          </a>
        </div>
      </div>

      {/* Quick Info Strip */}
      <div className="admin-card mb-4 p-3">
        <div className="d-flex flex-wrap gap-4 align-items-center">
          {[
            { icon: 'schedule',    label: 'OPD Hours',    value: 'Mon–Sat: 6:00 PM – 8:00 PM' },
            { icon: 'biotech',     label: 'Lab',          value: 'Open 24 Hours' },
            { icon: 'location_on', label: 'Address',      value: 'Bagalur Road, Near Sri Rama Temple, Sarjapura' },
            { icon: 'call',        label: 'Phone',        value: '080-27823388 / 080-27823799' },
          ].map(i => (
            <div key={i.label} className="d-flex align-items-center gap-2">
              <span className="material-symbols-outlined fill-icon" style={{ color: 'var(--admin-active)', fontSize: 18 }}>{i.icon}</span>
              <div>
                <div style={{ fontSize: 11, color: 'var(--admin-muted)' }}>{i.label}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--admin-text)' }}>{i.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div className="row g-4 mb-5">
        {STATS.map(s => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: s.bg }}>
                <span className="material-symbols-outlined fill-icon" style={{ color: s.color, fontSize: 26 }}>{s.icon}</span>
              </div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--admin-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--admin-text)', lineHeight: 1 }}>{s.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        {/* Recent Activity */}
        <div className="col-lg-8">
          <div className="admin-card h-100">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--admin-text)', margin: 0 }}>Recent Activity</h3>
              <span style={{ fontSize: 12, color: 'var(--admin-muted)' }}>Last 7 days</span>
            </div>
            <div className="d-flex flex-column gap-1">
              {ACTIVITY.map((a, i) => (
                <div key={i} className="d-flex align-items-start gap-3 py-3" style={{ borderBottom: i < ACTIVITY.length - 1 ? '1px solid var(--admin-border)' : 'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${a.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span className="material-symbols-outlined fill-icon" style={{ color: a.color, fontSize: 18 }}>{a.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: 'var(--admin-text)', lineHeight: 1.5 }}>{a.text}</div>
                    <div style={{ fontSize: 11, color: 'var(--admin-muted)', marginTop: 3 }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-lg-4">
          <div className="admin-card h-100">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--admin-text)', marginBottom: 20 }}>Quick Actions</h3>
            <div className="d-flex flex-column gap-3">
              {QUICK.map(q => (
                <Link key={q.label} to={q.to} className="d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none"
                  style={{ background: 'var(--admin-surface2)', border: '1px solid var(--admin-border)', transition: 'all 0.2s ease' }}
                  onMouseOver={e => e.currentTarget.style.borderColor = 'var(--admin-active)'}
                  onMouseOut={e => e.currentTarget.style.borderColor = 'var(--admin-border)'}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: q.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined fill-icon" style={{ color: q.color, fontSize: 20 }}>{q.icon}</span>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--admin-text)' }}>{q.label}</span>
                  <span className="material-symbols-outlined ms-auto" style={{ color: 'var(--admin-muted)', fontSize: 18 }}>chevron_right</span>
                </Link>
              ))}
            </div>

            {/* Hospital Status */}
            <div className="mt-4 p-3 rounded-3" style={{ background: 'rgba(0,137,123,0.08)', border: '1px solid rgba(0,137,123,0.2)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--admin-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Hospital Status</div>
              {[
                { label: 'OPD', status: 'Open (6–8 PM)', ok: true },
                { label: 'Diagnostics Lab', status: 'Open 24 hrs', ok: true },
                { label: 'Emergency Line', status: '080-27823388', ok: true },
              ].map(s => (
                <div key={s.label} className="d-flex align-items-center justify-content-between mb-2">
                  <span style={{ fontSize: 13, color: 'var(--admin-muted)' }}>{s.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: s.ok ? '#00c896' : '#ef4444', background: s.ok ? 'rgba(0,200,150,0.1)' : 'rgba(239,68,68,0.1)', padding: '2px 8px', borderRadius: 9999 }}>{s.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
