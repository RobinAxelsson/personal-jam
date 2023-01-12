import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import YAML from 'yaml'

export function getQAMarkdown() {
    return getMarkdownContent('__data_records/cards.qa.md');
}

export function getSchoolOfThoughtContent() {
  return getMarkdownContent('__data_records/cards.school-of-thought.md');
}

export function getToRecruitersContent() {
  return getMarkdownContent('__data_records/cards.to-recruiters.md');
}

function getMarkdownContent(url){
  const content = fs.readFileSync(url, 'utf8');
  if(isEmptyOrWhiteSpace(content)){
    throw Error("Content must be valid string, got: " + content)
  }
  return content;  
}

function isEmptyOrWhiteSpace(str){
  return str === null || str.match(/^ *$/) !== null;
}


export function getPersonalData() {
  const fileContent = fs.readFileSync('__data_records/personal_data.yml', 'utf8');
  const {data} = matter(fileContent);

  return {
    id: 'personal_data',
    languages: data.languages,
    technologies: data.technologies
  };
}

export function getWorkLifeArray() {
  const fileContent = fs.readFileSync('__data_records/worklife.yml', 'utf8');
  const worklife = YAML.parse(fileContent).worklife;
  EnsureValidArray(worklife)
  return worklife;
}

export function getEducationArray() {
  const fileContent = fs.readFileSync('__data_records/education.yml', 'utf8');
  const education = YAML.parse(fileContent).education;
  EnsureValidArray(education)
  return education;
}

function EnsureValidArray(array){
  if(!(array instanceof Array) || array.length === 0)
    throw new Error("Invalid array, got: " + array);
}


export function getSortedHighlightedProjectsData() {
  const resumeDirectory = path.join(process.cwd(), '__data_records/highlighted_projects');
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
