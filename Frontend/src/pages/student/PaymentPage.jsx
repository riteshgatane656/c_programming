function PaymentPage() {

  const handlePayment = () => {
    alert("Payment successful!");
  };

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Payment
      </h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <p className="text-gray-700">
          Order ID: <b>ORD101</b>
        </p>

        <p className="text-gray-700">
          Amount: <b>₹40</b>
        </p>

        <button
          onClick={handlePayment}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Pay Now
        </button>

      </div>

    </div>
  );
}

export default PaymentPage;