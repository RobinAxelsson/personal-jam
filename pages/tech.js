import getTechnologies from "../data-access/technologies-repository";
import Technologies from "../components/technologies";

export async function getStaticProps() {
  return {
    props: {
      technologies: getTechnologies()
    },
  };
}

export default function ExperiencePage({ technologies }) {
  return (
    <div className="card-collection">
      <Technologies technologies={technologies} />
    </div>
  );
}
