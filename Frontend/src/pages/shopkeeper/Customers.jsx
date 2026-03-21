import Table from "../../components/Table";

function Customers() {

  const columns = [
    "Customer ID",
    "Name",
    "Mobile",
    "Total Orders",
    "Total Spent"
  ];

  const data = [
    {
      id: "CUST101",
      name: "Ritesh",
      mobile: "9876543210",
      orders: 5,
      spent: "₹200"
    },
    {
      id: "CUST102",
      name: "Rahul",
      mobile: "9876543211",
      orders: 3,
      spent: "₹120"
    }
  ];

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Customers
      </h2>

      <Table columns={columns} data={data} />

    </div>
  );
}

export default Customers;