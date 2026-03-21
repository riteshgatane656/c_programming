import { useState } from "react";

function Settings() {

  const [siteName, setSiteName] = useState("PrintShop System");
  const [supportEmail, setSupportEmail] = useState("support@print.com");

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        System Settings
      </h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <div>
          <label className="block text-sm font-medium mb-1">
            Site Name
          </label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Support Email
          </label>
          <input
            type="email"
            value={supportEmail}
            onChange={(e) => setSupportEmail(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default Settings;