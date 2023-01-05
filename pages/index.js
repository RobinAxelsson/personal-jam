import { getSummary, getHeroContent } from "../data-access/resume-repository";
import CardHero from "../components/hero"
import Summary from "../components/summary"
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
      <Summary summaryData={summaryData}/>
        </div>
  );
}


