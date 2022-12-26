import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedHighlightedProjectsData, getSummary } from '../lib/markdownContent';

export async function getStaticProps() {
  const allHighlightedProjectsData = getSortedHighlightedProjectsData();
  const summaryData = getSummary();
  return {
    props: {
      allHighlightedProjectsData: allHighlightedProjectsData,
      summaryData: summaryData
    },
  };
}

function parseDate(date){
  return new Date(date).getMonth() + 1 + '/' + new Date(date).getFullYear().toString()
}

export default function Home({ allHighlightedProjectsData, summaryData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{summaryData.content}</p>
      </section>
      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Highlighted Projects</h2>
        <ul className={utilStyles.list}>
          {allHighlightedProjectsData.map(({ id, title, content, start, end, company }) => (
            <li className={utilStyles.listItem} key={id}>
              <h3>{title}</h3>
              {company} {parseDate(start)}-{parseDate(end)}
              <br />
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}