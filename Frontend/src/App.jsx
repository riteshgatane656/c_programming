import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Layouts */
import StudentLayout from "./layouts/StudentLayout";
import ShopkeeperLayout from "./layouts/ShopkeeperLayout";
import AdminLayout from "./layouts/AdminLayout";

/* Pages */
import Home from "./pages/Home";
import StudentDashboard from "./pages/student/StudentDashboard";
import ShopDashboard from "./pages/shopkeeper/ShopDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
        </Route>

        <Route path="/shop" element={<ShopkeeperLayout />}>
          <Route path="dashboard" element={<ShopDashboard />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
