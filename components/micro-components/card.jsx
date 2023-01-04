import { generateUID } from "../../framework-utils/generate-uid";

export default function Card({ left, right, id: key=null }) {
  return (
    <div className="card-general hero-section" key={key==='null'? generateUID() : key}>
      <div className="hero-section-content">
        {left}
      </div>
      <div className="hero-section-content">
        {right}
      </div>
    </div>
  );
}
