import Register from "views/examples/Register";
import Manual from "views/examples/Manual.js";
import Questions from "views/examples/Questions.js";
import Roles from "views/examples/Roles.js";
import Home from "views/examples/Home";
import Questionnaire from "views/examples/Questionnaire.js";
import Reports from "views/examples/Reports";
import Data from "views/examples/data";

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
    path: "/question",
    name: "Questions",
    icon: "ni ni-chat-round text-green",
    component: <Questions />,
    layout: "/admin",
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "ni ni-chart-bar-32 text-blue",
    component: <Reports/>,
    layout: "/admin",
  },
  {
    path: "/data",
    // name: "Roles",
    // icon: "ni ni-settings-gear-65 text-purple",
    component: <Data />,
    layout: "/admin",
  },
  {
    path: "/questionnaire",
    component: <Questionnaire />,
    layout: "/admin",
  }
];

export default routes;
