import { getSummaryMarkdown, getHeroMarkdown, getRolesMarkdown } from "../__data_access/resume-repository";
import CardHero from "../__site_components/hero"
import MarkdownCard from "../__site_components/markdown-card"
export async function getStaticProps() {
  return {
    props: {
      heroContent: getHeroMarkdown(),
      summaryData: getSummaryMarkdown(),
      rolesData: getRolesMarkdown(),
    },
  };
}

export default function Home({ summaryData, heroContent, rolesData }) {
  return (
    <div className="card-collection">
      <CardHero heroContent={heroContent} />
      <MarkdownCard markdownContent={summaryData}/>
      <MarkdownCard markdownContent={rolesData}/>
        </div>
  );
}


