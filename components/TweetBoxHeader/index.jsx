import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

export default function index({ content, icon, iconClassNames }) {
  return (
    <div className="text-white sticky top-0 bg-gray-800 font-bold flex justify-between items-center border-l border-b border-r px-4 border-solid border-opacity-20 border-gray-100 py-2">
      <h2>{content || "Home"}</h2>
      <FontAwesomeIcon
        className={`h-6 w-6 ${iconClassNames} `}
        icon={icon || faMeteor}
      />
    </div>
  );
}
