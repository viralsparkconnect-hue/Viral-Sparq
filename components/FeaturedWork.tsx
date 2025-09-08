"use client";

export default function FeaturedWork() {
  const works = [
    {
      title: "Buzz Kata Marketing Campaign",
      description: "Full-funnel digital marketing strategy that grew traffic by 250%.",
      image: "https://via.placeholder.com/300x200.png?text=Buzz+Kata+Campaign",
    },
    {
      title: "ViralSpark Agency Website",
      description: "High-converting Next.js website for agency branding.",
      image: "https://via.placeholder.com/300x200.png?text=Agency+Website",
    },
    {
      title: "Analytics Growth Dashboard",
      description: "Custom-built analytics dashboard for client KPIs.",
      image: "https://via.placeholder.com/300x200.png?text=Analytics+Dashboard",
    },
    {
      title: "E-commerce Revamp",
      description: "Redesigned online store with 40% boost in sales.",
      image: "https://via.placeholder.com/300x200.png?text=E-commerce+Revamp",
    },
    {
      title: "SaaS Growth Funnel",
      description: "End-to-end funnel that doubled SaaS free-trial signups.",
      image: "https://via.placeholder.com/300x200.png?text=SaaS+Funnel",
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Work</h2>
          <a href="/portfolio" className="text-blue-600 hover:underline">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{work.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
