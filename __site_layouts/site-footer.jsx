import styles from './site-footer.module.scss'
import { getModuleStyleFunctionFactory } from '../__utils/css-style';
import Link from 'next/link'

const style = getModuleStyleFunctionFactory(styles);
export const SiteFooter = () => {
  return (
    <footer className={style("site-footer")}>
      <ul className={style("site-footer__list")}>
        <li className={style("site-footer__item site-footer__item--title")}>
          <h3>© 2024 Robin Salih Axelsson</h3>
        </li>
        <li className={style("site-footer__item site-footer__item--link")}>
          <a href="https://www.linkedin.com/in/axelsson-robin/">linkedin.com/in/axelsson-robin</a>
        </li>
      </ul>
    </footer>
  );
};
