"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton"; // ✅ Import WhatsAppButton

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      from_name: formData.get("name")?.toString(),
      from_email: formData.get("email")?.toString(),
      message: formData.get("message")?.toString(),
      time: new Date().toLocaleString(),
    };

    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
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
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Form Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg relative">
            {/* Optional small avatar icon */}
            <div className="absolute -top-8 left-8 bg-blue-100 p-4 rounded-full text-2xl">
              👤
            </div>

            <h1 className="text-3xl font-bold mb-3 mt-6">Contact Us</h1>
            <p className="text-gray-700 mb-6">
              Tell us about your goals and we’ll craft a plan to hit them.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
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

          {/* Right: Public Image */}
          <div className="relative w-full h-80 md:h-[32rem] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/contact.jpg" // Make sure this exists in /public/images/
              alt="Contact Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ✅ Floating WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}
