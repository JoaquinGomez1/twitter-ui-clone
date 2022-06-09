import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Message, SearchBar, TweetBoxHeader } from "../components";
import { MessageSkeleton } from "../components/Message";
import useFetch from "../hooks/useFetch";
import { IMessage } from "../interfaces/message";
import formatAsMessage from "../libs/formatAsMessage";

export default function messages() {
  const [messagesObjs, setMessagesObjs] = useState<IMessage[] | undefined>();
  const maxResults = 15;

  const { data, isLoading } = useFetch<any>(
    `https://randomuser.me/api/?results=${maxResults}`
  );

  useEffect(function formatMessage(){
    // Format result
    const result: IMessage[] =
      data?.results?.map((each: any) => formatAsMessage(each)) || [];

    setMessagesObjs(result);
  }, [data]);

  return (
    <div>
      <TweetBoxHeader
        content="Messages"
        icon={faCog}
        iconClassNames="text-green-400 text-sm"
      />

      <header className="border-l border-r border-b border-gray-600 py-2 px-3">
        <SearchBar placeholder="Search for people and groups" />
      </header>

      <section className="border-l border-r border-gray-600">
        {isLoading &&
          [...Array(10)].map((_, idx) => <MessageSkeleton key={idx} />)}
        {messagesObjs?.map((message) => (
          <Message key={message.id} {...{ message }} />
        ))}
      </section>
    </div>
  );
}
