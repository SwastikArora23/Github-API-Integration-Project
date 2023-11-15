// fetchCommitData.js
import fetch from "node-fetch";
import { Octokit } from "octokit";

const octokit = new Octokit({ request: { fetch }},{
  auth: '841f7eeed1e81da2052d76dcf7f1cb51a68d0834'
})

async function fetchCommitData(owner, repository, commitHash) {
  try {
    const response = await octokit.request(`GET /repos/{owner}/{repo}/commits/{ref}`, {
      owner,
      repo: repository,
      ref: commitHash,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    console.log(response);
    // Extract the relevant commit data from the response
    const commitData = {
      response
      // Add more relevant data as needed
    };
    return commitData;
  } catch (error) {
    throw new Error('Failed to fetch commit data');
  }
}

export default fetchCommitData;
