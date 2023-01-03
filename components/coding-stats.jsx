import { useState, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";
import { getLanguagePercentages2022 } from "../data-access/wakatime-repository";

export function CodingStats() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getLanguagePercentages2022(setLoading, setData);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
    <div className="card-general">
      <h2 className="card-title">Languages 2022</h2>
      <div className="card-grid">
          <div className="card-grid-item" key="C#">{data.data[0].name}</div>
          <div className="card-grid-item">{data.data[0].percent}%</div>
          <div className="card-grid-item">XXX hours</div>
      </div>
    </div>
    <div className="card-general">
        <h2 className="card-title">Total 2022</h2>
        <h2 className="card-grid-item" key="C#">Total hours: XXXX</h2>
        <h2 className="card-grid-item">Daily Average: XXXX</h2>
    </div>
    </>
  );
}
