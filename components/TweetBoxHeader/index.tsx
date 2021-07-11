import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
  return (
    <div className="text-white sticky top-0 bg-gray-800 font-bold flex justify-between items-center border-l border-b border-r px-4 border-solid border-opacity-20 border-gray-100 py-2">
      <h2>{content}</h2>
      <FontAwesomeIcon className={`h-6 w-6 ${iconClassNames} `} icon={icon} />
    </div>
  );
}
