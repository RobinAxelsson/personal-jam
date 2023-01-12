import MarkdownCard from "../__site_components/markdown-card";
import { getMarkdownContent } from "../__data_access/resume-repository";

export async function getStaticProps() {
  return {
    props: {
      allHighlightedProjectsMarkdown: getMarkdownContent("__data_records/cards.highlighted-projects.md")
    },
  };
}

export default function ProjectsPage({ allHighlightedProjectsData, allHighlightedProjectsMarkdown }) {
  return (
    <div className="card-collection">
      <MarkdownCard markdownContent={allHighlightedProjectsMarkdown} />
    </div>
  );
}