import {
  faHome,
  faHouseUser,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsisH,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { ILink } from "../interfaces/link";

const links: ILink[] = [
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
  {
    text: "Bookmarks",
    id: "Bookmarks",
    default_icon: faBookmark,
    active_icon: faBookmark,
    url: "/bookmarks",
  },
  {
    text: "Lists",
    id: "Lists",
    default_icon: faList,
    active_icon: faList,
    url: "/lists",
  },
  {
    text: "Profile",
    id: "Profile",
    default_icon: faUser,
    active_icon: faUser,
    url: "/profile",
  },
  {
    text: "More",
    id: "More",
    default_icon: faEllipsisH,
    active_icon: faEllipsisH,
    url: "/more",
  },
];

export default links;
