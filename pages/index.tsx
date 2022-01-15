import MainTweets from "../components/MainTweets";

import { useTweets } from "../context/tweets";
export default function Home() {
  const { tweets, tweetsLoading } = useTweets();

  return <MainTweets loading={tweetsLoading} tweets={tweets} />;
}
