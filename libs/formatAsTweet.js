// Returns a 'tweet' like object

export default function formatAsTweet(object) {
  return {
    author_id: `${object.id.value}${Math.random()}`,
    images: {
      large: object.picture?.large,
      thumbnail: object.picture?.thumbnail,
    },
    author_tag: object.login?.username,
    author_name: `${object.name?.first}_${object.name?.last}`,
    comments: Math.floor(Math.random()),
    likes: Math.floor(Math.random()),
    retweets: Math.floor(Math.random()),
  };
}