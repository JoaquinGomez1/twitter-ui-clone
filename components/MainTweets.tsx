import NewTweetBox from "./NewTweetBox";
import TweetBoxHeader from "./TweetBoxHeader";
import Tweet from "./Tweet";
import formatAsTweet from "../libs/formatAsTweet";
import LoadingSpinner from "./LoadingSpinner";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { ITweet } from "../constants/types";

interface MainTweetsProps {
  tweets: ITweet[];
  name?: string; // Used by the Tab component
}

export default function MainTweets(props: MainTweetsProps) {
  if (!props.tweets.length) return <LoadingSpinner />;

  return (
    <div>
      <TweetBoxHeader icon={faMeteor} content="Home" />
      <div className=" bg-gray-800">
        <NewTweetBox />
      </div>
      <div className="w-full">
        {props?.tweets?.map((tweet: any) => {
          const formatedTweet = tweet.originalContent
            ? tweet
            : formatAsTweet(tweet);
          return <Tweet key={formatedTweet.author_id} tweet={formatedTweet} />;
        })}
      </div>
    </div>
  );
}
