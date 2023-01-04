import { getSummary } from "../data-access/resume-repository";
import CardHero from "../components/card-hero"
import CardSummary from "../components/card-summary"
export async function getStaticProps() {
  return {
    props: {
      summaryData: getSummary(),
    },
  };
}

export default function Home({ summaryData }) {
  return (
    <div className="card-collection">
      <CardHero />
      <CardSummary summaryData={summaryData}/>
        </div>
  );
}


