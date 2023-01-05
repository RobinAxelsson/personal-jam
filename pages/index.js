import { getSummary, getHeroContent } from "../data-access/resume-repository";
import CardHero from "../components/hero"
import MarkdownCard from "../components/markdown-card"
export async function getStaticProps() {
  return {
    props: {
      summaryData: getSummary(),
      heroContent: getHeroContent()
    },
  };
}

export default function Home({ summaryData, heroContent }) {
  return (
    <div className="card-collection">
      <CardHero heroContent={heroContent} />
      <MarkdownCard markdownContent={summaryData.content}/>
        </div>
  );
}


