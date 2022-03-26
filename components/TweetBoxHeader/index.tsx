import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Avatar } from "..";
import defaultImages from "../../constants/defaultImages";
import { useUi } from "../../context/ui";

interface ITweetBoxHeaderProps {
  content: string;
  icon: IconProp;
  iconClassNames?: string;
}

export default function index({
  content,
  icon,
  iconClassNames,
}: ITweetBoxHeaderProps) {
  const {
    uiFunctions: { toggleDrawer },
  } = useUi();

  return (
    <div className="text-white sticky top-0 bg-gray-800 font-bold flex justify-between items-center border-l border-b border-r px-4 border-solid border-opacity-20 border-gray-100 py-2">
      <div className="flex space-x-6 sm:space-x-0 items-center">
        <div className="cursor-pointer" onClick={toggleDrawer}>
          <Avatar
            containerClassName="sm:hidden"
            src={defaultImages.thumbnail}
          />
        </div>
        <h2>{content}</h2>
      </div>

      <FontAwesomeIcon className={`h-6 w-6 ${iconClassNames} `} icon={icon} />
    </div>
  );
}
