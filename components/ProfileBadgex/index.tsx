import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileBadge({ className, icon, children }: any) {
  return (
    <div
      className={
        "text-gray-400  flex space-x-2 items-center text-sm " +
        (className || "")
      }
    >
      <FontAwesomeIcon className="w-4 h-4" size="sm" icon={icon} />

      {children}
    </div>
  );
}
