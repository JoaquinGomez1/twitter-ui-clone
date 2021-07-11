import { useEffect, useContext } from "react";
import Container from "../components/Container";
import MainTweets from "../components/MainTweets";

import { TweetsContext } from "../context/tweets";
export default function Home() {
  const { tweets, setTweets, setTweetsLoading } = useContext(TweetsContext);
  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    let fetchAllowed = true;
    if (fetchAllowed && !tweets.length) {
      setTweetsLoading(true);
      const maxResults = 12;
      const URL = `https://randomuser.me/api/?results=${maxResults}`;
      const req = await fetch(URL);
      const res = await req.json();

      setTweets(res.results);
      setTweetsLoading(false);
    }
    return () => {
      fetchAllowed = false;
    };
  };

  return (
    <div className="flex relative">
      <MainTweets tweets={tweets} />
    </div>
  );
}
