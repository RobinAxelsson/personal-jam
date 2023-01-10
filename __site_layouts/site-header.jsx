import { MobileNav } from "../__site_components/mobile-nav";
import { WideNav } from "../__site_components/wide-nav";

export const Header = () => {
  return (
    <header className="site-header">
      <WideNav />
      <MobileNav />
    </header>
  );
};
