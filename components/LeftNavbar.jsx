import constants from "../constants";
const { links } = constants;
import { useRouter } from "next/router";
import CustomLink from "./CustomLink";
import TwitterSvg from "./TwitterSvg";

export default function LeftNavbar() {
  const router = useRouter();
  const currentLink = router.pathname;

  return (
    <div className="flex flex-col w-46 text-gray-200">
      <TwitterSvg />
      {links.map((link) => {
        const isActive = currentLink === link.url;
        return <CustomLink isActive={isActive} link={link} />;
      })}
      <button className="px-4 py-3 text-white my-6 bg-green-400 rounded-full focus:outline-none">
        Tweet
      </button>
    </div>
  );
}
