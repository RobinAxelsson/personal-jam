import { MobileNav } from "../components/mobile-nav";
import { WideNav } from "../components/wide-nav";

export const Header = () => {
  return (
    <header className="site-header">
      <WideNav />
      <MobileNav />
    </header>
  );
};
