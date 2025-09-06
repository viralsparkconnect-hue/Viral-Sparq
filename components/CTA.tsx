import Link from "next/link";

export default function CTA() {
  return (
    <section className="section">
      <div className="container text-center card">
        <h2 className="h2">Ready to grow faster?</h2>
        <p className="p mt-3">Launch a blazing‑fast site and campaigns that convert.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact" className="btn btn-primary">Start a Project</Link>
          <Link href="/portfolio" className="btn btn-accent">See Our Work</Link>
        </div>
      </div>
    </section>
  );
}