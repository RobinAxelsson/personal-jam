export const Footer = () => {
  return (
    <footer className="site-footer">
      <ul className="site-footer__list">
        <li className="site-footer__item site-footer__item--title">
          <h3>© 2023 Robin Salih Axelsson</h3>
        </li>
        <li className="site-footer__item site-footer__item--link">
          <a href="https://www.linkedin.com/in/axelsson-robin/">LinkedIn</a>
        </li>
        <li className="site-footer__item site-footer__item--link">
          <a href="https://www.github.com/robinaxelsson">GitHub</a>
        </li>
        <li className="site-footer__item site-footer__item--link">
          <a href="https://www.quokka.se/">Software by Quokka</a>
        </li>
        <li className="site-footer__item site-footer__item--email">
          <span className="accent-word">robin.axelsson@quokka.se</span>
        </li>
      </ul>
    </footer>
  );
};
