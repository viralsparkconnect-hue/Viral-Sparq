
export type Service = { title: string; description: string; icon: string; };
export type Project = { title: string; description: string; image: string; link: string; };
export type Post = { slug: string; title: string; excerpt: string; image: string; date: string; content?: string };

export const services: Service[] = [
  { title: "SEO & Growth", description: "Search visibility, technical audits, and growth strategy.", icon: "🔎" },
  { title: "Paid Ads", description: "Google & social ads optimized for ROAS.", icon: "🎯" },
  { title: "Social Media", description: "End‑to‑end content, calendars, and community.", icon: "👥" },
  { title: "Web Development", description: "Next.js websites that are fast, accessible, and SEO‑ready.", icon: "💻" },
  { title: "Brand & Design", description: "Design systems, identity, and conversion‑led UX.", icon: "✨" },
  { title: "Analytics", description: "Tracking, dashboards, and CRO experiments.", icon: "📊" }
];

export const projects: Project[] = [
  { title: "SaaS Landing Redesign", description: "Boosted signups by 42% with CRO and page speed fixes.", image: "/images/p1.jpg", link: "#" },
  { title: "E‑commerce ROAS 5.2x", description: "Scaled paid search with a smart feed and bidding.", image: "/images/p2.jpg", link: "#" },
  { title: "Local Service SEO", description: "Top‑3 rankings for 18 high‑intent keywords.", image: "/images/p3.jpg", link: "#" }
];

export const posts: Post[] = [
  { slug: "seo-checklist-2025", title: "SEO Checklist for 2025", excerpt: "A pragmatic list to keep your site fast and findable.", image: "/images/blog1.jpg", date: "2025-08-15", content: "### Key steps\n- Crawl your site\n- Fix Core Web Vitals\n- Map intent to pages\n- Build topical clusters" },
  { slug: "ads-that-convert", title: "Designing Ads That Actually Convert", excerpt: "Creative testing loops you can run this week.", image: "/images/blog2.jpg", date: "2025-07-02", content: "### Creative testing\nIterate hooks, offers, and formats weekly. Measure against CAC and ROAS." },
  { slug: "nextjs-performance", title: "Next.js Performance Basics", excerpt: "Quick wins to get a 90+ Lighthouse score.", image: "/images/blog3.jpg", date: "2025-06-10", content: "### Quick wins\nUse Image, dynamic import, caching headers, and minimal third‑party scripts." }
];
