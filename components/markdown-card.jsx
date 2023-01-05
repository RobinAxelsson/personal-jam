import ReactMarkdown from 'react-markdown'

export default function MarkdownCard({markdownContent}) {
  return (
    <Card
      right={
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      }
    />
  );
}

function Card({ left, right, key }) {
  return (
    <div className="card-general hero-section" key={key}>
      <div className="hero-section-content">
        {left}
      </div>
      <div className="hero-section-content">
        {right}
      </div>
    </div>
  );
}
