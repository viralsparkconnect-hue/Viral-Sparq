import { services } from "@/lib/data";
import WhatsAppButton from "@/components/WhatsAppButton"; // ✅ Import WhatsAppButton

export const metadata = { title: "Services — ViralSpark" };

export default function Page() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="h2">Our Services</h1>
          <p className="p mt-3">
            Pick a service just like shopping — clear pricing & easy checkout coming soon 🚀
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="card p-6 flex flex-col border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="text-4xl">{s.icon}</div>

                {/* Title */}
                <div className="mt-3 font-bold text-xl">{s.title}</div>

                {/* Description */}
                <p className="mt-2 text-gray-600">{s.description}</p>

                {/* Features */}
                {s.features && (
                  <ul className="mt-3 text-sm text-gray-600 list-disc pl-5 space-y-1">
                    {s.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}

                {/* Price */}
                <div className="mt-4 text-xl font-bold text-primary">{s.price}</div>

                {/* Buy Button (dummy for now) */}
                <button
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => alert(`Checkout coming soon for ${s.title}`)}
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Floating WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}
