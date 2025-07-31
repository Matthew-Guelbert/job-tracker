const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Import job router
const jobsRouter = require('./routes/jobs');
app.use('/api/jobs', jobsRouter);

 const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});