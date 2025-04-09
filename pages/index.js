import fs from 'fs'
import MarkdownCard from "../components/markdown-card";
import CardHero from "../components/hero"

export async function getStaticProps() {
  return {
    props: {
      toRecruitersMarkdown: getMarkdownContent('markdown/cards.to-recruiters.md'),
    },
  };
}

export default function DemoInfoCard({ toRecruitersMarkdown }) {
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
