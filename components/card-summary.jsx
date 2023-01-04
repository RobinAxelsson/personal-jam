import Card from "./internals/card";
import { formatMd } from "../framework-utils/format-md";

export default function CardSummary({summaryData}) {
  return (
    <Card
      right={
        <>
          <h2 className="card-title">About</h2>
          <p>{formatMd(summaryData.content)}</p>
        </>
      }
    />
  );
}
