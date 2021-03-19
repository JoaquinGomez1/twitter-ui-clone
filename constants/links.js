import {
  faCoffee,
  faHome,
  faHouseUser,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const links = [
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
    default_icon: faHashtag,
    active_icon: faHashtag,
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
