import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary to-accent text-white text-center rounded-2xl mx-4 md:mx-12 my-16 shadow-xl overflow-hidden">
      {/* Background overlay for effect */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Ready to Grow Your Business?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Let’s build a high-performing website and marketing strategy that drives real results.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="btn btn-primary bg-white text-primary font-bold shadow-lg hover:scale-105 transition"
          >
            🚀 Get Started
          </Link>
          <Link
            href="/services"
            className="btn btn-secondary border-2 border-white text-white hover:bg-white/20"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
