export function SiteNav({ children }) {
  return (<div>
    <nav className="site-nav">
      <ul className="site-nav__link-list">{children}</ul>
    </nav>
  </div>);
}
