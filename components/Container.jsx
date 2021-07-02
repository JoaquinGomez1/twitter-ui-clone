export default function Container({ children, className, rest }) {
  return (
    <div
      className={
        "max-w-6xl md:px-4 flex justify-between mx-auto relative " + className
      }
      {...rest}
    >
      {children}
    </div>
  );
}
