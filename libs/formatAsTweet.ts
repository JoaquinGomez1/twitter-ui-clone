// Returns a 'tweet' like object

import { ApiResult } from "../interfaces/apiResponse";
import { ITweet } from "../interfaces/tweets";

export default function formatAsTweet(object: ApiResult): ITweet {
  console.log({ object });
  return {
    id: `${(Math.random() * 1000000).toFixed(0)}`,
    author_id: `${object?.id?.value}`,
    images: {
      large: object?.picture?.large,
      thumbnail: object?.picture?.thumbnail,
    },
    content:
      "Voluptate ullamco tempor et aute quis deserunt dolor elit incididunt consectetur id magna.",
    author_tag: object?.login?.username,
    author_name: `${object?.name?.first}_${object?.name?.last}`,
    comments: Math.floor(Math.random() * 100),
    likes: Math.floor(Math.random() * 100),
    retweets: Math.floor(Math.random() * 100),
  };
}
