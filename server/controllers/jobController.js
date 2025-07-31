const path = require('path');
const fs = require('fs');

const getJobs = (req, res) => {
  const dataPath = path.join(__dirname, '../data/seedJobs.json');
  try {
    const jobData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    res.status(200).json(jobData);
  } catch (error) {
    console.error('Error reading job data:', error);
    res.status(500).json({ error: 'Failed to retrieve job data' });
  }
}

module.exports = {
  getJobs
};