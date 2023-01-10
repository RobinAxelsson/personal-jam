import MainLayout from "../layouts/main-layout";
import "../styles/globals.css";
import "../components/mobile-nav.css";
import "../components/wide-nav.css";
import "../components/tech-table.css";
import "../components/coding-stats.css";
import "../styles/general.sass";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
