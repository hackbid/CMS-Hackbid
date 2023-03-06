import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="mt-8 hidden sm:block">
      <Outlet />
    </div>
  );
};
export default Layout;
