export default function index(props) {
  return (
    <div
      className={
        "flex items-center justify-between rounded-full px-4 py-2 bg-gray-700 " +
        props.className
      }
      {...props}
    >
      <FontAwesomeIcon
        className={"w-6 h-6 opacity-40 " + props.iconName}
        icon={faSearch}
      />
      <TextInput
        type="text"
        className={"bg-transparent ml-2 text-gray-400 " + props.textInputName}
      />
    </div>
  );
}
