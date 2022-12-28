import { getSummary } from '../data-access/resume-repository';
import { Summary } from '../components/summary';

export async function getStaticProps() {
  return {
    props: {
      summaryData: getSummary()
    },
  };
}

export default function Page({ summaryData }) {
  return (
    <>
    <Summary 
        title={summaryData.title}
        content={summaryData.content}
        />
    </>

  );
}
