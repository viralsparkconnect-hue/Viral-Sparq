import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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

        {/* Social Links */}
        <div>
          <div className="font-semibold text-lg mb-4">Follow Us</div>
          <div className="flex gap-4 text-gray-600 text-xl">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-primary transition"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="hover:text-primary transition"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="hover:text-primary transition"
            >
              <FaInstagram />
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
