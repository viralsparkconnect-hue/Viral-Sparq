"use client";

import React from "react";

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
  const handleWhatsAppClick = () => {
    const message = `Hi, I’m interested in your ${title} service (${price}). Can you share more details?`;
    window.open(`https://wa.me/918888888888?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
      <div className="text-3xl">{icon}</div>
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-indigo-600 font-semibold mt-2">{price}</p>

      {/* Features */}
      <ul className="mt-3 text-sm text-gray-600 list-disc pl-5 space-y-1">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Chat on WhatsApp
      </button>
    </div>
  );
}
