import parseMd from "../data-parsers/parser-md";

export default function CardSummary({summaryData}) {
  return (
    <Card
      right={
        <>
          <h2 className="card-title">About</h2>
          <p>{parseMd(summaryData.content)}</p>
        </>
      }
    />
  );
}

function Card({ left, right, key }) {
  return (
    <div className="card-general hero-section" key={key}>
      <div className="hero-section-content">
        {left}
      </div>
      <div className="hero-section-content">
        {right}
      </div>
    </div>
  );
}
