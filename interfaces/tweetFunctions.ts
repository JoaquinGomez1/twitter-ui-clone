import { ITweet } from "./tweets";

export default interface TweetFunctions {
  addTweet: (tweet: ITweet) => void;
}
