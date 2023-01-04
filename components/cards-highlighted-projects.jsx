import Card from "./internals/card";
import siteDateLayout from "../framework-utils/site-date-layout";

export default function CardsHighlightedProjects({ allHighlightedProjectsData }) {
  return (
    <>
      {allHighlightedProjectsData.map(
        ({ id, title, content, start, end, company, ingress }) => (
          <Card
            key={id}
            right={
              <>
                <h3 className="card-title">{title}</h3>
                <h4 className="card-ingress">{ingress}</h4>
                <h4>
                  {company} {siteDateLayout(start)}-{siteDateLayout(end)}
                </h4>
                <p>{content}</p>
              </>
            }
          />
        )
      )}
    </>
  );
}
