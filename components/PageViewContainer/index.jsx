export default function index(props) {
  return (
    <div className="flex flex-grow flex-col px-1 sm:max-w-xl" {...props}>
      {props.children}
    </div>
  );
}
