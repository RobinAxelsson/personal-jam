import ReactMarkdown from 'react-markdown'

export default function MarkdownCard({markdownContent, additionalClassName}) {
  
  let className = "card-general";
  if(typeof additionalClassName === 'string'){
  className += " " + additionalClassName;
  }
  const sections = markdownContent.split('---').filter(x => !isEmptyOrWhiteSpace(x));
  return sections.map(x => (
    <div className={className} key={x.slice(0, 20)}>
    <div className="card-general__content">
    <ReactMarkdown>{x}</ReactMarkdown>
    </div>
  </div>
  ));
}

function isEmptyOrWhiteSpace(str){
  return str === null || str.match(/^ *$/) !== null;
}