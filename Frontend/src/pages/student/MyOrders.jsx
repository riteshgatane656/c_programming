import Table from "../../components/Table";

function MyOrders() {

  const columns = [
    "Order ID",
    "Document",
    "Pages",
    "Copies",
    "Cost",
    "Status"
  ];

  const data = [
    {
      id: "ORD101",
      document: "Assignment.pdf",
      pages: 10,
      copies: 2,
      cost: "₹40",
      status: "Printing"
    },
    {
      id: "ORD102",
      document: "Notes.pdf",
      pages: 20,
      copies: 1,
      cost: "₹40",
      status: "Completed"
    }
  ];

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        My Orders
      </h2>

      <Table columns={columns} data={data} />

    </div>
  );
}

export default MyOrders;