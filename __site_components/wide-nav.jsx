import Link from "next/link";
import styles from "./wide-nav.module.scss";

export function WideNav({navLinks}) {
  return (
    <nav className={styles.wide_nav}>
      <ul className={styles.wide_nav__link_list}>
        {navLinks.map(x => {
          return (<li className={styles.wide_nav__link_item} key={x.link}>
          <Link href={x.link} passHref>
            {x.title}
          </Link>
        </li>)})
        }
      </ul>
    </nav>
  );
}
