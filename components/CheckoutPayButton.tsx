"use client";

import { useState } from "react";

interface CheckoutPayButtonProps {
  title: string;
  price: string; // final discounted price
  customerData: {
    name: string;
    email: string;
    mobile: string;
    address: string;
    coupon: string;
  };
}

export default function CheckoutPayButton({ title, price, customerData }: CheckoutPayButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!customerData.name || !customerData.email || !customerData.mobile || !customerData.address) {
      alert("Please fill all required fields before proceeding.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price, ...customerData }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url; // Redirect to Stripe Checkout
    } else {
      alert("Failed to create Stripe session");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
    >
      {loading ? "Redirecting..." : "Proceed to Pay"}
    </button>
  );
}
