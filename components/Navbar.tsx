"use client";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-extrabold text-xl text-primary">ViralSpark</Link>
        <button aria-label="Toggle Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl border">
          ☰
        </button>
        <nav className={clsx("md:flex gap-6 items-center", open ? "block mt-4 md:mt-0" : "hidden md:flex")}>
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="font-medium hover:text-primary">{n.label}</Link>
          ))}
          <Link href="/contact" className="btn btn-primary ml-0 md:ml-4">Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
}