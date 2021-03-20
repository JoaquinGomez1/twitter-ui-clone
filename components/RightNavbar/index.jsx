import TrendingBar from "../TrendingBar";
import SearchBar from "../SearchBar";
import news from "../../constants/news";

export default function index() {
  return (
    <div className="hidden md:flex flex-col w-72 z-50 py-1 text-gray-200 absolute right-10 top-0 ">
      <SearchBar />

      <div className="rounded-2xl my-4 bg-gray-900 bg-opacity-10">
        <h2 className="text-2xl text-white px-4 py-4">What's Happening</h2>
        {news.map((trending, index) => {
          const isLastElement = index + 1 === news.length;
          return (
            <TrendingBar
              key={trending.id}
              className={isLastElement ? "border-b" : ""}
              trending={trending}
            />
          );
        })}
        <p className="p-4 text-green-400 text-sm hover:bg-gray-700 cursor-pointer rounded-b-3xl hover:text-green-300 select-none">
          Show more
        </p>
      </div>
    </div>
  );
}
