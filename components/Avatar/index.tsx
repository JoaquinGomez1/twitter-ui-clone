import defaultImages from "../../constants/defaultImages";

interface IAvatarProps {
  src: string;
  containerClassName?: string;
  imgClassName?: string;
}

export default function index({
  src,
  imgClassName,
  containerClassName,
}: IAvatarProps) {
  return (
    <div
      className={
        "w-9 h-8 sm:h-11 sm:w-12  bg-red-400 overflow-hidden mt-1 rounded-full " +
        containerClassName
      }
    >
      <img
        className={"my-auto h-full w-full object-fit " + imgClassName}
        src={src || defaultImages.thumbnail}
        alt={"Avatar pic"}
      />
    </div>
  );
}
