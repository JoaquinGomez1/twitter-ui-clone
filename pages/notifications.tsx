import NotificationBox from "../components/NotificationBox";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import TweetBoxHeader from "../components/TweetBoxHeader";

const dummyTestData = [
  {
    actionName: "like",
    content: "lorem test",
    authors: [
      {
        author_name: "A test user who i dont know",
        author_tag: "juan",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      },
    ],
  },

  {
    actionName: "retweet",
    content: "lorem test retweet",
    authors: [
      {
        author_name: "someone",
        author_tag: "juan",
        avatar: undefined,
      },
      {
        author_name: "another one",
        author_tag: "juan",
        avatar: "https://randomuser.me/api/portraits/men/53.jpg",
      },
      {
        author_name: "another someone",
        author_tag: "juan",
        avatar: "https://randomuser.me/api/portraits/men/51.jpg",
      },
    ],
  },
];

export default function notifications() {
  return (
    <div className="border-r border-l border-gray-600 ">
      <TweetBoxHeader
        content="Notifications"
        icon={faCog}
        iconClassNames="text-green-500 h-4 w-4"
      />

      {dummyTestData.map(({ actionName, content, authors }: any, i) => (
        <NotificationBox
          key={content + i}
          {...{ authors, content, actionName }}
        />
      ))}
    </div>
  );
}
