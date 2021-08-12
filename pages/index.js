import { useEffect } from "react";
import MainTweets from "../components/MainTweets.tsx";

import { useTweets } from "../context/tweets";
export default function Home() {
  const { tweets } = useTweets();
  // useEffect(() => {
  //   handleFetch();
  // }, []);

  // const handleFetch = async () => {
  //   let fetchAllowed = true;
  //   if (fetchAllowed && !tweets.length) {
  //     setTweetsLoading(true);
  //     const maxResults = 12;
  //     const URL = `https://randomuser.me/api/?results=${maxResults}`;
  //     const req = await fetch(URL);
  //     const res = await req.json();

  //     setTweets(res.results);
  //     setTweetsLoading(false);
  //   }
  //   return () => {
  //     fetchAllowed = false;
  //   };
  // };

  return <MainTweets tweets={tweets} />;
}
