import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";
import { UserManegement } from "../components/pages/UserManegement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_manegement",
    exact: false,
    children: <UserManegement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
