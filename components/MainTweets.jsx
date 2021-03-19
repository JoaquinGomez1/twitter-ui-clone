import NewTweetBox from "./NewTweetBox";
import TweetBoxHeader from "./TweetBoxHeader";
import Tweet from "./Tweet";
import formatAsTweet from "../libs/formatAsTweet";
import LoadingSpinner from "./LoadingSpinner";

export default function MainTweets(props) {
  return (
    <div className="md:w-">
      <TweetBoxHeader />
      <NewTweetBox />
      <div>
        {!props.tweets.length ? (
          <LoadingSpinner />
        ) : (
          props.tweets.map((tweet) => {
            const formatedTweet = formatAsTweet(tweet);
            return (
              <Tweet key={formatedTweet.author_id} tweet={formatedTweet} />
            );
          })
        )}
      </div>
    </div>
  );
}
