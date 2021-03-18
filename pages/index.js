import Container from "../components/Container";
import LeftNavbar from "../components/LeftNavbar";
import MainTweets from "../components/MainTweets";
import RightNavbar from "../components/RigthNavbar";

export default function Home() {
  return (
    <div className=" bg-gray-800 relative ">
      <Container className="flex relative">
        <LeftNavbar />
        <MainTweets />
        <RightNavbar />
      </Container>
    </div>
  );
}
