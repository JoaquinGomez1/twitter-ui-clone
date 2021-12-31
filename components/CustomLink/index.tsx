import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ILink } from "../../constants/types";

interface ICustomLinkProps {
  link: ILink;
  isActive: boolean;
}

export default function CustomLink({ link, isActive }: ICustomLinkProps) {
  return (
    <Link href={link.url}>
      <a>
        <div
          className={
            "flex px-4 py-2 items-center space-x-5 rounded-full my-1 " +
            (!isActive
              ? "cursor-pointer hover:text-green-400 hover:bg-opacity-5 hover:bg-green-50"
              : "text-green-400")
          }
        >
          <div>
            <FontAwesomeIcon
              className="object-fit w-6 h-6 align-bottom text-center"
              icon={isActive ? link.active_icon : link.default_icon}
            />
          </div>

          <h1 className="text-lg font-bold hidden lg:block">{link.text}</h1>
        </div>
      </a>
    </Link>
  );
}
