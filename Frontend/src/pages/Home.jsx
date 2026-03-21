import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">

      <h1 className="text-3xl font-bold">
        PrintGo Dashboard
      </h1>

      <div className="flex gap-6">

        <Link
          to="/student/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Student Panel
        </Link>

        <Link
          to="/shop/dashboard"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Shopkeeper Panel
        </Link>

        <Link
          to="/admin/dashboard"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg"
        >
          Admin Panel
        </Link>

      </div>

    </div>
  );
}

export default Home;