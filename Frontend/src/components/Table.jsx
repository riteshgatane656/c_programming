function Table({ columns, data }) {

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-50 border-b">

          <tr>

            {columns.map((col, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                {col}
              </th>
            ))}

          </tr>

        </thead>

        <tbody className="divide-y">

          {data.length === 0 ? (

            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
              >
                No Data Available
              </td>
            </tr>

          ) : (

            data.map((row, index) => (

              <tr key={index} className="hover:bg-gray-50">

                {Object.values(row).map((value, i) => (

                  <td
                    key={i}
                    className="px-6 py-4 text-sm text-gray-700"
                  >
                    {value}
                  </td>

                ))}

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default Table;