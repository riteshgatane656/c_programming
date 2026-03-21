import Table from "../../components/Table";

function ManageShops() {

  const columns = [
    "Shop ID",
    "Shop Name",
    "Owner",
    "Location",
    "Status"
  ];

  const data = [
    {
      id: "SHOP101",
      name: "City Print Hub",
      owner: "Rahul",
      location: "Mumbai",
      status: "Active"
    },
    {
      id: "SHOP102",
      name: "Campus Print",
      owner: "Amit",
      location: "Pune",
      status: "Active"
    }
  ];

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Manage Shops
      </h2>

      <Table columns={columns} data={data} />

    </div>
  );
}

export default ManageShops;