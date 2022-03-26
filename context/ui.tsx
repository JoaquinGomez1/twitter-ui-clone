import { createContext, useState, useContext, PropsWithoutRef } from "react";

interface UiProps {}

interface UiState {
  isDrawerOpen: boolean;
  uiFunctions: UiFunctions;
}

interface UiFunctions {
  toggleDrawer: () => void;
  closeDrawer: () => void;
}

export const UiContext = createContext<UiState>(undefined!);

export default function UiProvider(props: PropsWithoutRef<UiProps>) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  /**This is to encapsulate all the drawer's behavior in a single place */
  const uiFunctions: UiFunctions = {
    toggleDrawer: () => {
      setIsDrawerOpen(!isDrawerOpen);
    },
    closeDrawer: () => {
      setIsDrawerOpen(false);
    },
  };

  return (
    <UiContext.Provider value={{ isDrawerOpen, uiFunctions }} {...props} />
  );
}

export function useUi(): UiState {
  const context = useContext(UiContext);
  if (!context) throw new Error("Use this inside a Ui Provider");

  return context;
}
