import { IMessage } from "../interfaces/message";

export default function formatAsMessage(object: any): IMessage {
  return {
    id: `${object?.id?.value}${Math.random()}`,
    author_name: object.name.first + object.name.last,
    author_tag: `${object.name.first}_${object.name.last}`,
    avatar: object.picture.thumbnail,
    content:
      "Voluptate ullamco tempor et aute quis deserunt dolor elit incididunt consectetur id magna.",
    date: new Date().toDateString(),
  };
}
