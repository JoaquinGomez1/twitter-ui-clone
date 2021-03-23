import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InteractionButton({
  icon,
  count = "",
  iconClassName = "",
  containerClassName = "",
  textClassName = "",
  ...rest
}) {
  console.log("p-4 rounded-full bg-green-400 text-gray-500 " + iconClassName);
  return (
    <div
      className={"flex items-center space-x-2 " + containerClassName}
      {...rest}
    >
      <div
        className={
          "items-center cursor-pointer justify-center rounded-full text-gray-500 p-2 hover:bg-opacity-10 " +
          iconClassName
        }
      >
        <FontAwesomeIcon className={"h-4 w-4"} icon={icon} />
      </div>
      <p className={"text-gray-500 " + textClassName}>{count}</p>
    </div>
  );
}
