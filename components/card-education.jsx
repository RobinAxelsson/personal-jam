import siteDateLayout from "../framework-utils/site-date-layout";
import Card from "./internals/card";
export default function CardEducation({ education }) {
  return (
    <Card
        right={
          <>
            <h2 className="card-title">Education</h2>
            <div className="card-grid grid-column-3">
              {education.map(({ title, school, start, end }) => (
                <>
                  <div className="card-grid-item" key={start+end}>
                    {siteDateLayout(start)} - {siteDateLayout(end)}
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
