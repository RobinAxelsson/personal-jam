import Link from "next/link";

export function WideNav() {
  return (
    <nav className="wide-nav">
      <ul className="wide-nav__link-list">
        <li className="wide-nav__link-item">
          <Link href="/" passHref>
            Start
          </Link>
        </li>
        <li className="wide-nav__link-item">
          <Link href="/projects" passHref>
            Projects
          </Link>
        </li>
        <li className="wide-nav__link-item">
          <Link href="/stats" passHref>
            Coding Stats
          </Link>
        </li>
        <li className="wide-nav__link-item">
          <Link href="/experience" passHref>
            Work Experience & Education
          </Link>
        </li>
        <li className="wide-nav__link-item">
          <Link href="/tech" passHref>
            Technologies
          </Link>
        </li>
        <li className="wide-nav__link-item">
          <Link href="/school-of-thought" passHref>
            School of Thought
          </Link>
        </li>
        <li className="wide-nav__link-item">
          <Link href="/about" passHref>
            About
          </Link>
        </li>
        <li className="wide-nav__link-item">
          <a href="https://drive.google.com/file/d/1T6D66JRzcRjqYrN8KlE58GevxIs82P4g/view?usp=share_link">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}
