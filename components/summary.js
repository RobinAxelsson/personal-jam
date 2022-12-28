import utilStyles from "../styles/utils.module.css";
import parse from "html-react-parser";
import styles from "./layout.module.css";
export function Summary({ title, content }) {
  return (
    <>
      <div className={styles.container}>
        <div className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h1 className={utilStyles.headingLg}>{title}</h1>
          {parse(content.replaceAll("\n", "<br />"))}
        </div>
      </div>
    </>
  );
}
