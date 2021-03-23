// Returns a 'tweet' like object

export default function formatAsTweet(object) {
  const objectFields = [
    "author_id",
    "images",
    "author_tag",
    "author_name",
    "comments",
    "likes",
    "retweets",
    "content",
  ];

  return {
    author_id: `${object.id.value}${Math.random()}`,
    images: {
      large: object.picture?.large,
      thumbnail: object.picture?.thumbnail,
    },
    author_tag: object.login?.username,
    author_name: `${object.name?.first}_${object.name?.last}`,
    comments: Math.floor(Math.random() * 100),
    likes: Math.floor(Math.random() * 100),
    retweets: Math.floor(Math.random() * 100),
  };
}
