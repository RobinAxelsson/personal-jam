import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getPersonalData, getSortedHighlightedProjectsData, getSummary, getWorkLife, getEducation } from '../lib/markdownContent';
import parse from 'html-react-parser';

export async function getStaticProps() {
  return {
    props: {
      allHighlightedProjectsData: getSortedHighlightedProjectsData(),
      summaryData: getSummary(),
      personalData: getPersonalData(),
      worklife: getWorkLife(),
      education: getEducation()
    },
  };
}

export default function Home({ allHighlightedProjectsData, summaryData, personalData, worklife, education }) {
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
        <CollapableSection
        title={'Education'}
        func={() => createEducationItems(education)}
      />
    </Layout>
  );
}

function highlightedProjects(allHighlightedProjectsData){
  return (
    <ul className={utilStyles.list}>
    {allHighlightedProjectsData.map(({ id, title, content, start, end, company }) => (
      <li className={utilStyles.listItemHighlightedProject} key={id}>
        <p className={utilStyles.headingHighlightedProjects}>{title}</p>
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
      <li id={title} className={utilStyles.listItemDel}>
        {parseDate(start)}-{parseDate(end)} | {company} | {title}
      </li>
    ))}
    </ul>
  )
}

function createEducationItems(education){
  return (
    <ul className={utilStyles.list}>
    {education.map(({title, school, start, end}) => (
      <li id={title} className={utilStyles.listItemDel}>
        {parseDate(start)}-{parseDate(end)} | {title} | {school}
      </li>
    ))}
    </ul>
  )
}

function createList(list){
  return (
    <ul className={utilStyles.list}>
    {list.map(lang => (
      <li id={lang} className={utilStyles.listItem}>
        {lang}
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

