"use client";
import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "919834683297"; // Your WhatsApp number in international format
  const message = "Hello! I have a query about your services."; // Pre-filled message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        padding: "12px 16px",
        borderRadius: "50px",
        textDecoration: "none",
        fontSize: "18px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        cursor: "pointer",
      }}
    >
      💬 WhatsApp
    </a>
  );
}
