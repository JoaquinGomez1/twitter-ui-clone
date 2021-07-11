import { ReactChildren } from "react";

interface IPageViewContainerProps {
  children: ReactChildren;
}

export default function index(props: IPageViewContainerProps) {
  return (
    <div
      className="flex flex-grow flex-col px-1 md:max-w-xl overflow-hidden"
      {...props}
    >
      {props.children}
    </div>
  );
}
