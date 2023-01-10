import Link from "next/link";

export const MobileNav = () => (
  <div class="mobile-nav">
    <input id="mobile-nav__toggle" type="checkbox" />
    <label class="mobile-nav__btn" for="mobile-nav__toggle">
      <span></span>
    </label>
    <ul class="mobile-nav__box">
      <li className="mobile-nav__link-item">
        <Link href="/" passHref>
          Start
        </Link>
      </li>
      <li className="mobile-nav__link-item">
        <Link href="/projects" passHref>
          Projects
        </Link>
      </li>
      <li className="mobile-nav__link-item">
        <Link href="/stats" passHref>
          Coding Stats
        </Link>
      </li>
      <li className="mobile-nav__link-item">
        <Link href="/experience" passHref>
          Work Experience & Education
        </Link>
      </li>
      <li className="mobile-nav__link-item">
        <Link href="/tech" passHref>
          Technologies
        </Link>
      </li>
      <li className="mobile-nav__link-item">
        <Link href="/school-of-thought" passHref>
          School of Thought
        </Link>
      </li>
      <li className="mobile-nav__link-item">
        <Link href="/about" passHref>
          About
        </Link>
      </li>
      <li className="mobile-nav__link-item">
        <a href="https://drive.google.com/file/d/1T6D66JRzcRjqYrN8KlE58GevxIs82P4g/view?usp=share_link">
          CV
        </a>
      </li>
    </ul>
  </div>
);