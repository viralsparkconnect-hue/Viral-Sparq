"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function Page() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const templateParams = {
      from_name: String(formData.get("name") || ""),
      from_email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };
    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string }
      );
      if (res.status === 200) {
        setStatus("Thanks! We'll get back to you within 24 hours.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send. Check configuration or try later.");
    }
  }

  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="h2">Contact Us</h1>
          <p className="p mt-3">Tell us about your goals and we’ll craft a plan to hit them.</p>
          <form onSubmit={onSubmit} className="card mt-6 space-y-4">
            <input name="name" required placeholder="Your name" className="w-full border rounded-xl p-3" />
            <input type="email" name="email" required placeholder="Email address" className="w-full border rounded-xl p-3" />
            <textarea name="message" required placeholder="Project details" rows={5} className="w-full border rounded-xl p-3" />
            <button className="btn btn-primary w-full" type="submit">Send Message</button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </form>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <Image src="/images/contact.jpg" alt="Contact" fill className="object-cover"/>
        </div>
      </div>
    </section>
  );
}