// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import { services, projects, posts } from "@/lib/data";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      {/* ✅ Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-primary/10 via-white to-accent/10">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Digital Marketing that{" "}
              <span className="text-primary">Scales</span>. <br />
              Websites that <span className="text-accent">Perform</span>.
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
              We blend SEO, ads, and social with conversion-first Next.js builds.
              Less fluff, more results for your business growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/contact" className="btn btn-primary shadow-lg">
                🚀 Get a Proposal
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Hero"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
          ↓ Scroll
        </div>
      </section>

      {/* ✅ Services Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="h2 text-center">What We Do</h2>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
            End-to-end digital solutions designed to help your brand grow online.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="card hover:shadow-xl transition p-6 text-center"
              >
                <div className="text-primary text-4xl">{s.icon}</div>
                <h3 className="mt-4 font-bold text-xl">{s.title}</h3>
                <p className="mt-3 text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Portfolio Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex items-end justify-between">
            <h2 className="h2">Featured Work</h2>
            <Link
              href="/portfolio"
              className="text-primary font-semibold hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.title}
                className="card group hover:shadow-xl transition"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="mt-4 font-bold text-lg">{p.title}</h3>
                <p className="text-gray-600 mt-1">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Blog Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex items-end justify-between">
            <h2 className="h2">From the Blog</h2>
            <Link
              href="/blog"
              className="text-primary font-semibold hover:underline"
            >
              Read more →
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {posts.map((b) => (
              <Link
                key={b.slug}
                href={`/blog/${b.slug}`}
                className="card block hover:shadow-lg transition"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="mt-4 font-bold text-lg">{b.title}</h3>
                <p className="text-gray-600 mt-2">{b.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <CTA />

      {/* ✅ Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
