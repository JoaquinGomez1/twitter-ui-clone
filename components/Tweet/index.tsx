import {
  faRetweet,
  faHeart,
  faCommentAlt,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import InteractionButton from "./InteractionButton";
import Avatar from "../Avatar";
import { useEffect, useRef } from "react";
import { Transition } from "@tailwindui/react";
import { ITweet } from "../../interfaces/tweets";

interface TweetActions {
  comments: number;
  retweets: number;
  likes: number;
}
const makeTweetActions = ({ comments, retweets, likes }: TweetActions) => [
  {
    icon: faCommentAlt,
    count: comments,
    className: "hover:text-blue-400 hover:bg-blue-400",
  },
  {
    icon: faRetweet,
    count: retweets,
    className: "hover:text-green-400 hover:bg-green-400",
  },
  {
    icon: faHeart,
    count: likes,
    className: "hover:text-pink-600 hover:bg-pink-600",
  },
  {
    icon: faShare,
    count: undefined,
    className: "hover:text-blue-400 hover:bg-blue-400",
  },
];

interface ITweetProps {
  tweet: ITweet;
  className?: string;
}

export default function index(props: ITweetProps) {
  const {
    author_name,
    author_tag,
    content,
    date,
    likes,
    comments,
    retweets,
    images,
  } = props.tweet;
  const { className } = props;
  const mounted = useRef(true);
  const tweetActions = makeTweetActions({
    comments,
    likes,
    retweets,
  });

  useEffect(() => {
    () => (mounted.current = false);
  }, []);

  return (
    <Transition
      key={author_tag + content}
      show={mounted.current}
      enter="transition-all duration-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-all duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`flex px-4 py-2 border border-gray-100 border-opacity-20 ${className}`}
      >
        <Avatar src={images?.large! || images?.thumbnail!} />
        <div className="flex flex-col px-4 w-full">
          <div className="flex items-center">
            <div className="flex flex-col sm:flex-row sm:items-center  ">
              <p className="text-white font-bold text-sm mr-2 flex-wrap">
                {author_name.trim()}
              </p>
              <p className="text-gray-400 text-opacity-70 text-sm leading-6">
                @{author_tag.trim()} .
              </p>
            </div>
            <p>{date}</p>
          </div>

          <div className="flex flex-grow text-gray-200">
            <p className="flex-wrap leading-4 text-md">
              {content ||
                `Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Animi, ipsum.`}
            </p>
          </div>
          <div className="flex justify-between mt-3">
            {tweetActions.map((each) => (
              <InteractionButton
                icon={each.icon}
                count={each.count!}
                iconClassName={each.className}
                onClick={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
    </Transition>
  );
}
