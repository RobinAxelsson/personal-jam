import parse from "html-react-parser";
import utilStyles from "../styles/utils.module.css";

export default function CollapsableResume({
  allHighlightedProjectsData,
  summaryData,
  personalData,
  worklife,
  education,
}) {
  return (
    <div className="collapsable-resume-container">
      <CollapableSection
        title={"Personal Summary"}
        func={() => format(summaryData.content)}
      />
      <CollapableSection
        title={"Highlighted Projects"}
        func={() => highlightedProjects(allHighlightedProjectsData)}
      />
      <CollapableSection
        title={"Languages"}
        func={() => createList(personalData.languages)}
      />
      <CollapableSection
        title={"Technologies"}
        func={() => createList(personalData.technologies)}
      />
      <CollapableSection
        title={"Work Experience"}
        func={() => createWorkLifeItems(worklife)}
      />
      <CollapableSection
        title={"Education"}
        func={() => createEducationItems(education)}
      />
    </div>
  );
}

function highlightedProjects(allHighlightedProjectsData) {
  return (
    <ul className={utilStyles.list}>
      {allHighlightedProjectsData.map(
        ({ id, title, content, start, end, company }) => (
          <li className={utilStyles.listItemHighlightedProject} key={id}>
            <p className={utilStyles.headingHighlightedProjects}>{title}</p>
            {company} {parseDate(start)}-{parseDate(end)}
            <br />
            <p>{parse(content)}</p>
          </li>
        )
      )}
    </ul>
  );
}

function createWorkLifeItems(worklife) {
  return (
    <ul className={utilStyles.list}>
      {worklife.map(({ company, title, start, end }) => (
        <li id={title} className={utilStyles.listItemDel} key={title}>
          {parseDate(start)}-{parseDate(end)} | {company} | {title}
        </li>
      ))}
    </ul>
  );
}

function createEducationItems(education) {
  return (
    <ul className={utilStyles.list}>
      {education.map(({ title, school, start, end }) => (
        <li id={title} className={utilStyles.listItemDel} key={title}>
          {parseDate(start)}-{parseDate(end)} | {title} | {school}
        </li>
      ))}
    </ul>
  );
}

function createList(list) {
  return (
    <ul className={utilStyles.list}>
      {list.map((lang) => (
        <li id={lang} className={utilStyles.listItem} key={lang}>
          {lang}
        </li>
      ))}
    </ul>
  );
}

function CollapableSection({ title, func }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <details>
        <summary className={utilStyles.headingLg}>{title}</summary>
        {func()}
      </details>
    </section>
  );
}

function parseDate(date) {
  if (date === "" || date === null) return "ongoing";

  let year = date.split("-")[0];
  let month = date.split("-")[1];
  return month + "/" + year;
}

function format(content) {
  return parse(content.replaceAll("\n", "<br />"));
}
