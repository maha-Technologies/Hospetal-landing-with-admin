const fs = require('fs');
const token = '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';
const repo = 'maha-Technologies/Hospetal-landing-with-admin';
const issueNumber = 17;
const url = `https://api.github.com/repos/${repo}/issues/${issueNumber}/comments`;

const planContent = fs.readFileSync('C:/Users/malli/.gemini/antigravity/brain/0faa8928-533d-4a4d-94e2-8a9c811ee6f0/implementation_plan.md', 'utf8');

const data = {
  body: planContent
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
.then(data => console.log('Comment added:', data.html_url))
.catch(error => console.error('Error:', error));
