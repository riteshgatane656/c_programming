import StatCard from "../../components/StatCard";
import { Users, Store, FileText, DollarSign } from "lucide-react";

function AdminDashboard() {

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Admin Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <StatCard
          icon={Users}
          label="Total Students"
          value="450"
          color="blue"
        />

        <StatCard
          icon={Store}
          label="Print Shops"
          value="12"
          color="purple"
        />

        <StatCard
          icon={FileText}
          label="Total Orders"
          value="1200"
          color="green"
        />

        <StatCard
          icon={DollarSign}
          label="Platform Revenue"
          value="₹45,000"
          color="orange"
        />

      </div>

    </div>
  );
}

export default AdminDashboard;