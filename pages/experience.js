import { getWorkLife, getEducation } from "../data-access/resume-repository";

export async function getStaticProps() {
  return {
    props: {
      worklife: getWorkLife(),
      education: getEducation(),
    },
  };
}

export default function ExperiencePage({ worklife, education }) {
  return (
    <div className="card-collection">
      <div className="card-general">
        <h2 className="card-title">Work Experience</h2>
        <div className="card-grid">
          {worklife.map(({ company, title, start, end }) => (
            <>
              <div className="card-grid-item" key={generateUID()}>
                {parseDate(start)} - {parseDate(end)}
              </div>
              <div className="card-grid-item" key={generateUID()}>
                {company}
              </div>
              <div className="card-grid-item" key={generateUID()}>
                {title}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="card-general">
        <h2 className="card-title">Education</h2>
        <div className="card-grid">
          {education.map(({ title, school, start, end }) => (
            <>
              <div className="card-grid-item" key={generateUID()}>
                {parseDate(start)} - {parseDate(end)}
              </div>
              <div className="card-grid-item" key={generateUID()}>
                {title}
              </div>
              <div className="card-grid-item" key={generateUID()}>
                {school}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

function parseDate(date) {
  if (date === "" || date === null) return "ongoing";

  let year = date.split("-")[0];
  let month = date.split("-")[1];
  return month + "/" + year;
}

function generateUID() {
  var firstPart = (Math.random() * 46656) | 0;
  var secondPart = (Math.random() * 46656) | 0;
  firstPart = ("000" + firstPart.toString(36)).slice(-3);
  secondPart = ("000" + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}
