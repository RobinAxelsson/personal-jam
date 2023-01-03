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
      {/* <figure><embed src="https://wakatime.com/share/@d1211c1b-0278-49e5-8d9f-f430871ca943/08dc7f3b-339d-4e69-a19a-9203cf51b3db.svg"></embed></figure> */}
      <div className="card-general">
        <h2 className="card-title">Languages</h2>
        {createList(personalData.languages)}
      </div>
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
