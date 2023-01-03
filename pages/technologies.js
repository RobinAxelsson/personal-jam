import { getPersonalData } from "../data-access/resume-repository";
import { CodingStats } from "../components/coding-stats"
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
        {createList(personalData.technologies)}
      </div>
    </div>
  );
}

function createList(list) {
  return (
    <ul className="technology-list">
      {list.map((lang) => (
        <li id={lang} className="tech-item" key={lang}>
          {lang}
        </li>
      ))}
    </ul>
  );
}
