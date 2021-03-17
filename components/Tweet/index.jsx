import {
  faRetweet,
  faHeart,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function index(tweet) {
  const { author_name, author_tag, content, date, avatar } = tweet.tweet;
  return (
    <div className="flex p-4 border border-gray-100 border-opacity-20">
      <div className="rounded-full h-6 bg-white p-6 ">
        <div></div>
      </div>
      <div className="flex flex-col px-4 w-full">
        <div className="flex items-center">
          <p className="text-white font-bold text-sm mr-2">{author_name}</p>
          <p className="text-gray-400 text-opacity-70">@{author_tag} .</p>
          <p>{date}</p>
        </div>

        <div className="flex flex-grow text-gray-200">
          <p>{content}</p>
        </div>
        <div className="flex justify-between mt-2">
          <div>
            <FontAwesomeIcon
              className="w-4 h-4 text-gray-500"
              icon={faCommentAlt}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="w-4 h-4 text-gray-500"
              icon={faRetweet}
            />
          </div>
          <div>
            <FontAwesomeIcon className="w-4 h-4 text-gray-500" icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
}
