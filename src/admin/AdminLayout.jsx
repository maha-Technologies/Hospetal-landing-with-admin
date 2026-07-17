import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const NAV = [
  { to: '/admin',              icon: 'dashboard',      label: 'Dashboard',        exact: true },
  { to: '/admin/content',      icon: 'article',         label: 'Content Manager' },
  { to: '/admin/announcements',icon: 'campaign',        label: 'Announcements' },
  { to: '/admin/staff',        icon: 'badge',           label: 'Staff Directory' },
  { to: '/admin/success_stories', icon: 'auto_stories', label: 'Success Stories' },
  { to: '/admin/story_editor', icon: 'edit_note',       label: 'Story Editor' },
];

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (item) =>
    item.exact ? location.pathname === item.to : location.pathname.startsWith(item.to);

  return (
    <div className="admin-shell">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Logo */}
        <div className="admin-sidebar-logo">
          <div className="logo-icon">
            <span className="material-symbols-outlined fill-icon" style={{ fontSize: 20, color: '#fff' }}>medical_services</span>
          </div>
          <div>
            <div className="logo-text">Town Hospital</div>
            <div style={{ fontSize: 11, color: 'var(--admin-muted)', marginTop: 1 }}>Admin Portal — Sarjapura</div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, paddingTop: 8 }}>
          <div className="admin-nav-section">
            <div className="admin-nav-label">Main Menu</div>
            {NAV.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`admin-nav-item ${isActive(item) ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="material-symbols-outlined fill-icon" style={{ fontSize: 20 }}>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="admin-nav-section" style={{ borderTop: '1px solid var(--admin-border)', marginTop: 12 }}>
            <div className="admin-nav-label">Account</div>
            <Link to="/" className="admin-nav-item">
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>open_in_new</span>
              View Public Site
            </Link>
            <button className="admin-nav-item w-100 border-0 text-start" style={{ cursor: 'pointer', background: 'transparent' }}
              onClick={() => navigate('/')}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>logout</span>
              Logout
            </button>
          </div>
        </nav>

        {/* User info at bottom */}
        <div style={{ padding: '16px 20px', borderTop: '1px solid var(--admin-border)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #1a73e8, #00c896)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14 }}>
            A
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--admin-text)' }}>Admin User</div>
            <div style={{ fontSize: 12, color: 'var(--admin-muted)' }}>admin@medicore.com</div>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <div className="admin-content">
        {/* Topbar */}
        <div className="admin-topbar">
          <div className="d-flex align-items-center gap-3">
            {/* Mobile hamburger */}
            <button className="d-md-none border-0 bg-transparent" style={{ color: 'var(--admin-text)', cursor: 'pointer' }}
              onClick={() => setSidebarOpen(!sidebarOpen)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--admin-text)' }}>
                {NAV.find(n => isActive(n))?.label ?? 'Admin'}
              </div>
              <div style={{ fontSize: 12, color: 'var(--admin-muted)' }}>
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <button style={{ background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: 10, padding: '8px 14px', color: 'var(--admin-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>search</span>
              Search...
            </button>
            <button style={{ width: 38, height: 38, background: 'var(--admin-surface)', border: '1px solid var(--admin-border)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--admin-muted)', cursor: 'pointer', position: 'relative' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>notifications</span>
              <span style={{ position: 'absolute', top: 6, right: 6, width: 8, height: 8, borderRadius: '50%', background: '#ef4444', border: '1.5px solid var(--admin-sidebar)' }} />
            </button>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #1a73e8, #00c896)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
              A
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="admin-main">
          <Outlet />
        </div>
      </div>

      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 99 }}
          onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
};

export default AdminLayout;
