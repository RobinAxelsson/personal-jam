import Link from "next/link";
import styles from "./mobile-nav.module.scss"

export function MobileNav({navLinks}){
  return (
    <nav className={styles.mobile_nav}>
      <input id={styles.mobile_nav__toggle} type="checkbox" />
      <label className={styles.mobile_nav__btn} htmlFor={styles.mobile_nav__toggle}>
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
}