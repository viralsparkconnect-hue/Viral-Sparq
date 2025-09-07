import { posts } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export default function BlogPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <div>Blog not found</div>;

  return (
    <div className="container mx-auto py-10 prose prose-lg">
      <h1>{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>

      {/* Blog Content */}
      <div>
        <h2>📖 SEO Checklist for 2025 – Future-Proof Your Website Rankings</h2>

        <p>
          Search Engine Optimization (SEO) has always been the foundation of
          digital marketing. But the rules are constantly changing. Google
          updates its algorithm thousands of times per year, and with AI-driven
          search engines like Gemini, ChatGPT, and Bing Copilot, ranking
          strategies in 2025 look very different from what worked even a year
          ago.
        </p>

        <p>
          If you’re a business owner, marketer, or web developer, the big
          question is: <strong>👉 How do I make sure my website stays visible
          in 2025 and beyond?</strong>
        </p>

        <p>
          This SEO checklist for 2025 covers everything from technical SEO,
          on-page optimization, content marketing, Core Web Vitals, voice
          search, and E-E-A-T. Follow it step by step, and you’ll be ahead of
          90% of your competitors.
        </p>

        <h3>✅ 1. Core Web Vitals & Site Performance</h3>
        <ul>
          <li>
            <strong>LCP:</strong> Load main content in under 2.5s
          </li>
          <li>
            <strong>INP (was FID):</strong> User interactions under 200ms
          </li>
          <li>
            <strong>CLS:</strong> Avoid shifting banners/ads
          </li>
        </ul>
        <p>
          <em>Action Steps:</em> Use Next.js Image, fast CDN (Vercel/Cloudflare),
          lazy loading, minify CSS/JS, SSR.
        </p>

        <h3>✅ 2. Content That Works for Humans and AI</h3>
        <ul>
          <li>Clear headings and bullet points</li>
          <li>FAQ sections for AI + voice search</li>
          <li>Schema markup for rich snippets</li>
        </ul>

        <p>
          Example: Instead of “SEO tools help websites rank” → write “SEO tools
          like Ahrefs, SEMrush, and Google Search Console help businesses track
          keywords, fix site errors, and grow organic traffic.”
        </p>

        <h3>✅ 3. Voice Search Optimization</h3>
        <p>
          Over 50% of searches in 2025 are voice-based. Use natural,
          question-style queries and FAQs.
        </p>

        <h3>✅ 4. E-E-A-T</h3>
        <p>
          Prove credibility with author bios, reviews, case studies, and
          external citations.
        </p>

        <h3>✅ 5. Optimize for Zero-Click Searches</h3>
        <p>
          Add FAQ-rich content, lists, and “People also ask” keywords to win
          featured snippets.
        </p>

        <h3>✅ 6. Technical SEO & Site Architecture</h3>
        <ul>
          <li>Submit site to Google Search Console</li>
          <li>Fix broken links & crawl errors</li>
          <li>Use clean URLs, XML sitemap, robots.txt</li>
        </ul>

        <h3>✅ 7. Mobile-First Design</h3>
        <p>
          Ensure responsive design, avoid intrusive pop-ups, test across
          devices.
        </p>

        <h3>✅ 8. AI Tools for SEO</h3>
        <p>
          Tools: SurferSEO, Ahrefs, SEMrush, ChatGPT, Google Analytics 4.
        </p>

        <h3>✅ 9. Link Building & Authority</h3>
        <p>
          Build backlinks via guest posts, research, LinkedIn networking, HARO.
        </p>

        <h3>✅ 10. Local SEO</h3>
        <p>
          Optimize Google Business Profile, collect reviews, use local
          keywords, keep NAP consistent.
        </p>

        <h2>🚀 Conclusion</h2>
        <p>
          SEO in 2025 isn’t about stuffing keywords or chasing hacks. It’s
          about:
        </p>
        <ul>
          <li>Delivering fast, mobile-friendly sites</li>
          <li>Writing helpful content for humans + AI</li>
          <li>Proving trustworthiness with E-E-A-T</li>
          <li>Optimizing for voice and zero-click searches</li>
        </ul>
        <p>
          If you follow this SEO checklist for 2025, your website won’t just
          rank — it will stay future-proof in an AI-first search world.
        </p>
      </div>
    </div>
  );
}
