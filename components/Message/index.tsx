import { Avatar } from "..";
import { IMessage } from "../../constants/types";

interface IMessageProps {
  message: IMessage;
}

export default function index({ message }: IMessageProps) {
  return (
    <div className="p-3 border-b border-gray-600 flex hover:bg-gray-700 cursor-pointer">
      <div className="mr-3">
        <Avatar src={message?.avatar} />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1 items-center">
            <p className="text-white font-bold text-md">
              {message.author_name}
            </p>
            <p className="text-gray-400 text-sm">@{message.author_tag}</p>
          </div>
          <div className="text-gray-500 text-sm">{message.date}</div>
        </div>
        <p className="text-gray-400 truncate w-1/2">{message.content}</p>
      </div>
    </div>
  );
}
