import StatCard from "../../components/StatCard";
import { DollarSign, FileText, Users } from "lucide-react";

function SystemReports() {

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        System Reports
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <StatCard
          icon={DollarSign}
          label="Total Revenue"
          value="₹1,20,000"
          color="green"
        />

        <StatCard
          icon={FileText}
          label="Orders Completed"
          value="980"
          color="blue"
        />

        <StatCard
          icon={Users}
          label="Active Users"
          value="650"
          color="purple"
        />

      </div>

    </div>
  );
}

export default SystemReports;