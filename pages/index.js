import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getPersonalData, getSortedHighlightedProjectsData, getSummary, getWorkLife } from '../lib/markdownContent';
import parse from 'html-react-parser';

export async function getStaticProps() {
  return {
    props: {
      allHighlightedProjectsData: getSortedHighlightedProjectsData(),
      summaryData: getSummary(),
      personalData: getPersonalData(),
      worklife: getWorkLife()
    },
  };
}

export default function Home({ allHighlightedProjectsData, summaryData, personalData, worklife }) {
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
        <CollapableSection
        title={'Work Experience'}
        func={() => createWorkLifeItems(worklife)}
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

function createWorkLifeItems(worklife){
  return (
    <ul className={utilStyles.list}>
    {worklife.map(({company, title, start, end}) => (
      <li id={title}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{company} | {title} | {parseDate(start)}-{parseDate(end)}
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
  
  let dateObj;
  if(date === "" || date === null) 
    return "ongoing"
  
  dateObj = new Date(date)
  return dateObj.getMonth() + 1 + '/' + dateObj.getFullYear().toString()
}

function format(content){
  return parse(content.replaceAll('\n', '<br />'))
}

