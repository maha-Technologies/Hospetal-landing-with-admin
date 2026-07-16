const token = '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';
const repo = 'maha-Technologies/Hospetal-landing-with-admin';
const url = `https://api.github.com/repos/${repo}/issues`;

const data = {
  title: 'Revamp UI using UX4G Design System',
  body: 'Refactor all React components to use UX4G classes instead of Tailwind utility classes.'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github+json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log('Issue Created:', data.html_url))
.catch(error => console.error('Error:', error));
