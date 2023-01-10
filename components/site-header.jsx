import { MobileNav } from "./mobile-nav";
import { WideNav } from "./wide-nav";

export const Header = () => {
  return (
    <header className="site-header">
      <WideNav />
      <MobileNav />
    </header>
  );
};
