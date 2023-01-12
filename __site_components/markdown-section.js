import ReactMarkdown from "react-markdown";
import styles from "./markdown-section.module.scss"
export default function MarkdownSection({ markdownContent }) {
  const sections = markdownContent
    .split("---")
    .filter((x) => whereIsNotEmptyOrWhiteSpace(x));
  return (
    <>
      {sections.map((section) => (
        <div className={styles.markdown_section} key={section.slice(0, 20)}>
          <ReactMarkdown>section</ReactMarkdown>
        </div>
      ))}
    </>
  );
}

function whereIsNotEmptyOrWhiteSpace(str){
  return !(str === null || str.match(/^ *$/) !== null);
}
