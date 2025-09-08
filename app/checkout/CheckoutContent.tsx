"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import CheckoutPayButton from "@/components/CheckoutPayButton";

export default function CheckoutContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Service";
  const basePrice = parseInt(searchParams.get("price")?.replace(/[^\d]/g, "") || "0");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    coupon: "",
  });

  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(basePrice);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const applyCoupon = () => {
    if (formData.coupon.toLowerCase() === "save10") {
      setDiscount(10);
      setFinalPrice(basePrice - basePrice * 0.1);
      alert("Coupon applied! 10% discount.");
    } else if (formData.coupon.toLowerCase() === "save50") {
      setDiscount(50);
      setFinalPrice(basePrice - basePrice * 0.5);
      alert("Coupon applied! 50% discount.");
    } else {
      setDiscount(0);
      setFinalPrice(basePrice);
      alert("Invalid coupon code.");
    }
  };

  return (
    <section className="section">
      <div className="container max-w-lg mx-auto text-center">
        <h1 className="h2">Checkout</h1>
        <p className="mt-3 text-gray-600">Fill your details and review order before payment</p>

        <div className="card p-6 mt-6 border border-gray-200 rounded-2xl shadow-md text-left">
          <h2 className="text-xl font-bold text-center">{title}</h2>
          <p className="mt-2 text-lg text-primary text-center">
            {discount > 0 ? (
              <>
                <span className="line-through text-gray-400 mr-2">₹{basePrice}</span>
                <span className="text-green-600 font-bold">₹{finalPrice}</span>
              </>
            ) : (
              `₹${finalPrice}`
            )}
          </p>

          {/* Checkout Form */}
          <form className="mt-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <div className="flex gap-2">
              <input
                type="text"
                name="coupon"
                placeholder="Coupon Code"
                value={formData.coupon}
                onChange={handleChange}
                className="flex-1 p-3 border rounded-lg"
              />
              <button
                type="button"
                onClick={applyCoupon}
                className="px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Apply
              </button>
            </div>
          </form>

          {/* Proceed Button */}
          <CheckoutPayButton title={title} price={finalPrice.toString()} customerData={formData} />

          {/* Back Button */}
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
