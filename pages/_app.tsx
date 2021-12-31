import Head from "next/head";
import Container from "../components/Container";
import LeftNavbar from "../components/LeftNavbar";
import RightNavbar from "../components/RightNavbar";
import PageViewContainer from "../components/PageViewContainer";

import TweetsContext from "../context/tweets";

import "../styles/index.css";
import type { AppProps } from "next/app";
import { BottomNavBar, Drawer, DrawerContent } from "../components";
import UiProvider from "../context/ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TweetsContext>
        <UiProvider>
          <div className="w-full bg-gray-800 relative min-h-screen text-white">
            <Container>
              <Drawer>
                <DrawerContent />
              </Drawer>
              <LeftNavbar />
              <PageViewContainer>
                <Component {...pageProps} />
              </PageViewContainer>
              <RightNavbar />
              <BottomNavBar />
            </Container>
          </div>
        </UiProvider>
      </TweetsContext>
    </>
  );
}

export default MyApp;
