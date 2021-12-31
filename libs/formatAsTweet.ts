// Returns a 'tweet' like object

import { ITweet } from "../constants/types";
import { ApiResult } from "../interfaces/apiResponse";

export default function formatAsTweet(object: ApiResult): ITweet {
  return {
    author_id: `${object?.id?.value}${Math.random()}`,
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
