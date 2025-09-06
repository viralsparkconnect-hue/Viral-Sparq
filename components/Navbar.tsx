"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="border-b bg-white">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="font-extrabold text-xl text-primary">
          ViralSpark
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 border rounded"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Nav links */}
        <nav
          className={clsx(
            "md:flex gap-6 items-center",
            open ? "block mt-4 md:mt-0" : "hidden md:flex"
          )}
        >
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href as any}
              className="font-medium hover:text-primary"
            >
              {n.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="btn btn-primary ml-0 md:ml-4"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
