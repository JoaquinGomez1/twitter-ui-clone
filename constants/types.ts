import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ITweet extends IUser {
  content: string;
  date?: Date | string;
  likes: number;
  comments: number;
  retweets: number;
  images?: IAvatar | undefined;
  avatar?: string;
}

export interface IAvatar {
  large: string;
  thumbnail: string;
}

export interface IUser {
  author_name: string;
  author_tag: string;
  avatar?: string;
}

export interface ITrending {
  content: string;
  tweets: number;
  field: string;
  trendingLocation: string;
  id?: number | string;
}

export interface ILink {
  url: string;
  active_icon: IconProp;
  default_icon: IconProp;
  text: string;
  id: string | number;
}

export interface IMessage extends IUser {
  id?: string | number;
  date: string;
  content: string;
}
