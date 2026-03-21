import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function ShopkeeperLayout() {
  return (
    <div className="flex h-screen">

      <Sidebar role="shop" />

      <div className="flex-1 flex flex-col">
        <Navbar title="Shopkeeper Panel" />
        <div className="p-6">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default ShopkeeperLayout;