import { getQAMarkdown } from "../__data_access/resume-repository";
import MarkdownCard from "../__site_components/markdown-card"
export async function getStaticProps() {
  return {
    props: {
      qaMarkdown: getQAMarkdown()
    },
  };
}

export default function Home({ qaMarkdown }) {
  return (
    <div className="card-collection">
      <MarkdownCard markdownContent={qaMarkdown}/>
        </div>
  );
}


