import { posts } from "@/lib/data";

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);
  return { title: post ? `${post.title} — ViralSpark` : "Blog — ViralSpark" };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return <div className="container section">Post not found.</div>;
  return (
    <section className="section">
      <div className="container prose max-w-none">
        <h1 className="h2">{post.title}</h1>
        <p className="text-gray-500">{new Date(post.date).toDateString()}</p>
        <div className="mt-6 whitespace-pre-wrap">{post.content}</div>
      </div>
    </section>
  );
}