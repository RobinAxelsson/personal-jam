import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getPersonalData, getSortedHighlightedProjectsData, getSummary } from '../lib/markdownContent';
import parse from 'html-react-parser';

export async function getStaticProps() {
  return {
    props: {
      allHighlightedProjectsData: getSortedHighlightedProjectsData(),
      summaryData: getSummary(),
      personalData: getPersonalData(),
    },
  };
}

export default function Home({ allHighlightedProjectsData, summaryData, personalData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <CollapableSection
        title={'Personal Summary'}
        func={() => format(summaryData.content)}
      />
      <CollapableSection
        title={'Highlighted Projects'}
        func={() => highlightedProjects(allHighlightedProjectsData)}
      />
      <CollapableSection
        title={'Languages'}
        func={() => createList(personalData.languages)}
      />
      <CollapableSection
        title={'Technologies'}
        func={() => createList(personalData.technologies)}
      />
    </Layout>
  );
}

function highlightedProjects(allHighlightedProjectsData){
  return (
    <ul className={utilStyles.list}>
    {allHighlightedProjectsData.map(({ id, title, content, start, end, company }) => (
      <li className={utilStyles.listItem} key={id}>
        <h3>{title}</h3>
        {company} {parseDate(start)}-{parseDate(end)}
        <br />
        <p>{parse(content)}</p>
      </li>
    ))}
    </ul>
  )
}

function createList(list){
  return (
    <ul className={utilStyles.list}>
    {list.map(lang => (
      <li id={lang}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{lang}
      </li>
    ))}
    </ul>
  )
}

function CollapableSection({title, func}){
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    <details>
    <summary className={utilStyles.headingLg}>{title}</summary>
    {func()}
    </details>
  </section>
  )
}

function parseDate(date){
  return new Date(date).getMonth() + 1 + '/' + new Date(date).getFullYear().toString()
}

function format(content){
  return parse(content.replaceAll('\n', '<br />'))
}

