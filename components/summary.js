import utilStyles from "../styles/utils.module.css";
import parse from "html-react-parser";
export function Summary({ title, content }) {
  return (
    <>
        <div className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h1 className={utilStyles.headingLg}>{title}</h1>
          {parse(content.replaceAll("\n", "<br />"))}
        </div>
    </>
  );
}
