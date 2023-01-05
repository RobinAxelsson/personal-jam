import { getWorkLife, getEducation} from "../data-access/resume-repository";
import WorkExperience from "../components/work-experience";
import Education from "../components/education";

export async function getStaticProps() {
  return {
    props: {
      worklife: getWorkLife(),
      education: getEducation(),
    },
  };
}

export default function ExperiencePage({ worklife, education, technologies }) {
  return (
    <div className="card-collection">
      <WorkExperience worklife={worklife} />
      <Education education={education} />
    </div>
  );
}
