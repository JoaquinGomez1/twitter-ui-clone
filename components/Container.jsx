export default function Container({ children, className, rest }) {
  return (
    <div
      className={"max-w-6xl md:px-4 mx-auto relative bg-red-400" + className}
      {...rest}
    >
      {children}
    </div>
  );
}
