import StatCard from "../../components/StatCard";
import { FileText, Printer, Users, DollarSign } from "lucide-react";

function ShopDashboard() {

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Shop Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <StatCard
          icon={FileText}
          label="Orders Today"
          value="15"
          color="blue"
        />

        <StatCard
          icon={Printer}
          label="Pages Printed"
          value="340"
          color="green"
        />

        <StatCard
          icon={Users}
          label="Customers"
          value="78"
          color="purple"
        />

        <StatCard
          icon={DollarSign}
          label="Revenue"
          value="₹1200"
          color="orange"
        />

      </div>

    </div>
  );
}

export default ShopDashboard;