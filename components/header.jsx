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
                <Link href="/technologies" passHref>
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/experience" passHref>
                  Work Experience & Education
                </Link>
              </li>
              <li>
                <Link href="https://github.com/RobinAxelsson" passHref>
                  GitHub
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  );
};
