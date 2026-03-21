import Table from "../../components/Table";

function Orders() {

  const columns = [
    "Order ID",
    "Customer",
    "Document",
    "Pages",
    "Copies",
    "Cost",
    "Status"
  ];

  const data = [
    {
      id: "ORD201",
      customer: "Aman",
      document: "Assignment.pdf",
      pages: 12,
      copies: 2,
      cost: "₹48",
      status: "Completed"
    },
    {
      id: "ORD202",
      customer: "Priya",
      document: "Notes.pdf",
      pages: 15,
      copies: 1,
      cost: "₹30",
      status: "Completed"
    }
  ];

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Orders
      </h2>

      <Table columns={columns} data={data} />

    </div>
  );
}

export default Orders;  