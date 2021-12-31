import { ITweet } from "../constants/types";

export default interface TweetFunctions {
  addTweet: (tweet: ITweet) => void;
}
