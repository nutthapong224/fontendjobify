import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  AllJobs,
  Proflie,
  Stats,
  Admin,
  EditJob,
  DeleteJob,
} from "./page";

import { action as RegisterAction } from "./page/Register";
import { action as LoginAction } from "./page/Login";
import { loader as DashboardLoader } from "./page/DashboardLayout"; // Correct import
import { action as AddjobAction } from "./page/Addjob";
import { loader as AllpageLoader } from "./page/Alljobs";
import { action as EditAction } from "./page/EditJob";
import { loader as EditLoader } from "./page/EditJob";
import { action as DeleteAction } from "./page/Deletejob";
import { loader as AdminLoader } from "./page/Admin";
import { action as ProfileAction } from "./page/Profile";
import { loader as StatLoader } from "./page/Stats";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: RegisterAction,
      },
      {
        path: "login",
        element: <Login />,
        action: LoginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: DashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: AddjobAction,
          },
          {
            path: "add-job",
            element: <AddJob />,
            action: AddjobAction,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: AllpageLoader,
          },
          {
            path: "profile",
            element: <Proflie />, // Fixed spelling
            action: ProfileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: AdminLoader,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: StatLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: EditLoader,
            action: EditAction,
          },
          {
            path: "delete-job/:id",

            action: DeleteAction,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
