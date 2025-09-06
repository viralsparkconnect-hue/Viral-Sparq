import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/data";

export const metadata = { title: "Blog — ViralSpark" };

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2">Insights & Playbooks</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover"/>
              </div>
              <div className="mt-4 font-bold">{p.title}</div>
              <p className="text-gray-600 mt-1">{p.excerpt}</p>
              <div className="mt-2 text-sm text-gray-500">{new Date(p.date).toDateString()}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}