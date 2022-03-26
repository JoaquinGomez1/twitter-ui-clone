import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ILink {
  url: string;
  active_icon: IconProp;
  default_icon: IconProp;
  text: string;
  id: string | number;
}
