import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import YAML from 'yaml'

export function getSummary() {
    const fileContent = fs.readFileSync('resume/summary.md', 'utf8');
    const {data, content} = matter(fileContent);

    return {
      id: 'summary',
      content,
      title: data.title
    };
}

export function getHeroContent() {
  return fs.readFileSync('resume/hero.md', 'utf8');
}
export function getSchoolOfThoughtContent() {
  return fs.readFileSync('resume/shool-of-thought.md', 'utf8');
}

export function getToRecruitersContent() {
  return fs.readFileSync('resume/to-recruiters.md', 'utf8');
}


export function getPersonalData() {
  const fileContent = fs.readFileSync('resume/personal_data.yml', 'utf8');
  const {data} = matter(fileContent);

  return {
    id: 'personal_data',
    languages: data.languages,
    technologies: data.technologies
  };
}

export function getWorkLife() {
  const fileContent = fs.readFileSync('resume/worklife.yml', 'utf8');
  return YAML.parse(fileContent).worklife;
}

export function getEducation() {
  const fileContent = fs.readFileSync('resume/education.yml', 'utf8');
  return YAML.parse(fileContent).education;
}


export function getSortedHighlightedProjectsData() {
  const resumeDirectory = path.join(process.cwd(), 'resume/highlighted_projects');
  const fileNames = fs.readdirSync(resumeDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(resumeDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const {data, content} = matter(fileContent);

    const tech = data.technologies.join(", ");

    return {
      id,
      content,
      start: data.start,
      end: data.end,
      company: data.company,
      title: data.title,
      ingress: data.ingress,
      technologies: tech
    };
  });

  return allPostsData.sort((a, b) => new Date(b.end) - new Date(a.end));
}