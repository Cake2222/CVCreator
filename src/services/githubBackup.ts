import { Octokit } from '@octokit/rest';
import { CVData } from '../types/cv';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const REPO_OWNER = process.env.GITHUB_REPO_OWNER || '';
const REPO_NAME = process.env.GITHUB_REPO_NAME || '';
const FILE_PATH = 'src/store/cvData.ts';

export const backupToGitHub = async (cvData: CVData) => {
  try {
    // Get the current file content to get the SHA
    const { data: currentFile } = await octokit.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: FILE_PATH,
    });

    if ('sha' in currentFile) {
      // Update the file
      await octokit.repos.createOrUpdateFileContents({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: FILE_PATH,
        message: `Update CV data: ${new Date().toISOString()}`,
        content: Buffer.from(
          `import { CVData } from '../types/cv';\n\nexport const cvData: CVData = ${JSON.stringify(
            cvData,
            null,
            2
          )};\n`
        ).toString('base64'),
        sha: currentFile.sha,
      });

      return { success: true };
    }
  } catch (error) {
    console.error('GitHub backup failed:', error);
    return { success: false, error };
  }
}; 