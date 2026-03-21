import StatCard from "../../components/StatCard";
import { FileText, Printer, Clock } from "lucide-react";

function StudentDashboard() {

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Student Dashboard
      </h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <StatCard
          icon={FileText}
          label="Total Orders"
          value="12"
          color="blue"
        />

        <StatCard
          icon={Printer}
          label="Pages Printed"
          value="150"
          color="green"
        />

        <StatCard
          icon={Clock}
          label="Pending Orders"
          value="2"
          color="orange"
        />

      </div>

      {/* Welcome Card */}
      <div className="bg-white p-6 rounded-xl shadow">

        <h3 className="text-lg font-bold mb-2">
          Welcome to Print Service
        </h3>

        <p className="text-gray-600">
          Upload your documents and track your printing orders easily.
        </p>

      </div>

    </div>
  );
}

export default StudentDashboard;