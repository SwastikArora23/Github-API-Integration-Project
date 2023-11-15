import React from 'react';

function CodeDifference({ commitData }) {
  return (
    <>
      <span>
        <img alt={'pic'} src={commitData.response.data.author.avatar_url} style={{borderRadius:'50%', height: '80px'}} />
        Authored By: {commitData.response.data.author.login}
      </span>
      <p>Code Difference for Commit {commitData.response.data.sha}</p>
      {/* Display code differences here */}
      {commitData.response.data.files.map((file) => {
        return (<div>
        <p style={{marginLeft: '10px'}}>{file.filename}</p>
        <textarea style={{marginLeft: '10px', width:'90%', height: '100%'}}>{file.patch}</textarea>
        </div>)
      })}
    </>
  );
}

export default CodeDifference;
