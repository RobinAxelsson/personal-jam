import HighlightedProjects from "../__site_components/highlighted-projects";
import { getSortedHighlightedProjectsData } from "../__data_access/resume-repository";

export async function getStaticProps() {
  return {
    props: {
      allHighlightedProjectsData: getSortedHighlightedProjectsData(),
    },
  };
}

export default function ProjectsPage({ allHighlightedProjectsData }) {
  return (
    <div className="card-collection">
      <HighlightedProjects
        allHighlightedProjectsData={allHighlightedProjectsData}
      />
    </div>
  );
}