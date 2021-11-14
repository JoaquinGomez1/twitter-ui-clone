import Head from "next/head";
import Container from "../components/Container";
import LeftNavbar from "../components/LeftNavbar";
import RightNavbar from "../components/RightNavbar";
import PageViewContainer from "../components/PageViewContainer";

import TweetsContext from "../context/tweets";

import "../styles/index.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TweetsContext>
        <div className="w-full bg-gray-800 relative min-h-screen text-white">
          <Container>
            <LeftNavbar />
            <PageViewContainer>
              <Component {...pageProps} />
            </PageViewContainer>
            <RightNavbar />
          </Container>
        </div>
      </TweetsContext>
    </>
  );
}

export default MyApp;
