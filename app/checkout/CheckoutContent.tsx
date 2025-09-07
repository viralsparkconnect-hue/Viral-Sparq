"use client";

import { useSearchParams } from "next/navigation";
import CheckoutPayButton from "@/components/CheckoutPayButton";

export default function CheckoutContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Service";
  const price = searchParams.get("price") || "₹0";

  return (
    <section className="section">
      <div className="container max-w-lg mx-auto text-center">
        <h1 className="h2">Checkout</h1>
        <p className="mt-3 text-gray-600">Review your order before payment</p>

        <div className="card p-6 mt-6 border border-gray-200 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2 text-lg text-primary">{price}</p>

          {/* Dummy payment button */}
          <CheckoutPayButton price={price} />

          {/* Back button */}
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
