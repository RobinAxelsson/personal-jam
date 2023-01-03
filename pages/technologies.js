import { getPersonalData } from "../data-access/resume-repository";
import { CodingStats } from "../components/coding-stats";
export async function getStaticProps() {
  return {
    props: {
      personalData: getPersonalData(),
    },
  };
}
export default function TechnologiesPage({ personalData }) {
  return (
    <div className="card-collection">
      <CodingStats />
      <div className="card-general">
        <h2 className="card-title">Technologies</h2>
        <h4>Professional use or examined</h4>
        <grid className="card-grid grid-column-2">
          {personalData.technologies.map((lang) => (
            <div id={lang} className="tech-item" key={lang}>
              {lang}
            </div>
          ))}
        </grid>
      </div>
    </div>
  );
}