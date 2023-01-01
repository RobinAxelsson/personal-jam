import { getPersonalData, getSortedHighlightedProjectsData, getSummary, getWorkLife, getEducation } from '../data-access/resume-repository';
import parse from 'html-react-parser';
import utilStyles from '../styles/utils.module.css'
import CollapsableResume from '../components/collapsable-resume';
export async function getStaticProps() {
  return {
    props: {
      allHighlightedProjectsData: getSortedHighlightedProjectsData(),
      summaryData: getSummary(),
      personalData: getPersonalData(),
      worklife: getWorkLife(),
      education: getEducation()
    },
  };
}

export default function Home({ allHighlightedProjectsData, summaryData, personalData, worklife, education }) {
  return (
      <CollapsableResume 
      allHighlightedProjectsData={allHighlightedProjectsData}
      summaryData={summaryData}
      personalData={personalData}
      worklife={worklife}
      education={education}
      />
  );
}
