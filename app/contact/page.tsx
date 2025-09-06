"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
      from_name: String(formData.get("name") || ""),
      from_email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      time: new Date().toLocaleString(),
    };

    try {
      const res = await emailjs.send(
        "service_swm90td",
        "template_m8a5z1h",
        templateParams,
        { publicKey: "GNI9TMOJiV8twK7WZ" }
      );
      if (res.status === 200) {
        setStatus("✅ Thanks! We'll get back to you within 24 hours.");
        form.reset();
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send. Check configuration or try later.");
    }
  }

  return (
    <section className="section py-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Form */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-700 mb-6">
            Tell us about your goals and we’ll craft a plan to hit them.
          </p>
          <form
            onSubmit={onSubmit}
            className="space-y-4 bg-white p-6 rounded-xl shadow-md"
          >
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
          </form>
        </div>

        {/* Right: Image */}
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/contact.jpg" // keep the image in public/images
            alt="Contact Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
