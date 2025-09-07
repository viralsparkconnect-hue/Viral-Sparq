// lib/data.ts

// ------------------- Services -------------------
export interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: "🔎",
    title: "SEO & Growth",
    description: "Search visibility, technical audits, and growth strategy.",
    features: ["Strategy & roadmap", "Implementation", "Reporting & iteration"],
    price: "₹15,000 / month",
  },
  {
    icon: "🎯",
    title: "Paid Ads",
    description: "Google & social ads optimized for ROAS.",
    features: ["Strategy & roadmap", "Implementation", "Reporting & iteration"],
    price: "₹20,000 / month",
  },
  {
    icon: "👥",
    title: "Social Media",
    description: "End-to-end content, calendars, and community.",
    features: ["Strategy & roadmap", "Implementation", "Reporting & iteration"],
    price: "₹12,000 / month",
  },
  {
    icon: "💻",
    title: "Web Development",
    description: "Next.js websites that are fast, accessible, and SEO-ready.",
    features: ["Strategy & roadmap", "Implementation", "Reporting & iteration"],
    price: "₹25,000 / project",
  },
  {
    icon: "✨",
    title: "Brand & Design",
    description: "Design systems, identity, and conversion-led UX.",
    features: ["Strategy & roadmap", "Implementation", "Reporting & iteration"],
    price: "₹18,000 / project",
  },
  {
    icon: "📊",
    title: "Analytics",
    description: "Tracking, dashboards, and CRO experiments.",
    features: ["Strategy & roadmap", "Implementation", "Reporting & iteration"],
    price: "₹10,000 / month",
  },
];

// ------------------- Blog Posts -------------------
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "seo-checklist-2025",
    title: "SEO Checklist for 2025 – Future-Proof Your Website Rankings",
    excerpt: "Step-by-step guide to keep your website visible in the AI-first search era.",
    date: "2025-09-01",
    image: "/images/blog/seo-checklist.jpg",
    content: `
      <h2>Core Web Vitals</h2>
      <p>Optimize LCP, INP, CLS for performance...</p>
      <h2>Content That Works</h2>
      <p>Structure for humans and AI...</p>
    `,
  },
  {
    slug: "social-media-strategy",
    title: "Social Media Growth in 2025",
    excerpt: "How to create engaging, algorithm-friendly content.",
    date: "2025-09-02",
    image: "/images/blog/social-media.jpg",
    content: `
      <h2>Content Calendars</h2>
      <p>Plan posts ahead for consistency...</p>
    `,
  },
  {
    slug: "paid-ads-tactics",
    title: "Paid Ads Tactics that Actually Work",
    excerpt: "From Google to Meta Ads — learn what converts.",
    date: "2025-09-03",
    image: "/images/blog/paid-ads.jpg",
    content: `
      <h2>Targeting</h2>
      <p>Focus on ROAS not vanity metrics...</p>
    `,
  },
];

// ------------------- Portfolio Projects -------------------
export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "buzz-kata",
    title: "Buzz Kata Marketing Campaign",
    description: "Full-funnel digital marketing strategy that grew traffic by 250%.",
    image: "/images/projects/buzz-kata.jpg",
    link: "https://buzzkata.com",
  },
  {
    slug: "viral-spark",
    title: "ViralSpark Agency Website",
    description: "High-converting Next.js website for agency branding.",
    image: "/images/projects/viral-spark.jpg",
  },
  {
    slug: "growth-dashboard",
    title: "Analytics Growth Dashboard",
    description: "Custom-built analytics dashboard for client KPIs.",
    image: "/images/projects/dashboard.jpg",
  },
];
