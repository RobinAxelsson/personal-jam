import Image from "next/image";
import styles from "./hero.module.scss"
export default function Hero() {
  return (
    <div className={styles.hero}>
       <h2 className={styles.hero__title}>
          <span className={styles.accent_word}>Robin</span> Salih Axelsson
        <h3 className={styles.hero__sub_title}>
          Full Stack .NET Developer
        </h3>
      </h2>
         <Image
          className={styles.hero__image}
          src="/CV-portrait.jpg"
          alt="picture of author"
          height={775}
          width={892}
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/png;base64,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"
        />
        <table className={styles.hero__job_properties}>
          <tr>
            <th>Location:</th>
            <td>Gothenburg, Sweden</td>
          </tr>
          <tr>
            <th>Current position:</th>
            <td><a href="https://www.bokio.se/">Software Engineer at Bokio</a></td>
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
            <th>Would love to:</th>
            <td>Develop frameworks and libraries.</td>
          </tr>
          <tr>
            <th>Hobbies:</th>
            <td>Sail Racing, Fitness, Coding, Brazilian Jiu Jitsu</td>
          </tr>
        </table>
    </div>
  );
}
