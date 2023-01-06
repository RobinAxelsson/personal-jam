import { getSummaryMarkdown, getHeroMarkdown, getRolesMarkdown } from "../data-access/resume-repository";
import CardHero from "../components/hero"
import MarkdownCard from "../components/markdown-card"
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


