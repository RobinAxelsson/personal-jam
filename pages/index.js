import { getSummary } from "../data-access/resume-repository";
import parse from "html-react-parser";

export async function getStaticProps() {
  return {
    props: {
      summaryData: getSummary(),
    },
  };
}

export default function AboutPage({ summaryData }) {
  return (
    <div className="card-collection">
      <div className="card-general">
        <h2 className="card-title">{summaryData.title}</h2>
        <p>{format(summaryData.content)}</p>
      </div>
    </div>
  );
}

function format(content) {
  return parse(content.replaceAll("\n", "<br />"));
}
