import parseDateToString from "../data-parsers/parser-date";

export default function WorkExperience({ worklife }) {
  return (
    <Card
      right={
        <>
          <h2 className="card-title">Work Experience</h2>
          <div className="card-grid grid-column-3">
            {worklife.map(({ company, title, start, end }) => (
              <>
                <div className="card-grid-item" key={start + end}>
                  {parseDateToString(start)} - {parseDateToString(end)}
                </div>
                <div className="card-grid-item" key={company}>
                  {(() => {
                    if (company !== "Software By Quokka") return company;
                    return <a href="https://quokka.se">Software By Quokka</a>;
                  })()}
                </div>
                <div className="card-grid-item" key={title}>
                  {title}
                </div>
              </>
            ))}
          </div>
        </>
      }
    />
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