import { getSortedHighlightedProjectsData } from "../data-access/resume-repository";
import parse from "html-react-parser";

export async function getStaticProps() {
  return {
    props: {
      allHighlightedProjectsData: getSortedHighlightedProjectsData(),
    },
  };
}

export default function ProjectsPage({ allHighlightedProjectsData }) {
  return (
    <div className="card-general">
      <h2 className="card-title">Highlighted projects</h2>
      <ul className="project-list">
        {allHighlightedProjectsData.map(
          ({ id, title, content, start, end, company }) => (
            <li className="project-li" key={id}>
              <h3 className="project-title">{title}</h3>
              {company} {parseDate(start)}-{parseDate(end)}
              <br />
              <p>{format(content)}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

function format(content) {
  return parse(content.replaceAll("\n", "<br />"));
}

function parseDate(date) {
  if (date === "" || date === null) return "ongoing";

  let year = date.split("-")[0];
  let month = date.split("-")[1];
  return month + "/" + year;
}
