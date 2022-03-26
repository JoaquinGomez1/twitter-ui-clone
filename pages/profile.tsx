import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBirthdayCake,
  faCalendar,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import defaultImages from "../constants/defaultImages";
import { Avatar, Button, Tabs, Tweet, LoadingSpinner } from "../components";
import Link from "next/link";
import { useTweets } from "../context/tweets";
import { useRouter } from "next/router";
import { ITweet } from "../interfaces/tweets";
import BackgroundAvatar from "../components/BackgroundAvatar";
import ProfileBadge from "../components/ProfileBadgex";

export default function profile() {
  const { tweets, tweetsLoading } = useTweets();
  const router = useRouter();

  return (
    <div>
      <div className="flex h-12 justify-start border-l border-r border-gray-700">
        <div
          className="flex justify-center items-center px-5 w-20 cursor-pointer"
          onClick={router.back}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-green-400 w-4"
            size="xs"
          />
        </div>
        <div className="w-full grid items-center">
          <div className="grid items-center">
            <h2 className="font-bold text-lg">UserProfile</h2>
            <p className="text-gray-400 -mt-2 text-xs">20.2K Tweets</p>
          </div>
        </div>
      </div>

      <div className="min-h-110 w-full border border-gray-700 relative">
        <div className="relative w-full h-48">
          <BackgroundAvatar />
        </div>
        <div className="px-3 relative py-2">
          <Avatar
            containerClassName="w-28 h-28 sm:w-28 sm:h-28 absolute -top-16"
            src={defaultImages.thumbnail}
          />
          <div className="w-full flex justify-end">
            <Button>
              <p> Edit Profile </p>
            </Button>
          </div>
          <div className="flex flex-col justify-start pt-4">
            <h1 className="font-bold text-lg">UserProfile</h1>
            <p className="text-gray-400 text-sm -mt-1">@This_awesome_user</p>
          </div>
          <div className="my-2">
            <p className="text-gray-200 text-sm"> User's bio </p>
          </div>
          <div className="flex flex-wrap">
            <ProfileBadge icon={faLink} className="mr-4">
              <Link href={"#"}>
                <a className="text-green-300 text-sm tracking-tight">
                  https://twitter-ui-clone-gules.vercel.app
                </a>
              </Link>
            </ProfileBadge>
            <ProfileBadge className="mr-4" icon={faBirthdayCake}>
              <p>Born on January 1, 1990 </p>
            </ProfileBadge>
            <ProfileBadge icon={faCalendar}>
              <p>Joined on May 2021</p>
            </ProfileBadge>
          </div>
          <div className="flex space-x-6 mt-2">
            <p className="text-gray-400">
              <span className="text-white font-bold">420</span> Followers
            </p>
            <p className="text-gray-400">
              <span className="text-white font-bold">69</span> Following
            </p>
          </div>
        </div>

        <div className="min-h-screen">
          <Tabs>
            <TweetList
              name="Tweets"
              tweets={tweets}
              tweetsLoading={tweetsLoading}
            />
            <TweetList
              name="Tweets and Replies"
              tweets={tweets}
              tweetsLoading={tweetsLoading}
            />
            <TweetList
              name="Media"
              tweets={tweets}
              tweetsLoading={tweetsLoading}
            />
            <TweetList
              name="Likes"
              tweets={tweets}
              tweetsLoading={tweetsLoading}
            />
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function TweetList({ tweets, tweetsLoading }: any) {
  return (
    <div className="w-full">
      {tweetsLoading ? (
        <LoadingSpinner />
      ) : (
        tweets.map((tweet: ITweet) => (
          <Tweet key={tweet.author_id} tweet={tweet} />
        ))
      )}
    </div>
  );
}
