import {
  createContext,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { ITweet } from "../constants/types";
interface useTweetsState {
  tweets: ITweet[];
  setTweets: Dispatch<SetStateAction<never[]>>;
  tweetsLoading: boolean;
  setTweetsLoading: Dispatch<SetStateAction<boolean>>;
}

export const TweetsContext = createContext<useTweetsState>(undefined!);

export default function TweetsProvider(props: any) {
  const [tweets, setTweets] = useState([]);
  const [tweetsLoading, setTweetsLoading] = useState(false);

  const handleFetch = async () => {
    setTweetsLoading(true);
    const maxResults = 12;
    const URL = `https://randomuser.me/api/?results=${maxResults}`;
    const req = await fetch(URL);
    const res = await req.json();

    setTweets(res.results);
    setTweetsLoading(false);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <TweetsContext.Provider
      value={{ tweets, setTweets, tweetsLoading, setTweetsLoading }}
      {...props}
    />
  );
}

export function useTweets(): useTweetsState {
  const context = useContext(TweetsContext);
  if (!context) throw new Error("Use this inside a Tweets Provider");

  return context;
}
