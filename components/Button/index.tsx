import React, { ReactChild, ReactChildren } from "react";

interface IButtonProps {
  className?: string;
  children: ReactChild;
}

const Button = React.forwardRef((props: IButtonProps) => {
  return (
    <button
      {...props}
      className={
        "px-4 py-2 bg-green-400 hover:bg-green-500 rounded-full text-white font-bold text-sm focus:outline-none " +
        props.className
      }
    >
      {props.children}
    </button>
  );
});

export default Button;
