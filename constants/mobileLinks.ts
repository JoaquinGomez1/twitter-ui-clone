import {
  faHome,
  faHouseUser,
  faBell,
  faEnvelope,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { ILink } from "../interfaces/link";

const mobileLinks: ILink[] = [
  {
    text: "Home",
    id: "Home",
    default_icon: faHome,
    active_icon: faHouseUser,
    url: "/",
  },
  {
    text: "Explore",
    id: "Explore",
    default_icon: faSearch,
    active_icon: faSearch,
    url: "/explore",
  },
  {
    text: "Notifications",
    id: "Notifications",
    default_icon: faBell,
    active_icon: faBell,
    url: "/notifications",
  },
  {
    text: "Messages",
    id: "Messages",
    default_icon: faEnvelope,
    active_icon: faEnvelope,
    url: "/messages",
  },
];

export default mobileLinks;
