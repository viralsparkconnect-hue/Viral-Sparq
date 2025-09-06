"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    ).then(
      () => {
        alert("✅ Message sent successfully!");
        form.current?.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send. Please try again later.");
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded"/>
      <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded"/>
      <textarea name="message" placeholder="Your Message" required className="w-full p-3 border rounded h-32"/>
      <input type="hidden" name="time" value={new Date().toLocaleString()}/>
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
        Send Message
      </button>
    </form>
  );
}
