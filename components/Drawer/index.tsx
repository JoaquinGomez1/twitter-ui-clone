import { PropsWithChildren } from "react";
import { useUi } from "../../context/ui";

interface DrawerProps {}

export default function index(props: PropsWithChildren<DrawerProps>) {
  const {
    isDrawerOpen,
    uiFunctions: { toggleDrawer },
  } = useUi();
  const stateClassName = isDrawerOpen
    ? "opacity-100"
    : " opacity-0 pointer-events-none";

  const backgroundClassName = isDrawerOpen ? "opacity-75" : "opacity-0";
  const foregroundClassName = isDrawerOpen
    ? "left-0 opacity-100"
    : "-left-96 opacity-0";

  return (
    <div
      className={
        "fixed inset-0 z-50 transition-all duration-300 ease-in h-full  " +
        stateClassName
      }
    >
      <div
        onClick={toggleDrawer}
        className={
          "z-40 bg-white absolute w-full inset-0 transition-all duration-200 ease-in " +
          backgroundClassName
        }
      ></div>
      <div
        className={
          "sm:hidden absolute bg-gray-800 w-3/4 top-0 bottom-0 z-50 transition-all duration-300 ease-in " +
          foregroundClassName
        }
      >
        {props.children}
      </div>
    </div>
  );
}
