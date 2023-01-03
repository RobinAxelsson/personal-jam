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
        {allHighlightedProjectsData.map(
          ({ id, title, content, start, end, company, ingress }) => (
            <div className="card-general" key={id}>
            <h3 className="card-title">{title}</h3>
            <h4 className="card-ingress">{ingress}</h4>
            <h4>{company} {parseDate(start)}-{parseDate(end)}</h4>
              <p>{content}</p>
              </div>
              )
        )}
    </div>);
}

// function format(content) {
//   return parse(content.replaceAll("\n", "<br />"));
// }

function parseDate(date) {
  if (date === "" || date === null) return "ongoing";

  let year = date.split("-")[0];
  let month = date.split("-")[1];
  return month + "/" + year;
}
