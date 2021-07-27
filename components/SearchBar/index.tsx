import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TextInput from "../TextInput";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ISearchBarProps {
  placeholder?: string;
  icon?: IconProp;
}

export default function index(props: ISearchBarProps) {
  return (
    <div
      {...props}
      className="flex items-center rounded-full px-4 py-2 bg-gray-700"
    >
      <FontAwesomeIcon
        className="w-6 h-6 opacity-40 "
        icon={props.icon || faSearch}
      />
      <TextInput
        type="text"
        className="bg-transparent ml-4 text-gray-400 w-full text-sm"
        placeholder={props.placeholder}
      />
    </div>
  );
}
