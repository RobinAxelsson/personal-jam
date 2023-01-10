import getTechnologies from "../data-access/technologies-repository";
import TechTable from "../components/tech-table";

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
      <div className="card-general hero-section">
        <TechTable technologies={technologies} />
      </div>
    </div>
  );
}
