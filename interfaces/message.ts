import { IUser } from "./user";

export interface IMessage extends IUser {
  id?: string | number;
  date: string;
  content: string;
}
