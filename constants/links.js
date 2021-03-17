import {
  faCoffee,
  faHome,
  faHouseUser,
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
    default_icon: faCoffee,
    active_icon: faCoffee,
    url: "/explore",
  },
  {
    text: "Notifications",
    id: "Notifications",
    default_icon: faCoffee,
    active_icon: faCoffee,
    url: "/notifications",
  },
  {
    text: "Messages",
    id: "Messages",
    default_icon: faCoffee,
    active_icon: faCoffee,
    url: "/messages",
  },
  {
    text: "Bookmarks",
    id: "Bookmarks",
    default_icon: faCoffee,
    active_icon: faCoffee,
    url: "/bookmarks",
  },
  {
    text: "Lists",
    id: "Lists",
    default_icon: faCoffee,
    active_icon: faCoffee,
    url: "/lists",
  },
  {
    text: "Profile",
    id: "Profile",
    default_icon: faCoffee,
    active_icon: faCoffee,
    url: "/profile",
  },
  {
    text: "More",
    id: "More",
    default_icon: faCoffee,
    active_icon: faCoffee,
    url: "/more",
  },
];

export default links;
