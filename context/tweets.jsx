import { createContext, useState, useEffect } from "react";

export const TweetsContext = createContext();

export default function tweets(props) {
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
