import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/header";
import Global from "../styles/globals";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const ifuser = localStorage.getItem("userdata");
    if (!ifuser) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Global />
    </>
  );
}

export default MyApp;
