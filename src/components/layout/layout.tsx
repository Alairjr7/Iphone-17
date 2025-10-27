import { Outlet } from "react-router-dom";
import Header from "../header/header";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex flex-col flex-1">
        <Outlet />
      </main>
    </div>
  );
}
