import parseDateToString from "../data-parsers/parser-date";

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
                  {company} {parseDateToString(start)}-{parseDateToString(end)}
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

function Card({ left, right, key }) {
  return (
    <div className="card-general hero-section" key={key}>
      <div className="hero-section-content">
        {left}
      </div>
      <div className="hero-section-content">
        {right}
      </div>
    </div>
  );
}