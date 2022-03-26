import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Message, SearchBar, TweetBoxHeader } from "../components";
import { IMessage } from "../interfaces/message";
import formatAsMessage from "../libs/formatAsMessage";

export default function messages() {
  const [messagesObjs, setMessagesObjs] = useState<IMessage[] | undefined>();

  const fetchData = async () => {
    const maxResults = 15;

    const url = `https://randomuser.me/api/?results=${maxResults}`;
    const req = await fetch(url);
    const res: any = await req.json();

    // Format result
    const result: IMessage[] = res.map((each: any) => formatAsMessage(each));

    setMessagesObjs(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {messagesObjs?.map((message) => (
          <Message key={message.id} {...{ message }} />
        ))}
      </div>
    </div>
  );
}
