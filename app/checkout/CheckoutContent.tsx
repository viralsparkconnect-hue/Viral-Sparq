"use client";

import { useSearchParams } from "next/navigation";

export default function CheckoutContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const price = searchParams.get("price");

  return (
    <section className="section">
      <div className="container max-w-lg mx-auto text-center">
        <h1 className="h2">Checkout</h1>
        <p className="mt-3 text-gray-600">Review your order before payment</p>

        <div className="card p-6 mt-6 border border-gray-200 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2 text-lg text-primary">{price}</p>

          <button
            onClick={() => alert("Payment gateway integration coming soon 🚀")}
            className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Proceed to Pay
          </button>

          <button
            onClick={() => history.back()}
            className="mt-3 w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Back to Services
          </button>
        </div>
      </div>
    </section>
  );
}
