import MarkdownCard from "../__site_components/markdown-card"
import fs from 'fs';

export async function getStaticProps() {
  return {
    props: {
      qaMarkdown: getMarkdownContent('markdown-content/cards.qa.md')
    },
  };
}

export default function QaPage({ qaMarkdown }) {
  return (
    <div className="card-collection">
      <MarkdownCard markdownContent={qaMarkdown}
      additionalClassName={"card-general--center"}
      />
        </div>
  );
}

function getMarkdownContent(path){
  const content = fs.readFileSync(path, 'utf8');
  if(content === undefined || content === null || content.trim().length === 0)
    throw new Error("Invalid string value, got: " + content);

  return content;  
}

