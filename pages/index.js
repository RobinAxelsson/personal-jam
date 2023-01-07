import { getToRecruitersContent } from "../data-access/resume-repository";
import MarkdownCard from "../components/markdown-card";
export async function getStaticProps() {
  return {
    props: {
      toRecruitersContent: getToRecruitersContent(),
    },
  };
}

export default function SchoolOfThoughtPage({ toRecruitersContent }) {
  return (
    <div className="card-collection">
        <MarkdownCard markdownContent={toRecruitersContent} />
    </div>
  );
}
