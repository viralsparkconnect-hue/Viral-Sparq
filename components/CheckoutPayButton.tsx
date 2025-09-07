"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface CheckoutPayButtonProps {
  price: string; // e.g., "15000"
}

export default function CheckoutPayButton({ price }: CheckoutPayButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const numericPrice = parseInt(price.replace(/[^\d]/g, ""), 10) * 100;

  const handlePayment = () => {
    setLoading(true);

    // Dummy payment simulation
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance success
      if (success) router.push("/payment-success");
      else router.push("/payment-cancel");
    }, 1500);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
    >
      {loading ? "Processing..." : `Proceed to Pay ₹${numericPrice / 100}`}
    </button>
  );
}
