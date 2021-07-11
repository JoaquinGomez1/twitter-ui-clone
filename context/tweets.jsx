import { createContext, useState, useEffect, useContext } from "react";

export const TweetsContext = createContext();

export default function TweetsProvider(props) {
  const [tweets, setTweets] = useState([]);
  const [tweetsLoading, setTweetsLoading] = useState(false);

  useEffect(() => {
    console.log(tweets);
  }, [tweets]);

  return (
    <TweetsContext.Provider
      value={{ tweets, setTweets, tweetsLoading, setTweetsLoading }}
      {...props}
    />
  );
}

export function useTweets() {
  if (!TweetsContext)
    return console.error("Use this inside a tweet context provider");
  const { tweets, setTweets, tweetsLoading, setTweetsLoading } =
    useContext(TweetsContext);

  return { tweets, setTweets, tweetsLoading, setTweetsLoading };
}
