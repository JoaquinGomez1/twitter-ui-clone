import Container from "../components/Container";
import LeftNavbar from "../components/LeftNavbar";
import MainTweets from "../components/MainTweets";

export default function Home() {
  return (
    <div className="p-4 bg-gray-800">
      <Container className="flex">
        <LeftNavbar />
        <MainTweets />
        <LeftNavbar />
      </Container>
    </div>
  );
}
