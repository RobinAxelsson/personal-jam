import { getMarkdownContent } from "../__data_access/resume-repository";
import MarkdownCard from "../__site_components/markdown-card";
import CardHero from "../__site_components/hero"
export async function getStaticProps() {
  return {
    props: {
      toRecruitersMarkdown: getMarkdownContent('__data_records/cards.to-recruiters.md'),
    },
  };
}

export default function SchoolOfThoughtPage({ toRecruitersMarkdown }) {
  return (
    <div className="card-collection">
        <CardHero />
        <MarkdownCard markdownContent={toRecruitersMarkdown} />
    </div>
  );
}
