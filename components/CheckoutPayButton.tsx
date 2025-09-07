"use client";

import { useState } from "react";

interface CheckoutPayButtonProps {
  price: string; // e.g., "15000"
}

export default function CheckoutPayButton({ price }: CheckoutPayButtonProps) {
  const [loading, setLoading] = useState(false);

  // Convert price string to number in subunits
  const numericPrice = parseInt(price?.replace(/[^\d]/g, "") || "0", 10) * 100;

  const handlePayment = () => {
    setLoading(true);

    // Simulate payment process (dummy)
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance success

      // Use window.location.href to bypass Next.js 14 typed routes
      if (success) window.location.href = "/payment-success";
      else window.location.href = "/payment-cancel";
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
