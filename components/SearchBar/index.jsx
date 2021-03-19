import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TextInput from "../TextInput";

export default function index(props) {
  return (
    <div
      {...props}
      className="flex items-center rounded-full px-4 py-2 bg-gray-700"
    >
      <FontAwesomeIcon className="w-6 h-6 opacity-40 " icon={faSearch} />
      <TextInput
        type="text"
        className="bg-transparent ml-4 text-gray-400 w-full text-sm"
        placeholder="Search twitter"
      />
    </div>
  );
}
