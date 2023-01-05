import { getSchoolOfThoughtContent } from "../data-access/resume-repository";
import MarkdownCard from "../components/markdown-card"
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


