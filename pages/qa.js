import { getMarkdownContent } from "../__data_access/resume-repository";
import MarkdownCard from "../__site_components/markdown-card"
export async function getStaticProps() {
  return {
    props: {
      qaMarkdown: getMarkdownContent('__data_records/cards.qa.md')
    },
  };
}

export default function QaPage({ qaMarkdown }) {
  return (
    <div className="card-collection">
      <MarkdownCard markdownContent={qaMarkdown}/>
        </div>
  );
}


