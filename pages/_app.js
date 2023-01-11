import MainLayout from "../__site_layouts/main-layout";
import "../__site_styles/globals.css";
import "../__site_styles/general.sass";
// import "../__site_components/mobile-nav.css";
import "../__site_components/wide-nav.css";
// import "../__site_components/tech-table.css";
// import "../__site_components/coding-stats.css";
import "../__site_components/hero.css";
import "../__site_layouts/site-footer.css";
import "../__site_layouts/site-header.css";
import "../__site_layouts/main-layout.css";

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
