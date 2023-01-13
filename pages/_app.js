import MainLayout from "../__site_layouts/main-layout";
import "../__site_scss/main.scss";

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
