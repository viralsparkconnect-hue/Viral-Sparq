"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface CheckoutPayButtonProps {
  price: string; // e.g., "15000"
}

export default function CheckoutPayButton({ price }: CheckoutPayButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Convert price string to number in subunits
  const numericPrice = parseInt(price?.replace(/[^\d]/g, "") || "0", 10) * 100;

  const handlePayment = () => {
    setLoading(true);

    // Simulate payment process (dummy)
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance success

      // Next.js 14 typed router fix
      if (success) router.push("/payment-success" as string);
      else router.push("/payment-cancel" as string);
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
