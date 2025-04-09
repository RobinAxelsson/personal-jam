import fs from 'fs'
import MarkdownCard from "../components/markdown-card"

export async function getStaticProps() {
  return {
    props: {
      schoolOfThought: getMarkdownContent('markdown/cards.school-of-thought.md')
    },
  };
}

export default function SchoolOfThoughtPage({ schoolOfThought }) {
  return (
    <div className="card-collection">
      <MarkdownCard markdownContent={schoolOfThought}
      additionalClassName={"card-general--small"}
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
