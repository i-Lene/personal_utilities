import { Outlet } from "react-router";
import MyMenu from "../components/Menu/MyMenu";

function RootLayout() {
  return (
    <>
      <MyMenu />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
