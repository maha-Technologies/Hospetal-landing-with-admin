import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AdminCentralOverview from './pages/AdminCentralOverview';
import AnnouncementEditorMedicoreAdmin from './pages/AnnouncementEditorMedicoreAdmin';
import CardiologyServicesMedicoreHealth from './pages/CardiologyServicesMedicoreHealth';
import ClinicalPrecision from './pages/ClinicalPrecision';
import ContentManagerAdmin from './pages/ContentManagerAdmin';
import ManageSuccessStoriesAdmin from './pages/ManageSuccessStoriesAdmin';
import MedicoreHealthLandingPage from './pages/MedicoreHealthLandingPage';
import MedicoreHealthLandingPageWithAnnouncementsEnhancedStories from './pages/MedicoreHealthLandingPageWithAnnouncementsEnhancedStories';
import OurDoctorsMedicoreHealth from './pages/OurDoctorsMedicoreHealth';
import StaffDirectoryMedicoreAdmin from './pages/StaffDirectoryMedicoreAdmin';
import SuccessStoryEditorMedicoreAdmin from './pages/SuccessStoryEditorMedicoreAdmin';

const App = () => {
  return (
    <Router>
      <div className="container mt-4 mb-5 border-bottom pb-3">
        <h1 className="h4 mb-3">Hospital App Development Navigation</h1>
        <p className="text-muted mb-3">Click a page below to preview it:</p>
        <div className="d-flex flex-wrap gap-2">
          <Link className="btn btn-outline-primary btn-sm" to="/admin_central_overview">Admin Central Overview</Link>
          <Link className="btn btn-outline-primary btn-sm" to="/announcement_editor_medicore_admin">Announcement Editor</Link>
          <Link className="btn btn-outline-primary btn-sm" to="/cardiology_services_medicore_health">Cardiology Services</Link>
          <Link className="btn btn-outline-primary btn-sm" to="/clinical_precision">Clinical Precision</Link>
          <Link className="btn btn-outline-primary btn-sm" to="/content_manager_admin">Content Manager</Link>
          <Link className="btn btn-outline-primary btn-sm" to="/manage_success_stories_admin">Manage Success Stories</Link>
          <Link className="btn btn-outline-primary btn-sm" to="/medicore_health_landing_page">Main Landing Page</Link>
          <Link className="btn btn-outline-primary btn-sm" to="/medicore_health_landing_page_with_announcements_enhanced_stories">Enhanced Landing Page</Link>
          <Link className="btn btn-outline-primary btn-sm" to="/our_doctors_medicore_health">Our Doctors</Link>
          <Link className="btn btn-outline-primary btn-sm" to="/staff_directory_medicore_admin">Staff Directory</Link>
          <Link className="btn btn-outline-primary btn-sm" to="/success_story_editor_medicore_admin">Success Story Editor</Link>
        </div>
      </div>
      <Routes>
        <Route path="/admin_central_overview" element={<AdminCentralOverview />} />
        <Route path="/announcement_editor_medicore_admin" element={<AnnouncementEditorMedicoreAdmin />} />
        <Route path="/cardiology_services_medicore_health" element={<CardiologyServicesMedicoreHealth />} />
        <Route path="/clinical_precision" element={<ClinicalPrecision />} />
        <Route path="/content_manager_admin" element={<ContentManagerAdmin />} />
        <Route path="/manage_success_stories_admin" element={<ManageSuccessStoriesAdmin />} />
        <Route path="/medicore_health_landing_page" element={<MedicoreHealthLandingPage />} />
        <Route path="/medicore_health_landing_page_with_announcements_enhanced_stories" element={<MedicoreHealthLandingPageWithAnnouncementsEnhancedStories />} />
        <Route path="/our_doctors_medicore_health" element={<OurDoctorsMedicoreHealth />} />
        <Route path="/staff_directory_medicore_admin" element={<StaffDirectoryMedicoreAdmin />} />
        <Route path="/success_story_editor_medicore_admin" element={<SuccessStoryEditorMedicoreAdmin />} />
        <Route path="/" element={<h2>Welcome to Hospital App. Select a route above.</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
