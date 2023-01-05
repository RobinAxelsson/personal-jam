import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function Hero({ heroContent }) {
  return (
    <Card
      left={
        <Image
          className="hero-section-image"
          src="/images/profile-sea-1290x1290.jpg"
          alt="picture of author"
          height={250}
          width={250}
        />
      }
      right={
        <>
          <h2>
            <span className="accent-word">Robin</span> Salih Axelsson
          </h2>
          <ReactMarkdown>{heroContent}</ReactMarkdown>
        </>
      }
    />
  );
}

function Card({ left, right, key }) {
  return (
    <div className="card-general hero-section" key={key}>
      <div className="hero-section-content">{left}</div>
      <div className="hero-section-content">{right}</div>
    </div>
  );
}
