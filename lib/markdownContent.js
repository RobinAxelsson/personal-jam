import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const resumeDirectory = path.join(process.cwd(), 'resume/highlighted_projects');

export function getSummary() {
    const fileContent = fs.readFileSync('resume/summary.md', 'utf8');
    const matterResult = matter(fileContent);

    return {
      id: 'summary',
      content: matterResult.content,
      title: matterResult.data.title
    };
}

export function getSortedHighlightedProjectsData() {
  const fileNames = fs.readdirSync(resumeDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(resumeDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id: id,
      content: matterResult.content,
      start: matterResult.data.start,
      end: matterResult.data.end,
      company: matterResult.data.company,
      title: matterResult.data.title
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.end < b.end) {
      return 1;
    } else {
      return -1;
    }
  });
}