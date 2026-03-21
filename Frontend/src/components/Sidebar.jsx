import { Link } from "react-router-dom";

function Sidebar({ role }) {

  const menus = {
    student: [
      { name: "Dashboard", path: "/student/dashboard" }
    ],
    shop: [
      { name: "Dashboard", path: "/shop/dashboard" }
    ],
    admin: [
      { name: "Dashboard", path: "/admin/dashboard" }
    ]
  };

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">

      <h2 className="text-xl font-bold mb-6">PrintGo</h2>

      {menus[role]?.map((item, i) => (
        <Link key={i} to={item.path}>
          {item.name}
        </Link>
      ))}

    </div>
  );
}

export default Sidebar;