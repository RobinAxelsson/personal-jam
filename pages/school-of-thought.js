import { getMarkdownContent } from "../__data_access/resume-repository";
import MarkdownCard from "../__site_components/markdown-card"
export async function getStaticProps() {
  return {
    props: {
      schoolOfThought: getMarkdownContent('__data_records/cards.school-of-thought.md')
    },
  };
}

export default function SchoolOfThoughtPage({ schoolOfThought }) {
  return (
    <div className="card-collection">
      <MarkdownCard markdownContent={schoolOfThought}
      additionalClassName={"card-general--small"}
      />
    </div>
  );
}
