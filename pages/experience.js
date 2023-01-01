import { getWorkLife, getEducation } from '../data-access/resume-repository';
import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  return {
    props: {
      worklife: getWorkLife(),
      education: getEducation()
    },
  };
}

export default function ExperiencePage({ worklife, education }) {
    return (
      <>
      <div className="card-general">
          <h2 className="card-title">Work Experience</h2>
          {createWorkLifeItems(worklife)}
      </div>
       <div className="card-general">
       <h2 className="card-title">Education</h2>
       {createEducationItems(education)}
   </div>
   </>
    );
  }

  function createEducationItems(education){
    return (
      <ul className={utilStyles.list}>
      {education.map(({title, school, start, end}) => (
        <li id={title} className={utilStyles.listItemDel} key={title}>
          {parseDate(start)}-{parseDate(end)} | {title} | {school}
        </li>
      ))}
      </ul>
    )
  }

  function createWorkLifeItems(worklife){
    return (
      <ul className={utilStyles.list}>
      {worklife.map(({company, title, start, end}) => (
        <li id={title} className={utilStyles.listItemDel} key={title}>
          {parseDate(start)}-{parseDate(end)} | {company} | {title}
        </li>
      ))}
      </ul>
    )
  }
  
  function parseDate(date){
  if(date === "" || date === null) 
      return "ongoing"
  
  let year = date.split('-')[0];
  let month = date.split('-')[1];
  return month + '/' + year
  }
