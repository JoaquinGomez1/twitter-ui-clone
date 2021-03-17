import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

export default function index({ content }) {
  return (
    <div className="text-white font-bold flex justify-between items-center border px-2 border-solid border-opacity-20 border-gray-100 py-2">
      <h2>{content || "Home"}</h2>
      <FontAwesomeIcon className="h-6 w-6" icon={faMeteor} />
    </div>
  );
}
