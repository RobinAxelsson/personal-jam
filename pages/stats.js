import { CodingStats } from "../components/coding-stats";
export default function CodeStatsPage() {
  const { topLanguages, codingTotal, wakatimeLabel } = CodingStats();

  return (
    <div className="card-collection">
      <div className="card-general">
        {topLanguages}
        {wakatimeLabel}
      </div>
      <div className="card-general">
        {codingTotal}
        {wakatimeLabel}
      </div>
    </div>
  );
}
