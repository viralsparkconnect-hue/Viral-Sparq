// lib/data.ts

export interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
  features: string[]; // ✅ Add this
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
