import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import TextInput from "../TextInput";

const news = [
  {
    content: "Lorem, ipsum dolor",
    tweets: 2103,
    trendingLocation: "Argentina",
    field: "politics",
  },
  {
    content: "Lorem, ipsum dolor",
    tweets: 2103,
    trendingLocation: "Argentina",
    field: "politics",
  },
  {
    content: "Lorem, ipsum dolor",
    tweets: 2103,
    trendingLocation: "Argentina",
    field: "politics",
  },
  {
    content: "Lorem, ipsum dolor",
    tweets: 2103,
    trendingLocation: "Argentina",
    field: "politics",
  },
];

export default function index() {
  return (
    <div className="flex flex-col w-72 py-1 text-gray-200 ">
      <div className="flex items-center justify-between rounded-full px-4 py-2 bg-gray-700">
        <FontAwesomeIcon className="w-6 h-6 opacity-40" icon={faSearch} />
        <TextInput type="text" className="bg-transparent ml-2 text-gray-400" />
      </div>

      <div className="rounded-2xl my-4 bg-gray-900 bg-opacity-10">
        <h2 className="text-2xl text-white px-4 py-4">What's Happening</h2>
        {news.map((trending, index) => (
          <div
            className={
              "flex flex-col w-full border-t border-gray-100 border-opacity-20 px-4 py-2 " +
              (index + 1 === news.length ? "border-b" : "")
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
        ))}
        <p className="p-4 text-green-400 text-sm hover:bg-gray-700 cursor-pointer rounded-b-3xl hover:text-green-300">
          Show more
        </p>
      </div>
    </div>
  );
}
