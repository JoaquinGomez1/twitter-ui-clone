import NewTweetBox from "./NewTweetBox";
import TweetBoxHeader from "./TweetBoxHeader";
import Tweet from "./Tweet";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { TweetSkeleton } from ".";
import { ITweet } from "../interfaces/tweets";

interface MainTweetsProps {
  tweets: ITweet[];
  loading: boolean;
  name?: string; // Used by the Tab component
}

export default function MainTweets({ tweets, loading }: MainTweetsProps) {
  const initialArray = Array.from(Array(8).keys()); // Contains an array of numbers from 1 to 10

  return (
    <div className="relative">
      <TweetBoxHeader icon={faMeteor} content="Home" />
      <div className=" bg-gray-800">
        <NewTweetBox />
      </div>
      <div className="w-full transition-all ease-in-out">
        {loading
          ? initialArray.map((value) => <TweetSkeleton key={value} />)
          : tweets?.map((tweet: any) => {
              return <Tweet key={tweet.author_id} tweet={tweet} />;
            })}
      </div>
    </div>
  );
}
