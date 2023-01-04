import { getSummary } from "../data-access/resume-repository";
import Image from "next/image";
import Card from "../components/micro-components/card";
import CardContainer from "../components/micro-components/card-container";
import { formatMd } from "../framework-utils/format-md";

export async function getStaticProps() {
  return {
    props: {
      summaryData: getSummary(),
    },
  };
}

export default function Home({ summaryData }) {
  return (
    <CardContainer>
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
            <h3>Full Stack Cloud Developer</h3>
            <p>
              Specialized in Object Oriented Design, .NET, C#, Test Driven
              Development, code refactoring and CAD. Consultant at{" "}
              <a className="" href="https://quokka.se">
                Software by Quokka
              </a>
            </p>
          </>
        }
      />
      <Card right={ <>
          <h2 className="card-title">About</h2>
          <p>{formatMd(summaryData.content)}</p>
        </>} />
    </CardContainer>
  );
}


