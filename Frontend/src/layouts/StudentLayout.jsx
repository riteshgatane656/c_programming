import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function StudentLayout() {
  return (
    <div className="flex">

      <Sidebar role="student" />

      <div className="flex-1">
        <Navbar title="Student Panel" />

        <div className="p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default StudentLayout;