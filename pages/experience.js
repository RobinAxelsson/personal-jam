import { getWorkLifeArray, getEducationArray } from "../__data_access/resume-repository";
import WorkExperience from "../__site_components/work-experience";
import Education from "../__site_components/education";

export async function getStaticProps() {
  return {
    props: {
      worklife: getWorkLifeArray(),
      education: getEducationArray(),
    },
  };
}

export default function ExperiencePage({ worklife, education }) {
  return (
    <div className="card-collection">
      <WorkExperience worklife={worklife} />
      <Education education={education} />
    </div>
  );
}
