import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { Tweet, TweetBoxHeader, TweetSkeleton } from "../../components";
import useFetch from "../../hooks/useFetch";
import { ITweet } from "../../interfaces/tweets";

export default function TweetDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useFetch<ITweet>(`/api/tweets/${id}`);

  return (
    <div className="relative">
      <TweetBoxHeader icon={faMeteor} content={`Tweet detail`} />
      <div className="bg-gray-800">
        {isLoading && data ? <TweetSkeleton /> : <Tweet tweet={data!} />}
      </div>
    </div>
  );
}
