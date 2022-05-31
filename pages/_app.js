import Header from "../components/header";
import Global from "../styles/globals";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Global />
    </>
  );
}

export default MyApp;
