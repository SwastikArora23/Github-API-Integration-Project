import React, { useState } from 'react';

function CommitForm({ onSubmit }) {
  const [repository, setRepository] = useState('');
  const [commitHash, setCommitHash] = useState('');
  const [owner, setOwner] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(owner, repository, commitHash);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Owner:
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
      </label>
      <label>
        Repository:
        <input
          type="text"
          value={repository}
          onChange={(e) => setRepository(e.target.value)}
        />
      </label>
      <label>
        Commit Hash:
        <input
          type="text"
          value={commitHash}
          onChange={(e) => setCommitHash(e.target.value)}
        />
      </label>
      <button type="submit">Show Code Difference</button>
    </form>
  );
}

export default CommitForm;
