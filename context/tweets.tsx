import {
  createContext,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  useMemo,
} from "react";
import useFetch from "../hooks/useFetch";
import ApiResponseData from "../interfaces/apiResponse";
import TweetFunctions from "../interfaces/tweetFunctions";
import { ITweet } from "../interfaces/tweets";
import formatAsTweet from "../libs/formatAsTweet";

interface useTweetsState {
  tweets: ITweet[];
  setTweets?: Dispatch<SetStateAction<ITweet[]>>;
  tweetsLoading: boolean;
  setTweetsLoading?: Dispatch<SetStateAction<boolean>>;
  tweetsFunctions: TweetFunctions;
}

interface useTweetsProps {
  maxAmmount?: number;
}

export const TweetsContext = createContext<useTweetsState>(undefined!);

export default function TweetsProvider(
  props: PropsWithChildren<useTweetsProps>
) {
  const maxResults = props.maxAmmount || 12;
  const URL = `https://randomuser.me/api/?results=${maxResults}`;
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const { data, isLoading: tweetsLoading } = useFetch<ApiResponseData>(URL);

  useEffect(() => {
    if (!data) return;

    const formatedTweets: ITweet[] =
      data?.results?.map((item) => formatAsTweet(item)) || [];
    setTweets(formatedTweets);
  }, [data]);

  const tweetsFunctions = useMemo(
    () => ({
      addTweet: (tweet: ITweet) => {
        setTweets([tweet, ...tweets]);
      },
    }),
    [tweets]
  );

  return (
    <TweetsContext.Provider
      value={{ tweets, tweetsLoading, tweetsFunctions }}
      {...props}
    />
  );
}

export function useTweets(): useTweetsState {
  const context = useContext(TweetsContext);
  if (!context) throw new Error("Use this inside a Tweets Provider");

  return context;
}
