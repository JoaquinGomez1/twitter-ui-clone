import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InteractionButton({
  icon,
  count = "",
  iconClassName = "",
  containerClassName = "",
  textClassName = "",
  ...rest
}) {
  return (
    <div className={"flex items-center " + containerClassName} {...rest}>
      <div
        className={
          "items-center cursor-pointer justify-center rounded-full text-gray-500 p-2 hover:bg-opacity-10 " +
          iconClassName
        }
      >
        <FontAwesomeIcon className={"h-3 w-3 sm:h-4 sm:w-4"} icon={icon} />
      </div>
      <p className={"text-gray-500 text-sm " + textClassName}>{count}</p>
    </div>
  );
}
