import ReactMarkdown from "react-markdown";

export default function MarkdownSection({ markdownContent }) {
  const sections = markdownContent
    .split("---")
    .filter((x) => !isEmptyOrWhiteSpace(x));
  return (
    <>
      {sections.map((section) => (
        <div className="markdown-section" key={section.slice(0, 20)}>
          <ReactMarkdown>section</ReactMarkdown>
        </div>
      ))}
    </>
  );
}

function isEmptyOrWhiteSpace(str){
  return str === null || str.match(/^ *$/) !== null;
}
