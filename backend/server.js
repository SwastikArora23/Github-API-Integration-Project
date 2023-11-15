// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetchCommitData from './fetchCommitData.js'; // Implement this function

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());

app.post('/api/commit', async (req, res) => {
  const { owner, repository, commitHash } = req.body;

  try {
    const commitData = await fetchCommitData(owner, repository, commitHash);
    res.json(commitData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});