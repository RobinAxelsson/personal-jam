import { useState, useEffect } from "react";
import { getPreviousYearStats } from "../data-access/wakatime-repository";
import { generateUID } from "../framework-utils/generate-uid";

export function CodingStats() {
  const [wakatime, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let data = await getPreviousYearStats();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!wakatime) return <p>No profile data</p>;
  return (
    <>
      <div className="card-general">
        <h2 className="card-title">Top 10 Languages</h2>
        <h4>
          Last 12 months, powered by{" "}
          <a href="https://wakatime.com/">Wakatime</a>
        </h4>
        <div className="card-grid grid-column-2">
          {wakatime.top10.map(({ rank, name, time }) => (
            <>
              <div className="card-grid-item" key={generateUID()}>
                {rank}. {name}
              </div>
              <div className="card-grid-item" key={generateUID()}>
                {time}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="card-general">
        <h2 className="card-title">Total time coding</h2>
        <h4>
          Last 12 months, powered by{" "}
          <a href="https://wakatime.com/">Wakatime</a>
        </h4>
        <ul className="technology-list">
          <li className="tech-item" key={generateUID()}>
            Total hours: {wakatime.totalHours}
          </li>
          <li className="tech-item" key={generateUID()}>
            Daily Average: {wakatime.dailyAverage}
          </li>
        </ul>
      </div>
    </>
  );
}
