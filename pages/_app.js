import MainLayout from "../__site_layouts/main-layout";
import "../__site_scss/main.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout
      >
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default App;
