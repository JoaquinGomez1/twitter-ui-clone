import { links } from "../../constants";
import { useRouter } from "next/router";
import CustomLink from "../CustomLink";
import TwitterSvg from "../TwitterSvg";

export default function LeftNavbar() {
  const router = useRouter();
  const currentLink = router.pathname;

  return (
    <div>
      {/* ↑ This div is necessary for the position sticky to work  */}
      <div className="hidden sm:flex flex-col lg:w-48 text-gray-200 py-2 z-50 sticky top-1 space-y-1 ">
        <TwitterSvg />
        {links.map((link) => {
          const isActive = currentLink === link.url;
          return <CustomLink key={link.url} isActive={isActive} link={link} />;
        })}
        <button className="px-4 py-3 text-white my-6 bg-green-400 hover:bg-green-500 rounded-full focus:outline-none hidden lg:block ">
          Tweet
        </button>
      </div>
    </div>
  );
}
