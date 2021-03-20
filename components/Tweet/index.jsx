import {
  faRetweet,
  faHeart,
  faCommentAlt,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function index(tweet) {
  const {
    author_name,
    author_tag,
    content,
    date,
    images: { large, thumbnail },
  } = tweet.tweet;
  return (
    <div className="flex p-4 border border-gray-100 border-opacity-20">
      <div className="xs:h-1/6 md:h-11 xs:w-1/3 sm:w-12 bg-red-400 overflow-hidden mt-1 rounded-full ">
        <img
          className="my-auto h-full w-full object-fit"
          src={large || thumbnail}
          alt={"profile pic"}
        />
      </div>
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
          <p className="flex-wrap leading-4">
            {content ||
              `Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Animi, ipsum.`}
          </p>
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
          <div>
            <FontAwesomeIcon className="w-4 h-4 text-gray-500" icon={faShare} />
          </div>
        </div>
      </div>
    </div>
  );
}
