import { getWorkLife, getEducation } from "../data-access/resume-repository";
import CardWorkExperience from "../components/work-experience";
import CardEducation from "../components/education";

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
      <CardWorkExperience worklife={worklife} />
      <CardEducation education={education} />
    </div>
  );
}
