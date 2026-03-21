import StatCard from "../../components/StatCard";
import { DollarSign, FileText, Printer } from "lucide-react";

function Reports() {

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Reports
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <StatCard
          icon={DollarSign}
          label="Total Revenue"
          value="₹8500"
          color="green"
        />

        <StatCard
          icon={FileText}
          label="Total Orders"
          value="210"
          color="blue"
        />

        <StatCard
          icon={Printer}
          label="Pages Printed"
          value="5200"
          color="purple"
        />

      </div>

    </div>
  );
}

export default Reports;