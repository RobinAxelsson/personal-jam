import { getToRecruitersContent } from "../__data_access/resume-repository";
import MarkdownCard from "../__site_components/markdown-card";
import CardHero from "../__site_components/hero"
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
        <CardHero />
        <MarkdownCard markdownContent={toRecruitersContent} />
    </div>
  );
}
