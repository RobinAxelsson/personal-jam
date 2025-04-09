import fs from 'fs'
import MarkdownCard from "../__site_components/markdown-card";
import CardHero from "../__site_components/hero"
export async function getStaticProps() {
  return {
    props: {
      toRecruitersMarkdown: getMarkdownContent('markdown-content/cards.to-recruiters.md'),
    },
  };
}

export default function SchoolOfThoughtPage({ toRecruitersMarkdown }) {
  return (
    <div className="card-collection">
        <CardHero />
        <MarkdownCard markdownContent={toRecruitersMarkdown} />
    </div>
  );
}

function getMarkdownContent(path){
  const content = fs.readFileSync(path, 'utf8');
  if(content === undefined || content === null || content.trim().length === 0)
    throw new Error("Invalid string value, got: " + content);

  return content;  
}
