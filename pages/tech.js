import getTechnologies from "../__data_access/technologies-repository";
import TechTable from "../__site_components/tech-table";

export async function getStaticProps() {
  return {
    props: {
      technologies: getTechnologies(),
    },
  };
}

export default function ExperiencePage({ technologies }) {
  return (
    <div className="card-collection">
        <TechTable technologies={technologies} />
    </div>
  );
}
