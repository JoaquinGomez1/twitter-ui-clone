interface AvatarSkeletonProps {
  containerClassName?: string;
  className?: string;
}

export default function index({
  containerClassName,
  className,
}: AvatarSkeletonProps) {
  return (
    <div
      className={
        "w-9 h-8 sm:h-11 sm:w-12 bg-gray-600 overflow-hidden mt-1 rounded-full " +
        containerClassName
      }
    >
      <div className={"my-auto h-full w-full object-fit  " + className} />
    </div>
  );
}
