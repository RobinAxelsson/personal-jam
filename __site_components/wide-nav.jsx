import Link from "next/link";
import styles from "./wide-nav.module.scss";

export function WideNav() {
  return (
    <nav className={styles.wide_nav}>
      <ul className={styles.wide_nav__link_list}>
        <li className={styles.wide_nav__link_item}>
          <Link href="/" passHref>
            Start
          </Link>
        </li>
        <li className={styles.wide_nav__link_item}>
          <Link href="/projects" passHref>
            Projects
          </Link>
        </li>
        <li className={styles.wide_nav__link_item}>
          <Link href="/stats" passHref>
            Coding Stats
          </Link>
        </li>
        <li className={styles.wide_nav__link_item}>
          <Link href="/experience" passHref>
            Work Experience & Education
          </Link>
        </li>
        <li className={styles.wide_nav__link_item}>
          <Link href="/tech" passHref>
            Technologies
          </Link>
        </li>
        <li className={styles.wide_nav__link_item}>
          <Link href="/school-of-thought" passHref>
            School of Thought
          </Link>
        </li>
        <li className={styles.wide_nav__link_item}>
          <Link href="/about" passHref>
            About
          </Link>
        </li>
        <li className={styles.wide_nav__link_item}>
          <a href="https://drive.google.com/file/d/1T6D66JRzcRjqYrN8KlE58GevxIs82P4g/view?usp=share_link">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}
