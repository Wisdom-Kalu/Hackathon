import Register from "views/examples/Register";
import Manual from "views/examples/Manual.js";
import Questions from "views/examples/Questions.js";
import Roles from "views/examples/Roles.js";
import Home from "views/examples/Home";

// test for push

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-shop text-blue",
    component: <Home />,
    layout: "/admin",
  },
  {
    path: "/manual",
    name: "Manual",
    icon: "ni ni-book-bookmark text-orange",
    component: <Manual />,
    layout: "/admin",
  },
  {
    path: "/questions",
    name: "Questions",
    icon: "ni ni-chat-round text-green",
    component: <Questions />,
    layout: "/admin",
  },
  {
    path: "/roles",
    name: "Roles",
    icon: "ni ni-settings-gear-65 text-purple",
    component: <Roles />,
    layout: "/admin",
  },
];

export default routes;
