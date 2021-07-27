import { ReactChildren } from "react";

interface IContainerProps {
  children: ReactChildren;
  className?: string;
}

export default function Container({
  children,
  className,
  ...rest
}: IContainerProps) {
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
