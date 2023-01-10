import { getSchoolOfThoughtContent } from "../__data_access/resume-repository";
import MarkdownCard from "../__site_components/markdown-card"
export async function getStaticProps() {
  return {
    props: {
      schoolOfThought: getSchoolOfThoughtContent()
    },
  };
}

export default function SchoolOfThoughtPage({ schoolOfThought }) {
  return (
    <div className="card-collection">
      <MarkdownCard markdownContent={schoolOfThought}/>
        </div>
  );
}
