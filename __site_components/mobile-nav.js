import Link from "next/link";
import styles from "./mobile-nav.module.css"

export const MobileNav = () => (
  <nav className={styles.mobile_nav}>
    <input id={styles.mobile_nav__toggle} type="checkbox" />
    <label className={styles.mobile_nav__btn} for={styles.mobile_nav__toggle}>
      <span></span>
    </label>
    <ul className={styles.mobile_nav__box}>
      <li className={styles.mobile_nav__link_item}>
        <Link href="/" passHref>
          Start
        </Link>
      </li>
      <li className={styles.mobile_nav__link_item}>
        <Link href="/projects" passHref>
          Projects
        </Link>
      </li>
      <li className={styles.mobile_nav__link_item}>
        <Link href="/stats" passHref>
          Coding Stats
        </Link>
      </li>
      <li className={styles.mobile_nav__link_item}>
        <Link href="/experience" passHref>
          Work Experience & Education
        </Link>
      </li>
      <li className={styles.mobile_nav__link_item}>
        <Link href="/tech" passHref>
          Technologies
        </Link>
      </li>
      <li className={styles.mobile_nav__link_item}>
        <Link href="/school-of-thought" passHref>
          School of Thought
        </Link>
      </li>
      <li className={styles.mobile_nav__link_item}>
        <Link href="/about" passHref>
          About
        </Link>
      </li>
      <li className={styles.mobile_nav__link_item}>
        <a href="https://drive.google.com/file/d/1T6D66JRzcRjqYrN8KlE58GevxIs82P4g/view?usp=share_link">
          CV
        </a>
      </li>
    </ul>
  </nav>
);
