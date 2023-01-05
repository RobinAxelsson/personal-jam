import { getSummary } from "../data-access/resume-repository";
import CardHero from "../components/hero"
import CardSummary from "../components/summary"
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


