import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ── Public Zone ──────────────────────────────────────────────
import Home     from './public/Home';
import Services from './public/Services';
import About    from './public/About';
import Doctors  from './public/Doctors';
import Lab      from './public/Lab';

// ── Admin Zone ───────────────────────────────────────────────
import AdminLayout               from './admin/AdminLayout';
import Dashboard                 from './admin/Dashboard';
import AdminDoctors              from './admin/AdminDoctors';
import ContentManagerAdmin       from './pages/ContentManagerAdmin';
import AnnouncementEditorAdmin   from './pages/AnnouncementEditorMedicoreAdmin';
import StaffDirectoryAdmin       from './pages/StaffDirectoryMedicoreAdmin';
import ManageSuccessStoriesAdmin from './pages/ManageSuccessStoriesAdmin';
import SuccessStoryEditorAdmin   from './pages/SuccessStoryEditorMedicoreAdmin';

const NotFound = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, background: '#f8fafc' }}>
    <div style={{ fontSize: 80, fontWeight: 900, color: '#e2e8f0' }}>404</div>
    <h2 style={{ color: '#0f172a', margin: 0 }}>Page Not Found</h2>
    <p style={{ color: '#64748b' }}>The page you're looking for doesn't exist.</p>
    <a href="/" style={{ background: '#1a73e8', color: '#fff', padding: '12px 28px', borderRadius: 9999, textDecoration: 'none', fontWeight: 600 }}>
      Return Home
    </a>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ═══════════════════════════════════════
            ZONE A — PUBLIC PATIENT PORTAL
            ═══════════════════════════════════════ */}
        <Route path="/"        element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about"    element={<About />} />
        <Route path="/doctors"  element={<Doctors />} />
        <Route path="/lab"      element={<Lab />} />

        {/* ═══════════════════════════════════════
            ZONE B — ADMIN PORTAL
            All admin routes wrapped in AdminLayout
            which provides the dark sidebar shell.
            ═══════════════════════════════════════ */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index                  element={<Dashboard />} />
          <Route path="doctors"         element={<AdminDoctors />} />
          <Route path="content"         element={<ContentManagerAdmin />} />
          <Route path="announcements"   element={<AnnouncementEditorAdmin />} />
          <Route path="staff"           element={<StaffDirectoryAdmin />} />
          <Route path="success_stories" element={<ManageSuccessStoriesAdmin />} />
          <Route path="story_editor"    element={<SuccessStoryEditorAdmin />} />
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
