import Button from "../Button";
import Link from "next/link";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const { pathname } = router;
  const pageName = pathname?.substring(1, pathname.length); // removes the '/' at the beginning of the string
  return (
    <div className="py-2 h-screen">
      <div className="relative object-fit w-96 h-60">
        <div className="bg-gradient-to-t from-gray-900 to-gray-800 w-full h-full absolute bottom-0 left-0 z-20" />
        <div className="bottom-10 z-40 left-4 absolute">
          <h2 className="text-gray-500 font-bold text-xl capitalize">
            {pageName}
          </h2>
          <h1 className="text-3xl text-gray-200">Still in development</h1>
          <h4 className="text-gray-400 mb-4">
            This page is still in development and it will be ready soon
          </h4>
          <Link href="/">
            <a>
              <Button>Go Home</Button>
            </a>
          </Link>
        </div>
      </div>

      <div className="h-2 w-full bg-gray-700 bg-opacity-60 border border-gray-100 border-opacity-20" />
    </div>
  );
}
