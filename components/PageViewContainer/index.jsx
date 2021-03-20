export default function index(props) {
  return (
    <div
      className="flex flex-grow flex-col px-4 sm:max-w-xl xs:ml-12 lg:ml-52"
      {...props}
    >
      {props.children}
    </div>
  );
}
