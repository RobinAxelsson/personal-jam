import { MobileNav } from "../__site_components/mobile-nav";
import { WideNav } from "../__site_components/wide-nav";
import styles from './site-header.module.scss'
import { useState, useEffect } from 'react';

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 20) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`${styles.site_header} ${showNavbar ? '' : styles.site_header_hidden}`}>
      <WideNav navLinks={navLinks} />
      <MobileNav navLinks={navLinks}/>
    </header>
  );
};

const navLinks = [
  "Start;/",
  "School of Thought;/school-of-thought",
  "Q&A;/qa",
  "CV;/CV.html",
  "GitHub;https://github.com/RobinAxelsson"
].map(x => {
  const split = x.split(';');
  if(split.length !== 2) throw new Error("Should be two, got: " + split)
  return {
    title: split[0],
    link: split[1]
}})
