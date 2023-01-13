import { useState, useEffect } from "react";
import { getWakatimeStats } from "../__data_access/wakatime-repository";
import parseDateToString from "../__utils/date";
import styles from "./coding-stats.module.scss"
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
  return (
    <>
      <div className={styles.top_languages}>
        <h2 className={styles.top_languages__title}>My top 10 Languages</h2>
        <table className={styles.top_languages__table}>
          {wakatime.top10.map(({ rank, name, time }) => (
            <tr
              className={styles.top_languages__row}
              key={time.hour + time.minutes + time.seconds}
            >
              <td className={styles.top_languages__cell} key={rank}>
                {rank}.
              </td>
              <td className={styles.top_languages__cell} key={name}>
                {name}
              </td>
              <td className={styles.top_languages__cell} key={time.hours}>
                {time.hours}h
              </td>
              <td className={styles.top_languages__cell} key={time.minutes}>
                {time.minutes}m
              </td>
              <td className={styles.top_languages__cell} key={time.seconds}>
                {time.seconds}s
              </td>
            </tr>
          ))}
        </table>
        <h4 className="wakatime-ingress">
          from {parseDateToString(wakatime.start)} to{" "}
          {parseDateToString(wakatime.end)}, powered by{" "}
          <a href="https://wakatime.com/">Wakatime</a>
        </h4>
      </div>

      <div className={styles.coding_total}>
        <h2 className={styles.coding_total__title}>My Coding Totals</h2>
        <table className={styles.coding_total__table}>
          <tr className={styles.coding_total__row}>
            <td className={styles.coding_total__cell}>Total time:</td>
            <TimeCells time={wakatime.totalTime} />
          </tr>
          <tr className={styles.coding_total__row}>
            <td className={styles.coding_total__cell}>Daily Average:</td>
            <TimeCells time={wakatime.dailyAverage} />
          </tr>
          <tr className={styles.coding_total__row}>
            <td className={styles.coding_total__cell}>Total last 7 days:</td>
            <TimeCells time={wakatime.totalTimeWeek} />
          </tr>
        </table>
        <h4 className="wakatime-ingress">
          from {parseDateToString(wakatime.start)} to{" "}
          {parseDateToString(wakatime.end)}, powered by{" "}
          <a href="https://wakatime.com/">Wakatime</a>
        </h4>
      </div>
    </>
  );
}

const TimeCells = ({ time }) => (
  <>
    <td className={styles.coding_total__cell}>{time.hours}h</td>
    <td className={styles.coding_total__cell}>{time.minutes}m</td>
    <td className={styles.coding_total__cell}>{time.seconds}s</td>
  </>
);
