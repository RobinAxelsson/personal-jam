import Image from "next/image";
import styles from "./hero.module.css"
export default function Hero() {
  return (
    <div className={styles.hero}>
       <h2 className={styles.hero__title}>
          <span className={styles.accent_word}>Robin</span> Salih Axelsson
      </h2>
       <h4 className={styles.hero__sub_title}>
        Full Stack Cloud Developer former Design Engineer
      </h4>
         <Image
          className={styles.hero__image}
          src="/images/profile-sea-1290x1290.jpg"
          alt="picture of author"
          height={250}
          width={250}
        />
        <table className={styles.hero__job_properties}>
          <tr>
            <th>Location:</th>
            <td>Gothenburg, Sweden</td>
          </tr>
          <tr>
            <th>Current position:</th>
            <td><a href="https://quokka.se">Consultant at Software by Quokka.</a></td>
          </tr>
          <tr>
            <th>Primary Languages:</th>
            <td>C#, Python, JavaScript/TypeScript</td>
          </tr>
          <tr>
            <th>Education:</th>
            <td>.NET Developer vocational degree <a href="https://teknikhogskolan.se/utbildningar/net_utvecklare/">Teknikhögskolan</a></td>
          </tr>
          <tr>
            <th>Specialization:</th>
            <td>Object Oriented Design, .NET, C#, Test Driven Development, refactoring and CAD.</td>
          </tr>
          <tr>
            <th>Hobbies:</th>
            <td>Sail Racing, Fitness, Coding</td>
          </tr>
        </table>
    </div>
  );
}
