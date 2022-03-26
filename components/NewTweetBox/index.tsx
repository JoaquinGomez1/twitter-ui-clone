import { useState } from "react";
import { useTweets } from "../../context/tweets";

import defaultImages from "../../constants/defaultImages";
import { ITweet } from "../../interfaces/tweets";

const makeNewTweetData = (data: string): ITweet => ({
  author_id: `${Math.random()}`,
  images: {
    large: defaultImages.large,
    thumbnail: defaultImages.thumbnail,
  },
  author_tag: "ThisUser",
  author_name: `This_Awesome_user`,
  comments: 0,
  likes: 0,
  retweets: 0,
  content: data,
  originalContent: true,
});

export default function index() {
  const {
    tweetsFunctions: { addTweet },
  } = useTweets();
  const [inputValue, setInputValue] = useState("");
  const maxCharacters = 120;

  const handleChange = ({ target }: any) => {
    setInputValue(target.value.substring(0, maxCharacters));
  };

  const handleNewTweet = () => {
    addTweet(makeNewTweetData(inputValue));
  };

  return (
    <div className="flex p-4 py-3 border-l border-r border-b border-opacity-20 border-gray-100">
      <div>
        <div className="h-11 w-11 object-fit overflow-hidden rounded-full bg-white">
          <img src={defaultImages.thumbnail} alt=""></img>
        </div>
      </div>
      <div className="flex-grow">
        <textarea
          onChange={handleChange}
          value={inputValue}
          placeholder="What's happening"
          className="mx-2 p-2 bg-transparent resize-none w-full focus:outline-none text-gray-200"
        />
        <p
          className={
            inputValue?.length >= 100
              ? "text-pink-600 text-opacity-70"
              : "text-gray-400 "
          }
        >
          {inputValue?.length} / {maxCharacters}
        </p>
        <div className="border-t border-gray-100 border-opacity-20 " />
        <div className="flex justify-between mt-2">
          <div className="flex-grow"></div>
          <button
            onClick={handleNewTweet}
            className="px-4 py-2 bg-green-400 hover:bg-green-500 rounded-full text-white font-bold text-sm focus:outline-none"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
