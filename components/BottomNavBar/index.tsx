import { useRouter } from "next/router";
import { CustomLink } from "..";
import mobileLinks from "../../constants/mobileLinks";

export default function index() {
  const router = useRouter();
  const currentLink = router.pathname;

  return (
    <div className="sm:hidden flex w-full justify-around items-center bg-gray-800 border-t border-gray-600 text-gray-200 py-2 z-30 fixed bottom-0 space-y-1 ">
      {mobileLinks.map((link) => {
        const isActive = currentLink === link.url;
        return <CustomLink key={link.url} isActive={isActive} link={link} />;
      })}
    </div>
  );
}
