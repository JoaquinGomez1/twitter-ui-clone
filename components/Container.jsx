export default function Container({ children, className, rest }) {
  return (
    <div className={"max-w-6xl p-2 px-4 mx-auto " + className} {...rest}>
      {children}
    </div>
  );
}
