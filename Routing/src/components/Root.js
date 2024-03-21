import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from "./Root.module.css";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
