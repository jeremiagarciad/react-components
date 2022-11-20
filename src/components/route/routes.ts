import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

type TMenuItems = {
  name: string;
  icon: JSX.Element;
  items: string[] | string;
};

export const menuItems = [
  {
    name: "Apps",
    icon: "apps",
  },
  {
    name: "Subscriptions",
    icon: "subscriptions",
  },
  {
    name: "Library",
    icon: "video_library",
  },
  {
    name: "Explore",
    icon: "explore",
    items: ["Movies", "Live", "Gaming", "News"],
  },
  {
    name: "Settings",
    icon: "settings",
    items: ["History", "Help", "Feedback", "Reports"],
  },
  {
    name: "Trending",
    icon: "mode_heat",
  },
  {
    name: "Music",
    icon: "music_note",
  },
  {
    name: "Watch Later",
    icon: "schedule",
  },
];

// IoAppsOutline;
