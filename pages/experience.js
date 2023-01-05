import { getWorkLife, getEducation, getTechnologies} from "../data-access/resume-repository";
import WorkExperience from "../components/work-experience";
import Education from "../components/education";
import Technologies from "../components/technologies";

export async function getStaticProps() {
  return {
    props: {
      worklife: getWorkLife(),
      education: getEducation(),
      technologies: getTechnologies()
    },
  };
}

export default function ExperiencePage({ worklife, education, technologies }) {
  return (
    <div className="card-collection">
      <Technologies technologies={technologies} />
      <WorkExperience worklife={worklife} />
      <Education education={education} />
    </div>
  );
}
