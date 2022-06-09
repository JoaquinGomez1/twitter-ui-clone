import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * Helper hook that let's you move your user's focus whenever the input value is empty
 * This also let's you run a function whenever the ctrl + enter key is pressed
 */
export default function useFormInput(
  onSend: (e: KeyboardEvent) => void
): [string, Dispatch<SetStateAction<string>>, RefObject<HTMLTextAreaElement>] {
  const [value, setValue] = useState<string>("");
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    document.addEventListener("keypress", onSend);
    if (value === "") {
      ref?.current?.focus();
    }
    return () => document.removeEventListener("keypress", onSend);
  }, [value]);

  return [value, setValue, ref];
}
