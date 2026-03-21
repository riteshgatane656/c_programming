import { Bell } from "lucide-react";

function Navbar({ title }) {

  return (
    <div className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-gray-800">
        {title}
      </h1>

      <div className="flex items-center gap-4">

        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Bell className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">

          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
            A
          </div>

          <span className="text-sm font-medium">
            Admin
          </span>

        </div>

      </div>

    </div>
  );
}

export default Navbar;