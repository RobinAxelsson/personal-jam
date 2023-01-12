import { MobileNav } from "../__site_components/mobile-nav";
import { WideNav } from "../__site_components/wide-nav";

export const Header = () => {
  return (
    <header className="site-header">
      <WideNav navLinks={navLinks} />
      <MobileNav navLinks={navLinks}/>
    </header>
  );
};

const navLinks = [
  "Start;/",
  "Projects;/projects",
  "Coding Stats;/stats",
  "Work Experience & Education;/experience",
  "Technologies;/tech",
  "School of Thought;/school-of-thought",
  "Q&A;/qa",
  "CV;https://drive.google.com/file/d/1T6D66JRzcRjqYrN8KlE58GevxIs82P4g/view?usp=share_link",
  "Contact;/contact"
].map(x => {
  const split = x.split(';');
  if(split.length !== 2) throw new Error("Should be two, got: " + split)
  return {
    title: split[0],
    link: split[1]
}})