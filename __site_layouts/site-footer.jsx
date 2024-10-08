import styles from './site-footer.module.scss';

export const SiteFooter = () => {
  return (
    <footer className={styles.site_footer}>
      <ul>
        <li>
          <h3>© 2024 Robin Salih Axelsson</h3>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/axelsson-robin/">linkedin.com/in/axelsson-robin</a>
        </li>
        <li>
          <a href="https://www.github.com/robinaxelsson">github.com/robinaxelsson</a>
        </li>
      </ul>
    </footer>
  );
};
