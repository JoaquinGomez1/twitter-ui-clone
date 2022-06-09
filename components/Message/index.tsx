import { Avatar, AvatarSkeleton } from "..";
import { IMessage } from "../../interfaces/message";

interface IMessageProps {
  message: IMessage;
}

export default function index({ message }: IMessageProps) {
  return (
    <div className="p-3 border-b border-gray-600 flex hover:bg-gray-700 cursor-pointer w-full">
      <div className="mr-3">
        <Avatar src={message?.avatar!} />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex  w-full justify-between items-center ">
          <div className="flex flex-col md:flex-row space-x-1 items-center">
            <p className="text-white font-bold text-md">
              {message.author_name}
            </p>
            <p className="text-gray-400 text-sm"> @{message.author_tag}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">{message.date}</p>
          </div>
        </div>
        <p className="text-gray-400 truncate w-3/4">{message.content}</p>
      </div>
    </div>
  );
}

export const MessageSkeleton = () => {
  return (
    <div className="p-3 border-b border-gray-600 flex hover:bg-gray-700 cursor-pointer">
      <div className="mr-3">
        <AvatarSkeleton />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between items-center ">
          <div className="flex space-x-1 items-center">
            <div className="bg-gray-600 font-bold text-md h-4 w-24 animate-pulse"></div>
            <div className="bg-gray-700 text-sm h-4 w-16 animate-pulse" />
          </div>
          <div>
            <div className="bg-gray-600 w-30 text-sm h-4 w-12 animate-pulse"></div>
          </div>
        </div>
        <div className="bg-gray-600 mt-2 truncate w-1/2 h-8 animate-pulse"></div>
      </div>
    </div>
  );
};
