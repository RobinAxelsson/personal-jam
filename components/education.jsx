import parseDateToString from "../data-parsers/parser-date";
export default function Education({ education }) {
  return (
    <Card
        right={
          <>
            <h2 className="card-title">Education</h2>
            <div className="card-grid grid-column-3">
              {education.map(({ title, school, start, end }) => (
                <>
                  <div className="card-grid-item" key={start+end}>
                    {parseDateToString(start)} - {parseDateToString(end)}
                  </div>
                  <div className="card-grid-item" key={title}>
                    {(() => {
                      if (title !== ".NET Developer") return title;
                      return (
                        <a href="https://teknikhogskolan.se/utbildningar/net-utvecklare/">
                          .NET Developer
                        </a>
                      );
                    })()}
                  </div>
                  <div className="card-grid-item" key={school}>
                    {school}
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
