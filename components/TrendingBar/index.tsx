import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { ITrending } from "../../interfaces/trending";

interface ITrendingBarProps {
  className?: string;
  trending: ITrending;
}

export default function index({
  className,
  trending,
  ...rest
}: ITrendingBarProps) {
  return (
    <div
      {...rest}
      className={
        "flex flex-col w-full border-t border-gray-100 border-opacity-20 px-4 py-2 " +
        className
      }
    >
      <div className="flex justify-between items-center capitalize">
        <p className="text-gray-500 text-xs">{trending.field}</p>
        <FontAwesomeIcon className="h-4 w-4" icon={faEllipsisH} />
      </div>
      <div>
        <h3 className="font-bold text-md">{trending.content}</h3>
      </div>
      <div>
        <p className="text-gray-500 text-xs">{trending.tweets} Tweets</p>
      </div>
    </div>
  );
}
