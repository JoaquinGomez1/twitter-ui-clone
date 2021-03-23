import Head from "next/head";
import Container from "../components/Container";
import LeftNavbar from "../components/LeftNavbar";
import RightNavbar from "../components/RightNavbar";
import PageViewContainer from "../components/PageViewContainer";

import TweetsContext from "../context/tweets";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TweetsContext>
        <div className=" bg-gray-800 relative pb-12 min-h-screen text-white ">
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
