import NewTweetBox from "./NewTweetBox";
import TweetBoxHeader from "./TweetBoxHeader";
import Tweet from "./Tweet";
import constants from "../constants";
const { tweets } = constants;

export default function MainTweets(props) {
  return (
    <div className="flex flex-grow flex-col px-4 max-w-xl" {...props}>
      <TweetBoxHeader />
      <NewTweetBox />
      <div className="max-h-screen overflow-y-auto">
        {tweets.map((tweet) => (
          <Tweet tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
