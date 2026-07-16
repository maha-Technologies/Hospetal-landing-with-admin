import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Public Zone Components
import MedicoreHealthLandingPage from './pages/MedicoreHealthLandingPage';
import MedicoreHealthLandingPageWithAnnouncementsEnhancedStories from './pages/MedicoreHealthLandingPageWithAnnouncementsEnhancedStories';
import CardiologyServicesMedicoreHealth from './pages/CardiologyServicesMedicoreHealth';
import ClinicalPrecision from './pages/ClinicalPrecision';
import OurDoctorsMedicoreHealth from './pages/OurDoctorsMedicoreHealth';

// Admin Zone Components
import AdminCentralOverview from './pages/AdminCentralOverview';
import AnnouncementEditorMedicoreAdmin from './pages/AnnouncementEditorMedicoreAdmin';
import ContentManagerAdmin from './pages/ContentManagerAdmin';
import ManageSuccessStoriesAdmin from './pages/ManageSuccessStoriesAdmin';
import StaffDirectoryMedicoreAdmin from './pages/StaffDirectoryMedicoreAdmin';
import SuccessStoryEditorMedicoreAdmin from './pages/SuccessStoryEditorMedicoreAdmin';

const DebugNavigation = () => {
  const location = useLocation();
  // Don't show debug nav if they want a clean view, but for development we keep it at the very top.
  // We can make it collapsible or just a small bar.
  return (
    <div className="bg-light border-bottom py-2 px-3 d-flex flex-wrap gap-2 align-items-center" style={{ fontSize: '12px', zIndex: 9999, position: 'relative' }}>
      <strong className="text-muted me-2">DEV NAV:</strong>
      <span className="text-primary fw-bold">Public:</span>
      <Link className="text-decoration-none text-secondary hover-primary" to="/">Home</Link>
      <Link className="text-decoration-none text-secondary hover-primary" to="/doctors">Doctors</Link>
      <Link className="text-decoration-none text-secondary hover-primary" to="/cardiology">Cardiology</Link>
      <Link className="text-decoration-none text-secondary hover-primary" to="/clinical_precision">Clinical Precision</Link>
      <Link className="text-decoration-none text-secondary hover-primary" to="/enhanced_landing">Enhanced Home</Link>
      
      <span className="text-danger fw-bold ms-3">Admin:</span>
      <Link className="text-decoration-none text-secondary hover-danger" to="/admin">Dashboard</Link>
      <Link className="text-decoration-none text-secondary hover-danger" to="/admin/content">Content</Link>
      <Link className="text-decoration-none text-secondary hover-danger" to="/admin/staff">Staff</Link>
      <Link className="text-decoration-none text-secondary hover-danger" to="/admin/announcements">Announcements</Link>
      <Link className="text-decoration-none text-secondary hover-danger" to="/admin/success_stories">Success Stories</Link>
      <Link className="text-decoration-none text-secondary hover-danger" to="/admin/success_story_editor">Story Editor</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <DebugNavigation />
      
      <Routes>
        {/* ========================================== */}
        {/* ZONE A: PUBLIC PATIENT PORTAL              */}
        {/* ========================================== */}
        <Route path="/" element={<MedicoreHealthLandingPage />} />
        <Route path="/enhanced_landing" element={<MedicoreHealthLandingPageWithAnnouncementsEnhancedStories />} />
        <Route path="/cardiology" element={<CardiologyServicesMedicoreHealth />} />
        <Route path="/clinical_precision" element={<ClinicalPrecision />} />
        <Route path="/doctors" element={<OurDoctorsMedicoreHealth />} />

        {/* ========================================== */}
        {/* ZONE B: ADMIN CENTRAL BACKEND              */}
        {/* ========================================== */}
        <Route path="/admin" element={<AdminCentralOverview />} />
        <Route path="/admin/announcements" element={<AnnouncementEditorMedicoreAdmin />} />
        <Route path="/admin/content" element={<ContentManagerAdmin />} />
        <Route path="/admin/success_stories" element={<ManageSuccessStoriesAdmin />} />
        <Route path="/admin/success_story_editor" element={<SuccessStoryEditorMedicoreAdmin />} />
        <Route path="/admin/staff" element={<StaffDirectoryMedicoreAdmin />} />
        
        {/* Fallback */}
        <Route path="*" element={
          <div className="container mt-5 text-center">
            <h2>404 - Page Not Found</h2>
            <Link to="/" className="btn btn-primary mt-3">Return to Home</Link>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
