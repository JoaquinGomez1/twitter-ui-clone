import { faCog } from "@fortawesome/free-solid-svg-icons";
import { Message, SearchBar, TweetBoxHeader } from "../components";
import { messages as messagesObjs } from "../constants/";

export default function messages() {
  return (
    <div>
      <TweetBoxHeader
        content="Messages"
        icon={faCog}
        iconClassNames="text-green-400 text-sm"
      />
      <div className="border-l border-r border-b border-gray-600 py-2 px-3">
        <SearchBar placeholder="Search for people and groups" />
      </div>

      <div className="border-l border-r border-gray-600">
        {messagesObjs.map((message) => (
          <Message key={message.id} {...{ message }} />
        ))}
      </div>
    </div>
  );
}
