import Searchbar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ExploreTweets from "../components/ExploreTweets";

export default function explore() {
  return (
    <div className="px-3 border-l border-r border-gray-100 border-opacity-20">
      <div className="py-1">
        <Searchbar />
      </div>

      <Tabs className="mt-4">
        <ExploreTweets name="epxlore1" />
        <ExploreTweets />
        <ExploreTweets name="epxlore3" />
        <ExploreTweets name="epxlore4" />
      </Tabs>
    </div>
  );
}
