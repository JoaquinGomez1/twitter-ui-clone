export default function index(props) {
  return (
    <div
      className="flex flex-grow flex-col px-4 max-w-xl sm:ml-16 lg:ml-52"
      {...props}
    >
      {props.children}
    </div>
  );
}
