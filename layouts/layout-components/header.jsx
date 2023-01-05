import Link from 'next/link';

export const Header = () => {
  return (
    <header>
        <div>
          <nav>
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
                <Link href="/stats" passHref>
                  Coding Stats
                </Link>
              </li>
              <li>
                <Link href="/experience" passHref>
                  Work Experience & Education
                </Link>
              </li>
              <li>
                <Link href="/tech" passHref>
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/school-of-thought" passHref>
                  School of Thought
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  );
};
