import Link from "next/link"

export function SiteNav() {
  return (<div>
    <nav className="site-nav">
      <ul className="site-nav__link-list">
        <NavLinks />
      </ul>
    </nav>
  </div>);
}

const NavLinks = ({ keyHref }) => (
  <>
    <li>
      <Link href="/" passHref>
        Start
      </Link>
    </li>
    <li>
      <Link href="/projects" passHref>
        Projects
      </Link>
    </li>
    <li>
      <Link href="/stats" passHref>
        Coding Stats
      </Link>
    </li>
    <li>
      <Link href="/experience" passHref>
        Work Experience & Education
      </Link>
    </li>
    <li>
      <Link href="/tech" passHref>
        Technologies
      </Link>
    </li>
    <li>
      <Link href="/school-of-thought" passHref>
        School of Thought
      </Link>
    </li>
    <li>
      <Link href="/about" passHref>
        About
      </Link>
    </li>
    <li>
      <a href="https://drive.google.com/file/d/1T6D66JRzcRjqYrN8KlE58GevxIs82P4g/view?usp=share_link">
        CV
      </a>
    </li>
  </>
);