import Dashboard from "views/Dashboard.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import UserProfile from "views/UserProfile.jsx";

var routes = [
  // {
  //   path: "/map",
  //   name: "Map",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin"
  // },
  {
    path: "/user-profile",
    name: "See your Bachuas",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Activity",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  }
];
export default routes;
