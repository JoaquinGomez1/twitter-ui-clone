import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "..";
import defaultImages from "../../constants/defaultImages";
import { useUi } from "../../context/ui";

export default function index() {
  const {
    uiFunctions: { toggleDrawer },
  } = useUi();
  return (
    <div className="p-4 w-full ">
      <div className="flex justify-between items-center font-bold mb-10">
        <h4>Account Info</h4>
        <div onClick={toggleDrawer}>
          <FontAwesomeIcon className="w-6 h-6 font-thin" icon={faTimes} />
        </div>
      </div>
      <Avatar
        containerClassName="w-10 h-10 mb-6"
        src={defaultImages.thumbnail}
      />
      <div className="leading-4 mb-6">
        <p>
          <b>UserName</b>
        </p>
        <p className=" text-gray-400">@username</p>
      </div>
      <div className="flex items-center space-x-6">
        <p className="text-gray-400">
          <span className="font-bold text-white">420</span> followers
        </p>
        <p className="text-gray-400">
          <span className="font-bold text-white">69</span> following
        </p>
      </div>
    </div>
  );
}
