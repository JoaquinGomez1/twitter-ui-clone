import Container from "../components/Container";
import LeftNavbar from "../components/LeftNavbar";
import MainTweets from "../components/MainTweets";
import RightNavbar from "../components/RigthNavbar";
import fetch from "isomorphic-unfetch";

export default function Home({ tweets }) {
  return (
    <div className=" bg-gray-800 relative pb-12 ">
      <Container className="flex relative">
        <LeftNavbar />
        <MainTweets tweets={tweets} />
        <RightNavbar />
      </Container>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const URL = "https://randomuser.me/api/?results=8";
  const req = await fetch(URL);
  const res = await req.json();

  return { props: { tweets: res } };
}
