"use client";

import { useRouter } from "next/navigation";

interface PaymentButtonProps {
  service: {
    title: string;
    price: string;
  };
}

export default function PaymentButton({ service }: PaymentButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    // Redirect with service details
    router.push(`/checkout?title=${encodeURIComponent(service.title)}&price=${encodeURIComponent(service.price)}`);
  };

  return (
    <button
      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      onClick={handleClick}
    >
      Buy Now
    </button>
  );
}
