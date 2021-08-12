import news from "../../constants/news";
import { ITrending } from "../../constants/types";
import TrendingBar from "../TrendingBar";
import Image from "next/image";

interface IExploreTweetsProps {
  image: string;
  trendings: ITrending[];
  headerTitle: string;
}

const defaultImage =
  "https://deadline.com/wp-content/uploads/2020/05/image002-2-e1590363951158.jpg?w=681&h=383&crop=1";

export default function index({
  image,
  trendings,
  headerTitle,
}: IExploreTweetsProps) {
  const data = trendings || news;
  return (
    <div>
      <div className="relative w-full h-full">
        <div className="bg-gradient-to-t from-black w-full h-24 absolute bottom-0 left-0 z-20" />
        <div className="bottom-10 z-40 left-4 absolute">
          <h1 className="text-2xl text-gray-200 font-bold">
            {headerTitle || "Some serious and important news"}
          </h1>
        </div>
        <img
          className="w-full h-72 min-h-full "
          src={image || defaultImage}
          alt=""
        />
      </div>

      <div className="h-2 w-full bg-gray-700 bg-opacity-60 border border-gray-100 border-opacity-20" />

      <div className="w-full flex flex-col">
        {data.map((each) => {
          return <TrendingBar key={each.id} trending={each} />;
        })}
      </div>
    </div>
  );
}
