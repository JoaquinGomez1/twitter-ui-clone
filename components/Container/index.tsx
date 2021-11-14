import { PropsWithChildren, ReactChildren } from "react";

interface IContainerProps{
  className?: string;
}

export default function Container({
  children,
  className,
  ...rest
}: PropsWithChildren<IContainerProps>) {
  return (
    <div
      className={
        "max-w-6xl md:px-4 flex justify-between mx-auto relative " + className
      }
      {...rest}
    >
      {children}
    </div>
  );
}
