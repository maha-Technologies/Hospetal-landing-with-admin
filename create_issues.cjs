const token = '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';
const repoOwner = 'maha-Technologies';
const repoName = 'Hospetal-landing-with-admin';

const issues = [
  {
    title: '[Public Website] Build Main Landing Page',
    body: 'Details: Implement the hero section, quick links, and general hospital overview.\n\nComponent: `MedicoreHealthLandingPage`'
  },
  {
    title: '[Public Website] Build Enhanced Landing Page',
    body: 'Details: Integrate dynamic announcements and success stories feeds into the landing page.\n\nComponent: `MedicoreHealthLandingPageWithAnnouncementsEnhancedStories`'
  },
  {
    title: '[Public Website] Implement Cardiology Services Page',
    body: 'Details: Create the detailed department page for Cardiology, including service descriptions and contact forms.\n\nComponent: `CardiologyServicesMedicoreHealth`'
  },
  {
    title: '[Public Website] Implement Clinical Precision Page',
    body: 'Details: Showcase the hospital\'s state-of-the-art technology and clinical accuracy.\n\nComponent: `ClinicalPrecision`'
  },
  {
    title: '[Public Website] Build "Our Doctors" Directory',
    body: 'Details: Create a searchable and filterable directory of medical staff and specialists.\n\nComponent: `OurDoctorsMedicoreHealth`'
  },
  {
    title: '[Public Website] Success Story Gallery',
    body: 'Details: Implement the frontend view for patient success stories (utilizing the high_quality_banner_image assets).'
  },
  {
    title: '[Admin Backend] Build Admin Central Overview',
    body: 'Details: Implement the main dashboard with statistics, quick actions, and recent activity feeds.\n\nComponent: `AdminCentralOverview`'
  },
  {
    title: '[Admin Backend] Implement Content Manager',
    body: 'Details: Create a CMS interface to manage static pages and general website content.\n\nComponent: `ContentManagerAdmin`'
  },
  {
    title: '[Admin Backend] Build Staff Directory Manager',
    body: 'Details: Create a CRUD interface for adding, editing, and removing doctors from the public directory.\n\nComponent: `StaffDirectoryMedicoreAdmin`'
  },
  {
    title: '[Admin Backend] Build Announcement Editor',
    body: 'Details: Implement a rich text editor and publishing system for hospital announcements and alerts.\n\nComponent: `AnnouncementEditorMedicoreAdmin`'
  },
  {
    title: '[Admin Backend] Build Success Story Editor',
    body: 'Details: Interface to draft and publish detailed patient success stories.\n\nComponent: `SuccessStoryEditorMedicoreAdmin`'
  },
  {
    title: '[Admin Backend] Implement Manage Success Stories Dashboard',
    body: 'Details: A table view to manage all drafted and published success stories (edit, delete, unpublish).\n\nComponent: `ManageSuccessStoriesAdmin`'
  }
];

async function createIssues() {
  console.log(`Starting to create ${issues.length} issues...`);
  for (const issue of issues) {
    try {
      const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`, {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Node.js Script',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(issue)
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Created issue: ${data.title} (#${data.number})`);
      } else {
        const err = await response.text();
        console.error(`❌ Failed to create issue: ${issue.title}`);
        console.error(`Status: ${response.status} - ${err}`);
      }
    } catch (error) {
      console.error(`Error creating issue: ${issue.title}`, error);
    }
  }
  console.log('Finished creating issues.');
}

createIssues();
