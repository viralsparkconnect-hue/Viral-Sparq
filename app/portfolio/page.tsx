import Image from "next/image";
import { projects } from "@/lib/data";

export const metadata = { title: "Portfolio — ViralSpark" };

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Our Work</h1>
        <p className="p mt-3">A few recent projects driving real results.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {projects.map(p => (
            <a key={p.title} href={p.link} className="card">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover"/>
              </div>
              <div className="mt-4 font-bold">{p.title}</div>
              <p className="text-gray-600 mt-1">{p.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}