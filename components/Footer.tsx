import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-extrabold text-xl text-primary">ViralSpark</div>
          <p className="mt-3 text-gray-600">We turn clicks into clients with modern marketing and performance web dev.</p>
        </div>
        <div>
          <div className="font-bold mb-3">Quick Links</div>
          <ul className="space-y-2">
            {["/","/about","/services","/portfolio","/blog","/contact"].map((href) => (
              <li key={href}><Link className="hover:text-primary" href={href}>{href === "/" ? "Home" : href.replace("/","").replace(/^./, c => c.toUpperCase())}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold mb-3">Follow</div>
          <div className="flex gap-3">
            <Link href="https://twitter.com" target="_blank" className="btn btn-secondary">Twitter</Link>
            <Link href="https://www.linkedin.com" target="_blank" className="btn btn-secondary">LinkedIn</Link>
            <Link href="https://www.instagram.com" target="_blank" className="btn btn-secondary">Instagram</Link>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} ViralSpark. All rights reserved.</div>
    </footer>
  );
}