import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InteractionButtonProps {
  icon: IconProp;
  count: string | number;
  iconClassName?: string;
  containerClassName?: string;
  textClassName?: string;
  onClick?: (param: any) => void;
}

export default function InteractionButton({
  icon,
  count = "",
  iconClassName = "",
  containerClassName = "",
  textClassName = "",
  ...rest
}: InteractionButtonProps) {
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
