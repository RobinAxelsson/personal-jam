import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
        <div>
          <nav className="topNav">
            <ul>
              <li>
                <Link href="/" passHref>
                  Start
                </Link>
              </li>
              <li>
                <Link href="/projects" passHref>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/technologies" passHref>
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/workexperience" passHref>
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="/education" passHref>
                  Education
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  );
};
