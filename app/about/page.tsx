import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

export const metadata = { title: "About Us — ViralSpark" };

export default function Page() {
  return (
    <>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h2">About ViralSpark</h1>
            <p className="p mt-3">
              We’re a performance‑driven team blending marketing strategy with modern web engineering. We deliver measurable growth and delightful user experiences.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
              <li>Senior‑level talent across SEO, paid media, and dev</li>
              <li>Transparent roadmaps, weekly reporting</li>
              <li>Lightning‑fast, accessible Next.js builds</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/about.jpg" alt="About ViralSpark" fill className="object-cover"/>
          </div>
        </div>
      </section>

      {/* Add WhatsApp floating button */}
      <WhatsAppButton />
    </>
  );
}
