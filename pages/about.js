import { getSummaryMarkdown, getRolesMarkdown } from "../__data_access/resume-repository";
import CardHero from "../__site_components/hero"
import MarkdownCard from "../__site_components/markdown-card"
export async function getStaticProps() {
  return {
    props: {
      summaryData: getSummaryMarkdown(),
      rolesData: getRolesMarkdown(),
    },
  };
}

export default function Home({ summaryData, rolesData }) {
  return (
    <div className="card-collection">
      <CardHero />
      <MarkdownCard markdownContent={summaryData}/>
      <MarkdownCard markdownContent={rolesData}/>
        </div>
  );
}


