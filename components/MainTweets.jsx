import NewTweetBox from "./NewTweetBox";
import TweetBoxHeader from "./TweetBoxHeader";
import Tweet from "./Tweet";
import constants from "../constants";
const { tweets } = constants;
import formatAsTweet from "../libs/formatAsTweet";

export default function MainTweets(props) {
  console.log(props.tweets);
  return (
    <div
      className="flex flex-grow flex-col px-4 max-w-xl ml-16 lg:ml-52"
      {...props}
    >
      <TweetBoxHeader />
      <NewTweetBox />
      <div className="">
        {tweets.map((tweet) => {
          const formatedTweet = formatAsTweet(tweet);
          return <Tweet tweet={formatedTweet} />;
        })}
      </div>
    </div>
  );
}
