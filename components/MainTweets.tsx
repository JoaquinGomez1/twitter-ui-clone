import NewTweetBox from "./NewTweetBox";
import TweetBoxHeader from "./TweetBoxHeader";
import Tweet from "./Tweet";
import formatAsTweet from "../libs/formatAsTweet";
import LoadingSpinner from "./LoadingSpinner";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { ITweet } from "../constants/types";

interface MainTweetsProps {
  tweets: ITweet[];
  loading: boolean;
  name?: string; // Used by the Tab component
}

export default function MainTweets({ tweets, loading }: MainTweetsProps) {
  if (!tweets.length && loading) return <LoadingSpinner />;

  return (
    <div className="relative">
      <TweetBoxHeader icon={faMeteor} content="Home" />
      <div className=" bg-gray-800">
        <NewTweetBox />
      </div>
      <div className="w-full transition-all ease-in-out">
        {tweets?.map((tweet: any) => {
          return <Tweet key={tweet.author_id} tweet={tweet} />;
        })}
      </div>
    </div>
  );
}
