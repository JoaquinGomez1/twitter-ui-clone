import { AvatarSkeleton, BarSkeleton } from "..";

export default function index() {
  return (
    <div className="px-4 py-2 border-t border-r border-l border-gray-100 border-opacity-20">
      <div className="flex animate-pulse transition-all w-full">
        <AvatarSkeleton />
        <div className="flex flex-col px-4 w-full space-y-3">
          <div className="flex items-center justify-between sm:justify-start space-x-4">
            <div className="flex flex-col space-y-3 justify-start sm:flex-row sm:justify-center sm:items-center sm:space-x-4 ">
              <div className="w-24">
                <BarSkeleton /> {/*Username*/}
              </div>
              <div className="w-12">
                <BarSkeleton /> {/*@UserTag*/}
              </div>
            </div>
            <div className="w-16">
              <BarSkeleton /> {/*Date field*/}
            </div>
          </div>

          <div className="flex flex-grow text-gray-200">
            <div className="w-full">
              <BarSkeleton className="h-20" /> {/*Tweet content*/}
            </div>
          </div>
          <div className="flex justify-between mt-3">
            {/*Tweet likes and interactions*/}
            <div className="w-6">
              <BarSkeleton className="rounded-md" />
            </div>
            <div className="w-6">
              <BarSkeleton className="rounded-md" />
            </div>
            <div className="w-6">
              <BarSkeleton className="rounded-md" />
            </div>
            <div className="w-6">
              <BarSkeleton className="rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
