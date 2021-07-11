import NewTweetBox from "./NewTweetBox";
import TweetBoxHeader from "./TweetBoxHeader";
import Tweet from "./Tweet";
import formatAsTweet from "../libs/formatAsTweet";
import LoadingSpinner from "./LoadingSpinner";

export default function MainTweets(props) {
  if (!props.tweets.length) return <LoadingSpinner />;

  return (
    <div>
      <TweetBoxHeader />
      <div className=" bg-gray-800">
        <NewTweetBox />
      </div>
      <div>
        {props?.tweets?.map((tweet) => {
          const formatedTweet = tweet.originalContent
            ? tweet
            : formatAsTweet(tweet);
          return <Tweet key={formatedTweet.author_id} tweet={formatedTweet} />;
        })}
      </div>
    </div>
  );
}
