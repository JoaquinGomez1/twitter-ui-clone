export default function index(props: any) {
  return (
    <input
      {...props}
      type={props.text}
      placeholder={props.placeholder}
      className={
        "bg-transparent resize-none focus:outline-none text-gray-200 " +
        props.className
      }
    />
  );
}
