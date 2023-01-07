import ReactMarkdown from 'react-markdown'

export default function MarkdownCard({markdownContent}) {
  const sections = markdownContent.split('---').filter(x => !isEmptyOrWhiteSpace(x));
  return sections.map(x => (
    <Card key={x.slice(0, 20)}
      right={
        <ReactMarkdown>{x}</ReactMarkdown>
      }
    />
  ));
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

function isEmptyOrWhiteSpace(str){
  return str === null || str.match(/^ *$/) !== null;
}