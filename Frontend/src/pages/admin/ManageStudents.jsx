import Table from "../../components/Table";

function ManageStudents() {

  const columns = [
    "Student ID",
    "Name",
    "Email",
    "Orders",
    "Total Spent"
  ];

  const data = [
    {
      id: "STU101",
      name: "Ritesh",
      email: "ritesh@gmail.com",
      orders: 10,
      spent: "₹300"
    },
    {
      id: "STU102",
      name: "Priya",
      email: "priya@gmail.com",
      orders: 6,
      spent: "₹180"
    }
  ];

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Manage Students
      </h2>

      <Table columns={columns} data={data} />

    </div>
  );
}

export default ManageStudents;