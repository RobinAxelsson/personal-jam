import { getToRecruitersContent } from "../__data_access/resume-repository";
import MarkdownCard from "../__site_components/markdown-card";
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
