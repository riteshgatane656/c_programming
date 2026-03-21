import Table from "../../components/Table";

function PrintQueue() {

  const columns = [
    "Order ID",
    "Customer",
    "Pages",
    "Copies",
    "Type",
    "Status"
  ];

  const data = [
    {
      id: "ORD101",
      customer: "Ritesh",
      pages: 10,
      copies: 2,
      type: "B&W",
      status: "Pending"
    },
    {
      id: "ORD102",
      customer: "Rahul",
      pages: 20,
      copies: 1,
      type: "Color",
      status: "Printing"
    }
  ];

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Print Queue
      </h2>

      <Table columns={columns} data={data} />

    </div>
  );
}

export default PrintQueue;