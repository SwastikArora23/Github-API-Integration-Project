import React, { useState } from 'react';
import axios from 'axios';
import CommitForm from './components/CommitForm';
import CodeDifference from './components/CodeDifference';

function App() {
  // eslint-disable-next-line
  const [commitData, setCommitData] = useState(null);

  const handleCommitSubmit = async (owner, repository, commitHash) => {
    try {
      const response = await axios.post('http://localhost:3001/api/commit', {
        owner, repository, commitHash 
      });
      setCommitData(response.data); // Handle the response data as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>GitHub Code Difference Viewer</h1>
      <CommitForm onSubmit={handleCommitSubmit} />
      <br/>
      {commitData && <CodeDifference commitData={commitData} />}
    </div>
  );
}

export default App;
