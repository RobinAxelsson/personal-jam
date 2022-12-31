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
                <Link href="/summary" passHref>
                  Summary
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  Education
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  );
};
