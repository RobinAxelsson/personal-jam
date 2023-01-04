import CardsHighlightedProjects from "../components/cards-highlighted-projects";
import { getSortedHighlightedProjectsData } from "../data-access/resume-repository";

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
      <CardsHighlightedProjects
        allHighlightedProjectsData={allHighlightedProjectsData}
      />
    </div>
  );
}