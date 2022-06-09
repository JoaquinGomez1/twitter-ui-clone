import { IAvatar } from "./avatar";
import { IUser } from "./user";

export interface ITweet extends IUser {
  id: string;
  author_id?: string | number;
  content: string;
  date?: Date | string;
  likes: number;
  comments: number;
  retweets: number;
  images?: IAvatar | undefined;
  avatar?: string;
  originalContent?: true;
}
