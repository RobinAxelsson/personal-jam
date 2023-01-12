import { getMarkdownContent } from "../__data_access/resume-repository";
import MarkdownCard from "../__site_components/markdown-card";
export async function getStaticProps() {
  return {
    props: {
      contactMarkdown: getMarkdownContent("__data_records/cards.contact.md"),
    },
  };
}

export default function ContactPage({ contactMarkdown }) {
  return (
    <div className="card-collection">
      <MarkdownCard markdownContent={contactMarkdown} />
    </div>
  );
}
