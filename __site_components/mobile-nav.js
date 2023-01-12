import Link from "next/link";
import styles from "./mobile-nav.module.scss"

export const MobileNav = ({navLinks}) => (
  <nav className={styles.mobile_nav}>
    <input id={styles.mobile_nav__toggle} type="checkbox" />
    <label className={styles.mobile_nav__btn} for={styles.mobile_nav__toggle}>
      <span></span>
    </label>
    <ul className={styles.mobile_nav__box}>
    {navLinks.map(x => {
          return (<li className={styles.mobile_nav__link_item} key={x.link}>
          <Link href={x.link} passHref>
            {x.title}
          </Link>
        </li>)})
        }
    </ul>
  </nav>
);
