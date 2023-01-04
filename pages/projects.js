import HighlightedProjects from "../components/highlighted-projects";
import { getSortedHighlightedProjectsData } from "../data-access/resume-repository";
import CardContainer from "../components/micro-components/card-container"

export async function getStaticProps() {
  return {
    props: {
      allHighlightedProjectsData: getSortedHighlightedProjectsData(),
    },
  };
}

export default function ProjectsPage({ allHighlightedProjectsData }) {
  return (
    <CardContainer>
      <HighlightedProjects
        allHighlightedProjectsData={allHighlightedProjectsData}
      />
    </CardContainer>
  );
}