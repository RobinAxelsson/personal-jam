import { useState, useEffect } from "react";
import { getWakatimeStats } from "../data-access/wakatime-repository";
import parseDateToString from "../data-parsers/parser-date";

const WakaTimeIngress = ({ start, end }) => (
  <h4>
    from {parseDateToString(start)} to {parseDateToString(end)}, powered by{" "}
    <a href="https://wakatime.com/">Wakatime</a>
  </h4>
);

export function CardsCodingStats() {
  const [wakatime, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      let wakatimeStats = await getWakatimeStats();
      setData(wakatimeStats);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!wakatime) return <p>No profile data</p>;
  return (
    <>
      <Card
        right={
          <>
            <h2 className="card-title">My top 10 Languages</h2>
            <WakaTimeIngress start={wakatime.start} end={wakatime.end} />
            <div className="card-grid grid-column-2">
              {wakatime.top10.map(({ rank, name, time }) => (
                <>
                  <div className="card-grid-item" key={rank+name}>
                    {rank}. {name}
                  </div>
                  <div className="card-grid-item" key={rank+name}>
                    {time}
                  </div>
                </>
              ))}
            </div>
          </>
        }
      />
      <Card
        right={
          <>
          <h2 className="card-title">My Coding Totals</h2>
          <WakaTimeIngress start={wakatime.start} end={wakatime.end} />
          <div className="card-grid grid-column-2">
            <div className="card-grid-item">
              Total hours:
            </div>
            <div className="card-grid-item">
              {wakatime.totalHours}
            </div>
            <div className="card-grid-item">
              Daily Average:
            </div>
            <div className="card-grid-item">
              {wakatime.dailyAverage}
            </div>
            <div className="card-grid-item">
              Total last 7 days:
            </div>
            <div className="card-grid-item">
              {wakatime.totalHoursWeek}
            </div>
          </div>
        </>
        }
      />
    </>
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