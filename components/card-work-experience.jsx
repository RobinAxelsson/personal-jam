import siteDateLayout from "../framework-utils/site-date-layout";
import Card from "./micro-components/card";
export default function CardWorkExperience({ worklife }) {
  return (
    <Card
      right={
        <>
          <h2 className="card-title">Work Experience</h2>
          <div className="card-grid grid-column-3">
            {worklife.map(({ company, title, start, end }) => (
              <>
                <div className="card-grid-item" key={start + end}>
                  {siteDateLayout(start)} - {siteDateLayout(end)}
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
