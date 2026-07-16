import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AdminCentralOverview from './pages/AdminCentralOverview';
import AnnouncementEditorMedicoreAdmin from './pages/AnnouncementEditorMedicoreAdmin';
import CardiologyServicesMedicoreHealth from './pages/CardiologyServicesMedicoreHealth';
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
      <div style={{ padding: '20px', background: '#fff', marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Hospital App Development Navigation</h1>
        <p style={{ marginBottom: '10px', color: '#666' }}>Click a page below to preview it:</p>
        <ul style={{ lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px' }}>
          <li><Link to="/admin_central_overview" style={{ color: '#005EB8', textDecoration: 'underline' }}>Admin Central Overview</Link></li>
          <li><Link to="/announcement_editor_medicore_admin" style={{ color: '#005EB8', textDecoration: 'underline' }}>Announcement Editor</Link></li>
          <li><Link to="/cardiology_services_medicore_health" style={{ color: '#005EB8', textDecoration: 'underline' }}>Cardiology Services</Link></li>
          <li><Link to="/content_manager_admin" style={{ color: '#005EB8', textDecoration: 'underline' }}>Content Manager</Link></li>
          <li><Link to="/manage_success_stories_admin" style={{ color: '#005EB8', textDecoration: 'underline' }}>Manage Success Stories</Link></li>
          <li><Link to="/medicore_health_landing_page" style={{ color: '#005EB8', textDecoration: 'underline' }}>Main Landing Page</Link></li>
          <li><Link to="/medicore_health_landing_page_with_announcements_enhanced_stories" style={{ color: '#005EB8', textDecoration: 'underline' }}>Enhanced Landing Page</Link></li>
          <li><Link to="/our_doctors_medicore_health" style={{ color: '#005EB8', textDecoration: 'underline' }}>Our Doctors</Link></li>
          <li><Link to="/staff_directory_medicore_admin" style={{ color: '#005EB8', textDecoration: 'underline' }}>Staff Directory</Link></li>
          <li><Link to="/success_story_editor_medicore_admin" style={{ color: '#005EB8', textDecoration: 'underline' }}>Success Story Editor</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/admin_central_overview" element={<AdminCentralOverview />} />
        <Route path="/announcement_editor_medicore_admin" element={<AnnouncementEditorMedicoreAdmin />} />
        <Route path="/cardiology_services_medicore_health" element={<CardiologyServicesMedicoreHealth />} />
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
