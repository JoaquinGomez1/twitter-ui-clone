import Searchbar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ExploreTweets from "../components/ExploreTweets";

const images = [
  "https://media13.s-nbcnews.com/j/MSNBC/Components/Video/201912/year_end_thumb.focal-760x428.jpg",
  "https://static.www.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/league/purshxrynecxn5aueojh.jpg",
  "https://www.rnz.co.nz/assets/news/225465/eight_col_liv.jpg?1584391874",
];

export default function explore() {
  return (
    <div className=" border-l border-r w-full border-gray-100 border-opacity-20">
      <div className="py-1">
        <Searchbar />
      </div>

      <Tabs className="mt-4 px-0">
        <ExploreTweets name="epxlore1" />
        <ExploreTweets name="explore2" image={images[0]} />
        <ExploreTweets name="epxlore3" image={images[1]} />
        <ExploreTweets name="epxlore4" image={images[2]} />
      </Tabs>
    </div>
  );
}
