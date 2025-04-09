import MainLayout from "../layouts/main-layout";
import "../styles/main.scss";

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
