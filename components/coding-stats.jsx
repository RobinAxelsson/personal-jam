import { useState, useEffect } from "react";
import { getWakatimeStats } from "../data-access/wakatime-repository";
import parseDateToString from "../data-parsers/parser-date";

export function CodingStats() {
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
  return {
    topLanguages: (
      <div className="top-languages">
        <h2 className="top-languages__header">My top 10 Languages</h2>
        <table className="top-languages__table">
          {wakatime.top10.map(({ rank, name, time }) => (
            <tr
              className="top_languages__row"
              key={time.hour + time.minutes + time.seconds}
            >
              <td
                className="top_languages__cell top_languages__cell--rank"
                key={rank}
              >
                {rank}.
              </td>
              <td
                className="top_languages__cell top_languages__cell--name"
                key={name}
              >
                {name}
              </td>
              <td
                className="top_languages__cell top_languages__cell--time"
                key={time.hours}
              >
                {time.hours}h
              </td>
              <td
                className="top_languages__cell top_languages__cell--time"
                key={time.minutes}
              >
                {time.minutes}m
              </td>
              <td
                className="top_languages__cell top_languages__cell--time"
                key={time.seconds}
              >
                {time.seconds}s
              </td>
            </tr>
          ))}
        </table>
      </div>
    ),

    wakatimeLabel: (
      <h4 className="wakatime-ingress">
        from {parseDateToString(wakatime.start)} to{" "}
        {parseDateToString(wakatime.end)}, powered by{" "}
        <a href="https://wakatime.com/">Wakatime</a>
      </h4>
    ),
    codingTotal: (
      <div className="coding-totals">
        <h2 className="coding-totals__title">My Coding Totals</h2>
        <table className="coding-total__table">
          <tr className="coding-total__row">
            <td className="coding-total__cell">Total time:</td>
            <TimeCells time={wakatime.totalTime} />
          </tr>
          <tr className="coding-total__row">
            <td className="coding-total__cell">Daily Average:</td>
            <TimeCells time={wakatime.dailyAverage} />
            {/* <td className="coding-total__cell">
              {wakatime.dailyAverage.hours}h
            </td>
            <td className="coding-total__cell">
              {wakatime.dailyAverage.minutes}m
            </td>
            <td className="coding-total__cell">
              {wakatime.dailyAverage.seconds}s
            </td> */}
          </tr>
          <tr className="coding-total__row">
            <td className="coding-total__cell">Total last 7 days:</td>
            <TimeCells time={wakatime.totalTimeWeek} />
            {/* <td className="coding-total__cell">
              {wakatime.totalTimeWeek.hours}h
            </td>
            <td className="coding-total__cell">
              {wakatime.totalTimeWeek.minutes}m
            </td>
            <td className="coding-total__cell">
              {wakatime.totalTimeWeek.seconds}s
            </td> */}
          </tr>
        </table>
      </div>
    ),
  };
}

const TimeCells = ({time}) => (
  <>
    <td className="coding-total__cell">{time.hours}h</td>
    <td className="coding-total__cell">{time.minutes}m</td>
    <td className="coding-total__cell">{time.seconds}s</td>
  </>
);
