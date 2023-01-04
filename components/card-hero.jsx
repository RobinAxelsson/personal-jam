import Card from "./internals/card";
import Image from "next/image";
export default function CardEducation() {
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
  );
}
