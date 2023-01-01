import { getSummary } from '../data-access/resume-repository';
import parse from 'html-react-parser';

export async function getStaticProps() {
  return {
    props: {
      summaryData: getSummary()
    },
  };
}

export default function Page({ summaryData }) {
  return (

    <div className="card-general">
        <h2 className="card-title">{summaryData.title}</h2>
        {format(summaryData.content)}
    </div>
  );
}

function format(content){
  return parse(content.replaceAll('\n', '<br />'))
}