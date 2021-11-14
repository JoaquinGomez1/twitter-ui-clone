import { PropsWithChildren } from "react";

interface IPageViewContainerProps {}

export default function index(
  props: PropsWithChildren<IPageViewContainerProps>
) {
  return (
    <div
      className="flex flex-grow flex-col px-1 md:max-w-xl overflow-hidden"
      {...props}
    >
      {props.children}
    </div>
  );
}
