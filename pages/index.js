import { useState, useEffect } from "react";
import Container from "../components/Container";
import MainTweets from "../components/MainTweets";

export default function Home() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    let fetchAllowed = true;
    if (fetchAllowed) {
      const maxResults = 12;
      const URL = `https://randomuser.me/api/?results=${maxResults}`;
      const req = await fetch(URL);
      const res = await req.json();

      setTweets(res.results);
    }
    return () => {
      fetchAllowed = false;
    };
  };
  return (
    <Container className="flex relative">
      <MainTweets tweets={tweets} />
    </Container>
  );
}
