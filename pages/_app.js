import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
