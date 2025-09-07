"use client";

import { useRouter } from "next/navigation";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  price,
  features,
}: ServiceCardProps) {
  const router = useRouter();

  const handleCheckout = () => {
    router.push(
      `/checkout?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}`
    );
  };

  return (
    <div className="card p-6 flex flex-col border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition">
      {/* Icon */}
      <div className="text-4xl">{icon}</div>

      {/* Title */}
      <div className="mt-3 font-bold text-xl">{title}</div>

      {/* Description */}
      <p className="mt-2 text-gray-600">{description}</p>

      {/* Features */}
      {features && (
        <ul className="mt-3 text-sm text-gray-600 list-disc pl-5 space-y-1">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      {/* Price */}
      <div className="mt-4 text-xl font-bold text-primary">{price}</div>

      {/* ✅ Buy Button → redirect to checkout */}
      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={handleCheckout}
      >
        Buy Now
      </button>
    </div>
  );
}
