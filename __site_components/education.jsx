import parseDateToString from "../__utils/date";
export default function Education({ education }) {
  return (
    <div className="card-general">
      <div className="card-general__content">
        <h2 className="card-title">Education</h2>
        <div className="card-grid grid-column-3">
          {education.map(({ title, school, start, end }) => (
            <>
              <div className="card-grid__item" key={start + end}>
                {parseDateToString(start)} - {parseDateToString(end)}
              </div>
              <div className="card-grid__item" key={title}>
                {(() => {
                  if (title !== ".NET Developer") return title;
                  return (
                    <a href="https://teknikhogskolan.se/utbildningar/net-utvecklare/">
                      .NET Developer
                    </a>
                  );
                })()}
              </div>
              <div className="card-grid__item" key={school}>
                {school}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
