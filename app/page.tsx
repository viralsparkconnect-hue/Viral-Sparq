import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import { services, projects, posts } from "@/lib/data";
import WhatsAppButton from "@/components/WhatsAppButton"; // ✅ Import WhatsAppButton

export default function Page() {
  return (
    <>
      <div>
        <section className="section">
          <div className="container grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="h1">
                Digital Marketing that <span className="text-primary">scales</span>. Websites that <span className="text-accent">perform</span>.
              </h1>
              <p className="p mt-5">
                We blend SEO, ads, and social with conversion‑first Next.js builds. Less fluff, more results.
              </p>
              <div className="mt-6 flex gap-4">
                <Link href="/contact" className="btn btn-primary">Get a Proposal</Link>
                <Link href="/services" className="btn btn-secondary">Explore Services</Link>
              </div>
            </div>
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/hero.jpg" alt="Hero" fill className="object-cover"/>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <h2 className="h2 text-center">What we do</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(s => (
                <div key={s.title} className="card">
                  <div className="text-primary text-2xl font-bold">{s.icon}</div>
                  <div className="mt-3 font-bold text-lg">{s.title}</div>
                  <p className="mt-2 text-gray-600">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="flex items-end justify-between">
              <h2 className="h2">Featured work</h2>
              <Link href="/portfolio" className="text-primary font-semibold">View all →</Link>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {projects.map(p => (
                <div key={p.title} className="card">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-cover"/>
                  </div>
                  <div className="mt-4 font-bold">{p.title}</div>
                  <p className="text-gray-600 mt-1">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="flex items-end justify-between">
              <h2 className="h2">From the blog</h2>
              <Link href="/blog" className="text-primary font-semibold">Read more →</Link>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {posts.map(b => (
                <Link key={b.slug} href={`/blog/${b.slug}`} className="card block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image src={b.image} alt={b.title} fill className="object-cover"/>
                  </div>
                  <div className="mt-4 font-bold">{b.title}</div>
                  <p className="text-gray-600 mt-1">{b.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </div>

      {/* ✅ Floating WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}
