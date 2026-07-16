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
      <div style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
        <strong>Navigation: </strong>
        <Link to="/admin_central_overview" style={{ marginRight: '10px' }}>AdminCentralOverview</Link>
        <Link to="/announcement_editor_medicore_admin" style={{ marginRight: '10px' }}>AnnouncementEditorMedicoreAdmin</Link>
        <Link to="/cardiology_services_medicore_health" style={{ marginRight: '10px' }}>CardiologyServicesMedicoreHealth</Link>
        <Link to="/clinical_precision" style={{ marginRight: '10px' }}>ClinicalPrecision</Link>
        <Link to="/content_manager_admin" style={{ marginRight: '10px' }}>ContentManagerAdmin</Link>
        <Link to="/high_quality_banner_image_for_a_hospital_success_story._a_smiling_patient_in_a" style={{ marginRight: '10px' }}>HighQualityBannerImageForAHospitalSuccessStoryASmilingPatientInA</Link>
        <Link to="/manage_success_stories_admin" style={{ marginRight: '10px' }}>ManageSuccessStoriesAdmin</Link>
        <Link to="/medicore_health_landing_page" style={{ marginRight: '10px' }}>MedicoreHealthLandingPage</Link>
        <Link to="/medicore_health_landing_page_with_announcements_enhanced_stories" style={{ marginRight: '10px' }}>MedicoreHealthLandingPageWithAnnouncementsEnhancedStories</Link>
        <Link to="/our_doctors_medicore_health" style={{ marginRight: '10px' }}>OurDoctorsMedicoreHealth</Link>
        <Link to="/staff_directory_medicore_admin" style={{ marginRight: '10px' }}>StaffDirectoryMedicoreAdmin</Link>
        <Link to="/success_story_editor_medicore_admin" style={{ marginRight: '10px' }}>SuccessStoryEditorMedicoreAdmin</Link>
      </div>
      <Routes>
        <Route path="/admin_central_overview" element={<AdminCentralOverview />} />
        <Route path="/announcement_editor_medicore_admin" element={<AnnouncementEditorMedicoreAdmin />} />
        <Route path="/cardiology_services_medicore_health" element={<CardiologyServicesMedicoreHealth />} />
        <Route path="/clinical_precision" element={<ClinicalPrecision />} />
        <Route path="/content_manager_admin" element={<ContentManagerAdmin />} />
        <Route path="/high_quality_banner_image_for_a_hospital_success_story._a_smiling_patient_in_a" element={<HighQualityBannerImageForAHospitalSuccessStoryASmilingPatientInA />} />
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
