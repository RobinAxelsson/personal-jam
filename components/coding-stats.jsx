import { useState, useEffect } from "react";
import { getPreviousYearStats as getYearRangeStats } from "../data-access/wakatime-repository";
import { generateUID } from "../framework-utils/generate-uid";
import { parseDate } from "../framework-utils/parse-date";

const WakaTimeIngress = ({ start, end }) => (
  <h4>
    from {parseDate(start)} to {parseDate(end)}, powered by <a href="https://wakatime.com/">Wakatime</a>
  </h4>
);

export function CodingStats() {
  const [wakatime, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let data = await getYearRangeStats();
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
        <h2 className="card-title">My top 10 Languages</h2>
        <WakaTimeIngress start={wakatime.start} end={wakatime.end} />
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
        <h2 className="card-title">My Coding Totals</h2>
        <WakaTimeIngress start={wakatime.start} end={wakatime.end} />
        <div className="card-grid grid-column-2">
          <div className="card-grid-item" key={generateUID()}>
            Total hours:
          </div>
          <div className="card-grid-item" key={generateUID()}>
            {wakatime.totalHours}
          </div>
          <div className="card-grid-item" key={generateUID()}>
            Daily Average:
          </div>
          <div className="card-grid-item" key={generateUID()}>
            {wakatime.dailyAverage}
          </div>
          <div className="card-grid-item" key={generateUID()}>
            Total last 7 days:
          </div>
          <div className="card-grid-item" key={generateUID()}>
            {wakatime.totalHoursWeek}
          </div>
        </div>
      </div>
    </>
  );
}
