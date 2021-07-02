import React, { useState } from "react";

export default function index(props) {
  const childrenTabs = React.Children.toArray(props.children);
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
        {tabs.map((each, index) => (
          <h3
            key={each.props.name + index}
            className={
              "py-2 px-3 text-sm hover:bg-green-600 cursor-pointer  text-center  w-full block hover:bg-opacity-10 text-gray-200 hover:text-green-400 " +
              (current === index && " text-green-400 border-b border-green-400")
            }
            onClick={() => setCurrent(index)}
          >
            {each.props.name || "PlsAddNameProp"}
          </h3>
        ))}
      </div>
      <div>{tabs[current] || "Please add children"}</div>
    </div>
  );
}
