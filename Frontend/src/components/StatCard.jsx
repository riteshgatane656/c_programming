function StatCard({ icon: Icon, label, value, color }) {

  const colors = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600"
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} text-white rounded-xl p-6`}>

      <div className="flex justify-between items-center mb-4">

        <Icon className="w-8 h-8 opacity-80" />

      </div>

      <p className="text-sm opacity-90">
        {label}
      </p>

      <p className="text-3xl font-bold">
        {value}
      </p>

    </div>
  );
}

export default StatCard;