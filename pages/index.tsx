import MainTweets from "../components/MainTweets";

import { useTweets } from "../context/tweets";
export default function Home() {
  const { tweets } = useTweets();
  return <MainTweets tweets={tweets} />;
}
