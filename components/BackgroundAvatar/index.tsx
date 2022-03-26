import defaultImages from "../../constants/defaultImages";

export default function BackgroundAvatar({ className, backgroundImage }: any) {
  return (
    <div
      className={"circular " + (className || "")}
      style={{
        backgroundImage: backgroundImage || defaultImages.profileBackground,
      }}
    ></div>
  );
}
