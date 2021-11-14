import React, { ReactChildren, useState } from "react";

interface ITabsProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export default function index(props: ITabsProps) {
  const childrenTabs = React.Children.toArray(props.children).map((child) =>
    React.isValidElement(child) ? React.cloneElement(child) : undefined
  );
  const [current, setCurrent] = useState(0);
  const [tabs] = useState(childrenTabs);

  return (
    <div>
      <div
        {...props}
        className={
          "flex items-center overflow-x-auto w-full " + props.className
        }
      >
        {tabs.map(
          (each, index) =>
            each && (
              <h3
                key={each?.props.name + index}
                className={
                  "py-2 px-3 text-sm flex-grow hover:bg-green-600 cursor-pointer text-center block hover:bg-opacity-10 text-gray-200 hover:text-green-400 border-b-2 " +
                  (current === index &&
                    " text-green-400 font-bold border-green-400")
                }
                onClick={() => setCurrent(index)}
              >
                {each?.props.name || "PlsAddNameProp"}
              </h3>
            )
        )}
      </div>
      <div>{tabs[current] || "Please add children"}</div>
    </div>
  );
}
