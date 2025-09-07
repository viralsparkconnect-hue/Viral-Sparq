import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="container py-12 grid md:grid-cols-3 gap-12">
        {/* Brand / About */}
        <div>
          <div className="font-extrabold text-2xl text-primary">ViralSpark</div>
          <p className="mt-3 text-gray-600 leading-relaxed">
            We turn clicks into clients with modern marketing and high-performance
            websites that deliver measurable results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-semibold text-lg mb-4">Quick Links</div>
          <ul className="space-y-2 text-gray-700">
            {["/","/about","/services","/portfolio","/blog","/contact"].map((href) => (
              <li key={href}>
                <Link
                  className="hover:text-primary transition"
                  href={href as any}
                >
                  {href === "/"
                    ? "Home"
                    : href.replace("/", "").replace(/^./, (c) => c.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links with inline SVGs */}
        <div>
          <div className="font-semibold text-lg mb-4">Follow Us</div>
          <div className="flex gap-4 text-gray-600">
            {/* Twitter */}
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-primary transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .36.04.72.12 1.06A12.9 12.9 0 0 1 3.15.84a4.52 4.52 0 0 0-.61 2.27c0 1.56.79 2.94 2 3.75A4.49 4.49 0 0 1 1.6 6v.05c0 2.18 1.55 4 3.6 4.42a4.52 4.52 0 0 1-2.04.08c.57 1.79 2.22 3.09 4.18 3.13A9.06 9.06 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.84-6.87 12.84-12.83 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z"/>
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-primary transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.53-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8z"/>
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-primary transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.2a5.8 5.8 0 1 0 0 11.6 5.8 5.8 0 0 0 0-11.6zm0 2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6zm4.75-2.95a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ViralSpark. All rights reserved.
      </div>
    </footer>
  );
}
