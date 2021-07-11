import { faHeart, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defaultImages from "../../constants/defaultImages";
import { ITweet } from "../../constants/types";

interface INotificationBoxProps {
  authors: ITweet[];
  actionName: string;
  content: string;
}

const actionsIcons = {
  like: {
    name: "fas fa-heart",
    icon: faHeart,
    color: "text-pink-600",
  },
  retweet: {
    icon: faRetweet,
    name: "fas fa-retweet",
    color: "text-green-400",
  },
};

export default function index({
  authors,
  actionName,
  content,
}: INotificationBoxProps) {
  const action = actionsIcons[actionName];
  return (
    <div className="w-full flex  border-b border-gray-600 p-4 hover:bg-gray-700 cursor-pointer">
      {/* Right side of the notification box */}
      <div className="w-8 h-full mx-2 my-2">
        <FontAwesomeIcon
          className={`${action?.color} w-6`}
          icon={action?.icon}
        />
      </div>

      {/* Left side of the notification box */}
      <div>
        <div className="flex items-center space-x-1">
          {authors.map((author) => (
            <img
              src={author?.avatar || defaultImages?.thumbnail}
              className="rounded-full w-8 h-9"
            />
          ))}
        </div>
        <div className="text-white">
          <p>
            <span className="font-bold">{authors[0]?.author_name}</span>
            {authors.length > 1 && ` and ${authors.length - 1} others `}
            {` ${actionName} your tweet`}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            {content ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nihil"}
          </p>
        </div>
      </div>
    </div>
  );
}
