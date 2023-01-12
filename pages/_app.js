import MainLayout from "../__site_layouts/main-layout";
// import "../__site_scss/global.scss";
import "../__site_scss/main.scss";
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
